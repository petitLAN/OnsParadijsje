(() => {
  const STORAGE_KEY = "ons-paradijsje-modular-layout-v4-personalized";
  const config = structuredClone(window.HOUSE_CONFIG);
  let layout = loadLayout();
  const dashboard = document.getElementById("dashboard");
  const frameList = document.getElementById("frameList");
  const layoutEditor = document.getElementById("layoutEditor");
  const newFrameType = document.getElementById("newFrameType");

  const DEFAULT_FRAME_TYPES = {
    countdown: "Countdown",
    checklist: "Checklist",
    consistency: "Consistency levels",
    laundry: "Laundry guide",
    redFlags: "Red flags",
    recipes: "Recipes",
    quickActions: "Note cards",
    dailySop: "Daily SOP",
    decisionMatrix: "Decision matrix",
    rooms: "Room map",
    dayflow: "Dayflow",
    kanban: "Kanban",
    notes: "Notes",
    customHtml: "Custom HTML"
  };

  const FRAME_TYPES = { ...DEFAULT_FRAME_TYPES, ...(config.frameTypes || {}) };
  const ui = config.ui || {};

  function loadLayout() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const rawLayout = saved ? JSON.parse(saved) : structuredClone(config.layout);
      return normalizeLayout(rawLayout);
    } catch {
      return normalizeLayout(structuredClone(config.layout));
    }
  }

  function saveLayout() {
    layout = normalizeLayout(layout);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(layout));
  }

  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function slug(value) {
    return String(value || "frame")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "frame";
  }

  function normalizeLayout(rawLayout) {
    const seen = new Map();
    return (Array.isArray(rawLayout) ? rawLayout : []).map((rawFrame, index) => {
      const frame = (rawFrame && typeof rawFrame === "object") ? structuredClone(rawFrame) : {};
      frame.type = frame.type || "customHtml";
      frame.title = frame.title || FRAME_TYPES[frame.type] || `Frame ${index + 1}`;
      frame.width = frame.width || defaultWidth(frame.type);

      // Checklist frames no longer support a max-item limit. Removing it here
      // keeps old browser-saved layouts and exported config files clean.
      if (frame.type === "checklist") delete frame.limit;

      const baseId = slug(frame.id || `${frame.type}-${index + 1}`);
      const count = seen.get(baseId) || 0;
      seen.set(baseId, count + 1);
      frame.id = count === 0 ? baseId : `${baseId}-${count + 1}`;

      return frame;
    });
  }

  function sanitizeForExport(value) {
    if (Array.isArray(value)) {
      return Array.from(value)
        .filter(item => item !== undefined && item !== null)
        .map(sanitizeForExport);
    }
    if (value && typeof value === "object") {
      return Object.fromEntries(
        Object.entries(value)
          .filter(([, item]) => item !== undefined)
          .map(([key, item]) => [key, sanitizeForExport(item)])
      );
    }
    return value;
  }

  function list(items) {
    return `<ul class="clean">${(items || []).map(item => `<li>${esc(item)}</li>`).join("")}</ul>`;
  }

  function splitLeadingEmoji(value) {
    const text = String(value ?? "").trim();
    // Lets decision-matrix strings like "🚿 Schone Handdoek" use the emoji
    // as the marker, while normal strings keep the default bullet.
    const match = text.match(/^(\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?)*)\s+(.+)$/u);
    if (!match) return { emoji: "", text };
    return { emoji: match[1], text: match[2] };
  }

  function normalizeDecisionItem(item) {
    if (item && typeof item === "object") {
      const emoji = item.emoji || item.icon || item.marker || "";
      const text = item.text || item.item || item.task || item.label || item.title || item.name || item.problem || "";
      const detail = item.note || item.detail || item.description || item.fix || "";
      return { emoji: String(emoji || "").trim(), text: String(text || "").trim(), detail: String(detail || "").trim() };
    }

    const parsed = splitLeadingEmoji(item);
    return { emoji: parsed.emoji, text: parsed.text, detail: "" };
  }

  function decisionList(items) {
    const rows = (items || [])
      .map(normalizeDecisionItem)
      .filter(item => item.text || item.emoji || item.detail);

    return `<ul class="clean matrix-list">${rows.map(item => {
      const detail = item.detail ? `<span class="matrix-item-detail">${esc(item.detail)}</span>` : "";
      if (!item.emoji) {
        return `<li>${esc(item.text)}${detail}</li>`;
      }
      return `<li class="matrix-item-has-emoji"><span class="matrix-item-emoji" aria-hidden="true">${esc(item.emoji)}</span><span class="matrix-item-content"><span class="matrix-item-text">${esc(item.text)}</span>${detail}</span></li>`;
    }).join("")}</ul>`;
  }

  function checklist(items, frameId) {
    return `<div class="check">${(items || []).map((item, index) => {
      const key = `${frameId}-${index}`;
      return `<label><input type="checkbox" data-check="${esc(key)}"><span>${esc(item)}</span></label>`;
    }).join("")}</div>`;
  }

  function renderShell(frame, body, typeLabel) {
    const article = document.createElement("article");
    const titleModeClass = frame.titleMode === "clip" ? "title-clip" : "";
    article.className = `card frame-card ${frame.width || "span-4"} ${frame.type === "countdown" ? "countdown-card" : ""} ${titleModeClass}`;
    article.id = slug(frame.id);
    article.dataset.frameId = frame.id;
    const tagLabel = frame.tag || frame.handle || frame.category || typeLabel || FRAME_TYPES[frame.type] || frame.type;
    article.innerHTML = `
      <div class="frame-card-head">
        <div>
          <div class="frame-tags"><span class="tag blue">${esc(tagLabel)}</span></div>
          <h2>${esc(frame.title || FRAME_TYPES[frame.type] || "Frame")}</h2>
        </div>
      </div>
      <div class="frame-body">${body}</div>`;
    return article;
  }

  function renderCountdown(frame) {
    const countdownLibrary = config.content?.countdowns || {};
    const countdownFromSource = frame.source ? (countdownLibrary[frame.source] || {}) : {};
    const countdownData = { ...countdownFromSource, ...(frame.countdown || {}) };
    const defaultCountdownCopy = ui.countdown || {};
    const countdownCopy = {
      ...defaultCountdownCopy,
      ...countdownData
    };
    const targetDate = frame.targetDate || countdownData.targetDate || config.meta.countdownTarget;
    return renderShell(frame, `
      <div class="countdown-widget"
        data-countdown-widget
        data-target-date="${esc(targetDate)}"
        data-initial-text="${esc(countdownCopy.initialText || "Counting down.")}"
        data-many-days-text="${esc(countdownCopy.manyDaysText || "days left.")}"
        data-days-left-tag="${esc(countdownCopy.daysLeftTag || "Days left")}"
        data-one-day-text="${esc(countdownCopy.oneDayText || "day left.")}"
        data-tomorrow-text="${esc(countdownCopy.tomorrowText || "Tomorrow ❤️")}"
        data-almost-short-tag="${esc(countdownCopy.almostShortTag || "Almost")}"
        data-today-text="${esc(countdownCopy.todayText || "Today is the day ❤️")}"
        data-today-tag="${esc(countdownCopy.todayTag || "Today")}"
        data-complete-text="${esc(countdownCopy.completeText || "The countdown is complete ❤️")}"
        data-complete-tag="${esc(countdownCopy.completeTag || "Complete")}">
        <div class="big-number" data-countdown-days>--</div>
        <p data-countdown-text>${esc(countdownCopy.initialText || "Counting down.")}</p>
        <span class="tag ok" data-countdown-tag>${esc(countdownCopy.dateTag || countdownCopy.daysLeftTag || "Days left")}</span><span class="tag warn">${esc(countdownCopy.almostTag || "Almost there")}</span>
      </div>
    `, "countdown frame");
  }

  function normalizeChecklistItems(value) {
    if (Array.isArray(value)) return value;
    if (Array.isArray(value?.items)) return value.items;
    if (Array.isArray(value?.points)) return value.points;
    if (Array.isArray(value?.tasks)) return value.tasks;
    return [];
  }

  function renderChecklist(frame) {
    const source = frame.source || "daily";

    // Checklist cards are intentionally unlimited: every item in the configured
    // source array is rendered. Older exported layouts may still contain
    // limit: 5, but checklist frames ignore it so localStorage cannot keep
    // hiding new items after you add them to config.js.
    const sourceData =
      frame.items ||
      frame.content?.items ||
      config.content?.checklists?.[source] ||
      config.content?.[source] ||
      [];

    return renderShell(frame, checklist(normalizeChecklistItems(sourceData), frame.id), "checklist frame");
  }

  function renderConsistency(frame) {
    const items = frame.items || config.content?.consistencies || [];
    const html = items.map(item => {
      const displayValue = getConsistencyDisplayValue(item);
      const fillPercent = getConsistencyFillPercent(item);
      const label = displayValue ? `<span class="small consistency-value">${esc(displayValue)}</span>` : "";

      return `
        <div class="score-row consistency-row">
          <strong>${esc(item.title || "")}</strong>
          <div class="bar"><span style="width:${fillPercent}%"></span></div>
          ${label}
        </div>
        ${item.detail ? `<p class="tinyline">${esc(item.detail)}</p>` : ""}
      `;
    }).join("");

    return renderShell(frame, html, "consistency frame");
  }

  function getConsistencyDisplayValue(item) {
    if (!item || typeof item !== "object") return "";

    if (item.display) return String(item.display);
    if (item.label) return String(item.label);

    if (item.frequency) {
      return frequencyToFractionLabel(item.frequency);
    }

    if (typeof item.every === "number") {
      const numerator = typeof item.times === "number" ? item.times : 1;
      return `${numerator}/${item.every}`;
    }

    if (typeof item.denominator === "number") {
      const numerator = typeof item.numerator === "number" ? item.numerator : 1;
      return `${numerator}/${item.denominator}`;
    }

    if (typeof item.score === "number") {
      return `${item.score}%`;
    }

    return "";
  }

  function getConsistencyFillPercent(item) {
    if (!item || typeof item !== "object") return 0;

    if (typeof item.fill === "number") {
      return clampConsistencyNumber(item.fill, 0, 100);
    }

    if (typeof item.score === "number") {
      return clampConsistencyNumber(item.score, 0, 100);
    }

    const fraction = getConsistencyFraction(item);
    if (fraction && fraction.denominator !== 0) {
      return clampConsistencyNumber((fraction.numerator / fraction.denominator) * 100, 2, 100);
    }

    return 0;
  }

  function getConsistencyFraction(item) {
    if (!item || typeof item !== "object") return null;

    if (item.frequency) {
      return frequencyToFraction(item.frequency);
    }

    if (typeof item.every === "number") {
      return {
        numerator: typeof item.times === "number" ? item.times : 1,
        denominator: item.every
      };
    }

    if (typeof item.denominator === "number") {
      return {
        numerator: typeof item.numerator === "number" ? item.numerator : 1,
        denominator: item.denominator
      };
    }

    return null;
  }

  function frequencyToFractionLabel(value) {
    const fraction = frequencyToFraction(value);
    if (!fraction) return String(value || "");
    return `${fraction.numerator}/${fraction.denominator}`;
  }

  function frequencyToFraction(value) {
    if (typeof value === "number") {
      return { numerator: 1, denominator: value };
    }

    const text = String(value || "").trim();
    if (!text) return null;

    const slashMatch = text.match(/^(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)$/);
    if (slashMatch) {
      return {
        numerator: Number(slashMatch[1]),
        denominator: Number(slashMatch[2])
      };
    }

    const numberMatch = text.match(/^\d+(?:\.\d+)?$/);
    if (numberMatch) {
      return { numerator: 1, denominator: Number(text) };
    }

    return null;
  }

  function clampConsistencyNumber(value, min, max) {
    const number = Number(value);
    if (!Number.isFinite(number)) return min;
    return Math.max(min, Math.min(max, number));
  }

  function normalizeTextList(value) {
    if (Array.isArray(value)) {
      return value
        .map(item => String(item ?? "").trim())
        .filter(Boolean);
    }
    if (typeof value === "string") {
      const trimmed = value.trim();
      return trimmed ? [trimmed] : [];
    }
    return [];
  }

  function renderAvoidBlock(item) {
    // Preferred for multiple avoids: avoid: ["...", "..."]
    // Also accepted: avoids: ["...", "..."]
    // Legacy single-string avoid still works. Empty/missing values render nothing.
    const avoids = [
      ...normalizeTextList(item.avoid),
      ...normalizeTextList(item.avoids)
    ];

    if (!avoids.length) return "";

    if (avoids.length === 1) {
      return `<p><strong>Avoid:</strong> ${esc(avoids[0])}</p>`;
    }

    return `
      <div class="laundry-avoid">
        <p><strong>Avoid:</strong></p>
        <ul class="clean">${avoids.map(avoid => `<li>${esc(avoid)}</li>`).join("")}</ul>
      </div>
    `;
  }

  function renderLaundry(frame) {
    const html = (config.content.laundry || []).map(item => {
      const summary = [item.load, item.temp].filter(Boolean).join(" — ");
      const detergentLine = item.detergent
        ? `<p><strong>${esc(item.detergentLabel || "Was Spul")}:</strong> ${esc(item.detergent)}</p>`
        : "";
      const noteLine = renderLaundryNoteLine(item);

      return `
        <details>
          <summary>${esc(summary)}</summary>
          ${detergentLine}
          ${noteLine}
        </details>
      `;
    }).join("");

    return renderShell(frame, html, "instruction frame");
  }

  function renderLaundryNoteLine(item) {
    const notes = normalizeLaundryNotes(item);
    if (!notes.length) return "";

    const label = item.avoidLabel || item.avoidsLabel || item.noteLabel || item.notesLabel || item.label || "Avoid";
    const labelText = formatLaundryLabel(label);

    if (notes.length === 1) {
      return `<div class="laundry-note"><p><strong>${esc(labelText)}</strong> ${esc(notes[0])}</p></div>`;
    }

    return `
      <div class="laundry-note">
        <p><strong>${esc(labelText)}</strong></p>
        <ul class="clean">
          ${notes.map(note => `<li>${esc(note)}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  function normalizeLaundryNotes(item) {
    const raw = item.notes ?? item.note ?? item.avoids ?? item.avoid ?? [];

    if (Array.isArray(raw)) {
      return raw
        .map(value => String(value || "").trim())
        .filter(Boolean);
    }

    const text = String(raw || "").trim();
    return text ? [text] : [];
  }

  function formatLaundryLabel(label) {
    const text = String(label || "Avoid").trim();
    return /[:：]$/.test(text) ? text : `${text}:`;
  }


  function normalizeRedFlagBlock(frame) {
    const source = frame.source || "shoppingStock";
    const library = config.content?.redFlagLists || {};

    // Preferred formats:
    // 1) frame.content / frame.items for fully inline per-frame lists.
    // 2) content.redFlagLists[source] for reusable named lists.
    // 3) content[source] as a legacy fallback for older config files.
    const sourceData =
      frame.content ||
      (Array.isArray(frame.items) ? { items: frame.items } : null) ||
      library[source] ||
      config.content?.[source] ||
      (source === "troubleshooting" ? config.content?.troubleshooting : null) ||
      [];

    const block = Array.isArray(sourceData) ? { items: sourceData } : (sourceData || {});
    const rawItems = block.items || block.points || block.list || block.warnings || [];

    return {
      intro: block.intro || block.note || "",
      items: Array.isArray(rawItems) ? rawItems.filter(Boolean) : []
    };
  }

  function redFlagItem(item) {
    if (typeof item === "string") return `<li>${esc(item)}</li>`;
    if (!item || typeof item !== "object") return "";

    const title = item.title || item.text || item.label || item.problem || item.name || "";
    const detail = item.detail || item.note || item.fix || item.description || "";
    const emoji = item.emoji ? `${esc(item.emoji)} ` : "";

    return `<li>${title ? `<strong>${emoji}${esc(title)}</strong>` : ""}${detail ? `<span class="red-flag-detail">${esc(detail)}</span>` : ""}</li>`;
  }

  function redFlagList(items) {
    return `<ul class="clean red-flag-list">${(items || []).map(redFlagItem).join("")}</ul>`;
  }

  function renderRedFlags(frame) {
    const block = normalizeRedFlagBlock(frame);
    const intro = block.intro ? `<p class="red-flag-note">${esc(block.intro)}</p>` : "";
    return renderShell(frame, `${intro}${redFlagList(block.items)}`, "alert frame");
  }

  function recipeCard(recipe) {
    return `<article class="plain-card recipe-card">
      <h4>🍽️ ${esc(recipe.name)}</h4>
      <span class="tag">${esc(recipe.time)}</span>
      <p class="small"><strong>Ingredients:</strong> ${(recipe.ingredients || []).map(esc).join(", ")}</p>
      <details><summary>Steps</summary>${list(recipe.steps)}<p>${esc(recipe.note)}</p></details>
    </article>`;
  }

  function renderRecipes(frame) {
    const html = `<div class="mini-grid recipe-grid">${(config.content.recipes || []).map(recipeCard).join("")}</div>`;
    return renderShell(frame, html, "recipe frame");
  }

  function renderQuickActions(frame) {
    const source = frame.source || "quickActions";
    const actions = config.content[source] || [];
    const html = `<div class="launcher note-launcher">${actions.map((action, index) => `
      <article class="launch-card note-card" data-note-index="${index}">
        <strong>${esc(action.emoji || "✨")} ${esc(action.title)}</strong>
        <span>${esc(action.description)}</span>
      </article>`).join("")}</div>`;
    return renderShell(frame, html, "note frame");
  }

  function renderDailySop(frame) {
    const source = frame.source || "dailySop";
    let items = config.content[source] || config.content.daily || [];
    if (Number.isFinite(frame.limit)) items = items.slice(0, frame.limit);
    const html = `<ol class="procedure">${items.map(item => `<li>${esc(item)}</li>`).join("")}</ol>`;
    return renderShell(frame, html, "procedure frame");
  }

  /* ── Decision matrix helpers (no legacy fixed‑column logic) ── */

  /**
   * Normalise any decision‑matrix definition into a simple array of category objects.
   * Supports inline frame.categories, content.decisionMatrices[key], and older
   * content[key] structures that are already an array.
   */
  function normalizeDecisionCategories(matrix) {
    let raw = [];
    if (Array.isArray(matrix)) raw = matrix;
    else if (Array.isArray(matrix?.categories)) raw = matrix.categories;
    else if (Array.isArray(matrix?.columns)) raw = matrix.columns;

    return Array.from(raw)
      .filter(column => column && typeof column === "object")
      .map(column => {
        const items = column.items || column.tasks || column.points || [];
        return {
          ...column,
          items: Array.isArray(items) ? items.filter(item => item !== undefined && item !== null) : []
        };
      });
  }

  /**
   * Choose a visual tag class for a category.
   * Accepted values: "warn", "ok", "blue", "" (default).
   * If the configured value is not in the set, fall back to a safe repeating pattern.
   */
  function decisionLabelClass(column = {}, index = 0) {
    const allowed = new Set(["", "ok", "warn", "blue"]);
    const configured = String(column.labelClass || column.tagClass || column.tone || "").trim();
    if (allowed.has(configured)) return configured;
    // Purely visual fallback; no meaning is inferred.
    return ["warn", "blue", "ok", ""][index % 4];
  }

  function renderDecisionMatrix(frame) {
    // 1. Try inline categories (highest priority)
    if (Array.isArray(frame.categories)) {
      const columns = normalizeDecisionCategories(frame.categories);
      const html = buildMatrixHtml(columns);
      return renderShell(frame, html, "decision frame");
    }

    // 2. Try the source key inside content.decisionMatrices
    const matrices = config.content?.decisionMatrices || {};
    const source = frame.source;
    if (source && matrices[source]) {
      const columns = normalizeDecisionCategories(matrices[source]);
      const html = buildMatrixHtml(columns);
      return renderShell(frame, html, "decision frame");
    }

    // 3. Fall back to config.content[source] (if it’s an array of categories)
    if (source && Array.isArray(config.content?.[source])) {
      const columns = normalizeDecisionCategories(config.content[source]);
      const html = buildMatrixHtml(columns);
      return renderShell(frame, html, "decision frame");
    }

    // 4. Last resort: show a placeholder message
    const fallback = `<p>No decision categories defined. Add them via frame.categories or a source key in content.decisionMatrices.</p>`;
    return renderShell(frame, fallback, "decision frame");
  }

  /** Build the HTML for an already-normalised array of category objects. */
  function buildMatrixHtml(columns) {
    if (!columns.length) {
      return `<p>No decision categories defined. Add category objects to this matrix in <code>assets/config.js</code>.</p>`;
    }

    return `<div class="matrix">${columns.map((column, index) => {
      const labelClass = decisionLabelClass(column, index);
      const labelText = column.label || column.tag || column.badge || column.title || "Item";
      const titleText = column.title || column.heading || labelText;
      const note = column.note ? `<p class="small decision-matrix-note-card">${esc(column.note)}</p>` : "";
      return `
      <article class="matrix-card">
        <span class="tag ${esc(labelClass)}">${esc(labelText)}</span>
        <h3>${esc(titleText)}</h3>
        ${note}
        ${decisionList(column.items)}
      </article>`;
    }).join("")}
    </div>`;
  }

  /* ── End decision matrix helpers ── */

  function renderRooms(frame) {
    const html = `<div class="room-grid">${(config.content.rooms || []).map((room, index) => `
      <article class="room-tile">
        <div><h2>${esc(room.emoji)} ${esc(room.name)}</h2><span class="tag blue">${esc(room.status)}</span></div>
        ${list(room.notes)}
        <label><input type="checkbox" data-check="${esc(frame.id)}-${index}"> Room checked</label>
      </article>`).join("")}</div>`;
    return renderShell(frame, html, "room frame");
  }

  function renderDayflow(frame) {
    const html = `
      <div class="time-block"><div class="time-pill">Morning</div><div class="plain-card"><h3>Fresh start</h3>${checklist((config.content.daily || []).slice(0, 2), frame.id + "-morning")}</div></div>
      <div class="time-block"><div class="time-pill">Anytime</div><div class="plain-card"><h3>Maintenance</h3>${checklist((config.content.everyFewDays || []).slice(0, 3), frame.id + "-anytime")}</div></div>
      <div class="time-block"><div class="time-pill">Dinner</div><div class="plain-card"><h3>Food</h3><div class="mini-grid recipe-grid">${(config.content.recipes || []).map(recipeCard).join("")}</div></div></div>
      <div class="time-block"><div class="time-pill">Evening</div><div class="plain-card"><h3>Close-down routine</h3>${checklist((config.content.daily || []).slice(2), frame.id + "-evening")}</div></div>`;
    return renderShell(frame, html, "timeline frame");
  }

  function renderKanban(frame) {
    const now = (config.content.daily || []).slice(0, 3);
    const next = (config.content.daily || []).slice(3).concat((config.content.everyFewDays || []).slice(0, 2));
    const later = (config.content.weekly || []).concat((config.content.everyFewDays || []).slice(2));
    const task = (text, idx) => `<div class="task-card"><label><input type="checkbox" data-check="${esc(frame.id)}-${idx}"><strong>${esc(text)}</strong></label></div>`;
    const html = `<div class="board">
      <div class="column"><span class="tag warn">Now</span><h3>Reset the house</h3>${now.map((x, i) => task(x, "now-" + i)).join("")}</div>
      <div class="column"><span class="tag blue">Next</span><h3>Keep it moving</h3>${next.map((x, i) => task(x, "next-" + i)).join("")}</div>
      <div class="column"><span class="tag ok">Later</span><h3>Weekly / optional</h3>${later.map((x, i) => task(x, "later-" + i)).join("")}</div>
    </div>`;
    return renderShell(frame, html, "workflow frame");
  }

  function renderNotes(frame) {
    return renderShell(frame, list(config.content.sweetNotes || []), "note frame");
  }

  function renderCustomHtml(frame) {
    const fallbackHtml = ui.editor?.customFramePlaceholder || `<p>Edit this frame in <code>assets/config.js</code>.</p>`;
    return renderShell(frame, frame.html || fallbackHtml, "custom frame");
  }

  const renderers = {
    countdown: renderCountdown,
    checklist: renderChecklist,
    consistency: renderConsistency,
    laundry: renderLaundry,
    redFlags: renderRedFlags,
    recipes: renderRecipes,
    quickActions: renderQuickActions,
    dailySop: renderDailySop,
    decisionMatrix: renderDecisionMatrix,
    rooms: renderRooms,
    dayflow: renderDayflow,
    kanban: renderKanban,
    notes: renderNotes,
    customHtml: renderCustomHtml
  };

  function renderDashboard() {
    layout = normalizeLayout(layout);
    dashboard.innerHTML = "";
    layout.filter(frame => frame.enabled !== false).forEach(frame => {
      const renderer = renderers[frame.type] || renderCustomHtml;
      dashboard.appendChild(renderer(frame));
    });
    restoreChecks();
    updateCountdowns();
    renderFrameEditor();
  }

  function renderFrameEditor() {
    frameList.innerHTML = "";
    layout.forEach((frame, index) => {
      const row = document.createElement("div");
      row.className = "frame-row";
      row.innerHTML = `
        <div>
          <h4>${esc(frame.title || frame.type)}</h4>
          <p class="small">${esc(frame.id)} · tag: ${esc(frame.tag || frame.handle || frame.category || "Untitled")} · ${esc(FRAME_TYPES[frame.type] || frame.type)} · ${esc(frame.width || "span-4")} · ${frame.enabled === false ? esc(ui.editor?.hiddenLabel || "hidden") : esc(ui.editor?.visibleLabel || "visible")}</p>
        </div>
        <div class="frame-actions">
          <button type="button" data-action="up" data-index="${index}">↑</button>
          <button type="button" data-action="down" data-index="${index}">↓</button>
          <button type="button" data-action="duplicate" data-index="${index}">${esc(ui.editor?.duplicateLabel || "Duplicate")}</button>
          <button type="button" data-action="toggle" data-index="${index}">${frame.enabled === false ? esc(ui.editor?.showLabel || "Show") : esc(ui.editor?.hideLabel || "Hide")}</button>
          <select class="frame-width" data-action="width" data-index="${index}">
            ${["span-3","span-4","span-5","span-6","span-7","span-8","span-12"].map(w => `<option value="${w}" ${frame.width === w ? "selected" : ""}>${w}</option>`).join("")}
          </select>
          <button type="button" class="danger" data-action="remove" data-index="${index}">${esc(ui.editor?.removeLabel || "Remove")}</button>
        </div>`;
      frameList.appendChild(row);
    });
  }

  function moveFrame(from, to) {
    if (to < 0 || to >= layout.length) return;
    const [frame] = layout.splice(from, 1);
    layout.splice(to, 0, frame);
    saveLayout();
    renderDashboard();
  }

  function duplicateFrame(index) {
    const copy = structuredClone(layout[index]);
    copy.id = `${slug(copy.id)}-copy-${Date.now().toString(36)}`;
    copy.title = `${copy.title || FRAME_TYPES[copy.type] || "Frame"} ${ui.editor?.copySuffix || "copy"}`;
    copy.enabled = true;
    layout.splice(index + 1, 0, copy);
    saveLayout();
    renderDashboard();
  }

  function defaultCategory(type) {
    return ({
      countdown: "Love",
      checklist: "Today",
      consistency: "House rhythm",
      laundry: "Instructions",
      redFlags: "Help",
      recipes: "Food",
      quickActions: "Actions",
      dailySop: "Routine",
      decisionMatrix: "Decisions",
      rooms: "Rooms",
      dayflow: "Routine",
      kanban: "Routine",
      notes: "Love",
      customHtml: "Custom"
    })[type] || "General";
  }

  function defaultWidth(type) {
    return ({
      customHtml: "span-6",
      recipes: "span-12",
      quickActions: "span-12",
      dailySop: "span-6",
      decisionMatrix: "span-6",
      rooms: "span-12",
      dayflow: "span-12",
      kanban: "span-12"
    })[type] || "span-4";
  }

  function addFrame(type) {
    const id = `${slug(type)}-${Date.now().toString(36)}`;
    const frame = { id, type, category: defaultCategory(type), title: FRAME_TYPES[type] || "New frame", width: defaultWidth(type), enabled: true };
    if (type === "checklist") frame.source = "daily";
    if (type === "dailySop") frame.source = "dailySop";
    if (type === "redFlags") {
      const firstRedFlagListKey = Object.keys(config.content?.redFlagLists || {})[0];
      frame.source = firstRedFlagListKey || "shoppingStock";
    }
    if (type === "countdown") {
      const firstCountdownKey = Object.keys(config.content?.countdowns || {})[0];
      frame.source = firstCountdownKey || "";
    }
    if (type === "decisionMatrix") {
      const firstDecisionMatrixKey = Object.keys(config.content?.decisionMatrices || {})[0];
      frame.source = firstDecisionMatrixKey || "";
    }
    if (type === "customHtml") frame.html = ui.editor?.customFramePlaceholder || "<p>A custom frame. Edit this in the exported config.</p>";
    layout.push(frame);
    saveLayout();
    renderDashboard();
  }

  function updateCountdowns() {
    document.querySelectorAll("[data-countdown-widget]").forEach(widget => {
      const targetDateText = widget.dataset.targetDate || config.meta.countdownTarget;
      const daysEl = widget.querySelector("[data-countdown-days]");
      const textEl = widget.querySelector("[data-countdown-text]");
      const tagEl = widget.querySelector("[data-countdown-tag]");
      const target = parseLocalDate(targetDateText);
      if (!target || Number.isNaN(target.getTime())) {
        if (daysEl) daysEl.textContent = "?";
        if (textEl) textEl.textContent = `Invalid target date: ${targetDateText || "empty"}`;
        if (tagEl) tagEl.textContent = "Check config";
        return;
      }

      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const targetDay = new Date(target.getFullYear(), target.getMonth(), target.getDate());
      const msPerDay = 24 * 60 * 60 * 1000;
      const dayDiff = Math.ceil((targetDay - today) / msPerDay);
      if (dayDiff > 1) {
        daysEl.textContent = dayDiff;
        textEl.textContent = widget.dataset.manyDaysText || "days left.";
        tagEl.textContent = widget.dataset.daysLeftTag || "Days left";
      } else if (dayDiff === 1) {
        daysEl.textContent = "1";
        textEl.textContent = widget.dataset.oneDayText || "day left.";
        tagEl.textContent = widget.dataset.almostShortTag || "Almost";
      } else if (dayDiff === 0) {
        daysEl.textContent = "0";
        textEl.innerHTML = esc(widget.dataset.todayText || "Today is the day ❤️");
        tagEl.textContent = widget.dataset.todayTag || "Today";
      } else {
        daysEl.textContent = "0";
        textEl.innerHTML = esc(widget.dataset.completeText || "The countdown is complete ❤️");
        tagEl.textContent = widget.dataset.completeTag || "Complete";
      }
    });
  }

  function parseLocalDate(value) {
    const [year, month, day] = String(value || "").split("-").map(Number);
    if (!year || !month || !day) return null;
    return new Date(year, month - 1, day, 0, 0, 0);
  }

  function restoreChecks() {
    document.querySelectorAll('input[type="checkbox"][data-check]').forEach(input => {
      const key = `ons-paradijsje-${input.dataset.check}`;
      const updateDoneState = () => {
        const label = input.closest("label");
        if (label) label.classList.toggle("is-done", input.checked);
      };
      input.checked = localStorage.getItem(key) === "1";
      updateDoneState();
      input.addEventListener("change", () => {
        localStorage.setItem(key, input.checked ? "1" : "0");
        updateDoneState();
      });
    });
  }

  function buildConfigFile() {
    const exported = sanitizeForExport(structuredClone(config));
    exported.layout = normalizeLayout(layout).map(frame => {
      const cleanFrame = sanitizeForExport(frame);
      if (cleanFrame.type === "checklist") delete cleanFrame.limit;
      return cleanFrame;
    });
    return `/* Exported from Ons Paradijsje modular dashboard */\nwindow.HOUSE_CONFIG = ${JSON.stringify(exported, null, 2)};\n`;
  }

  function download(filename, text) {
    const blob = new Blob([text], { type: "text/javascript" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    if (!ok) throw new Error("Fallback copy command failed");
    return true;
  }

  function showToolbarMessage(message, restoreDelay = 2200) {
    const note = document.getElementById("toolbarNote");
    if (!note) return;
    const original = ui.toolbar?.note || "";
    note.textContent = message;
    window.clearTimeout(showToolbarMessage.timer);
    showToolbarMessage.timer = window.setTimeout(() => {
      note.textContent = original;
    }, restoreDelay);
  }

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value || "";
  }

  function initializeStaticText() {
    document.title = config.meta.documentTitle || config.meta.title || "";
    setText("siteTitle", config.meta.title);
    setText("siteSubtitle", config.meta.subtitle);
    setText("siteGreeting", config.meta.greeting);
    setText("siteHelper", config.meta.helper);
    setText("heroLabel", config.meta.heroLabel);

    const toolbar = document.getElementById("toolbar");
    if (toolbar && ui.toolbar?.ariaLabel) toolbar.setAttribute("aria-label", ui.toolbar.ariaLabel);
    setText("editorToggle", ui.toolbar?.editorToggle || "Edit layout");
    setText("resetLayout", ui.toolbar?.resetLayout || "Reset layout");
    setText("downloadConfig", ui.toolbar?.downloadConfig || "Download config.js");
    setText("copyConfig", ui.toolbar?.copyConfig || "Copy config.js");
    setText("toolbarNote", ui.toolbar?.note || "");

    setText("editorTitle", ui.editor?.title || "Interface frames");
    setText("editorDescription", ui.editor?.description || "");
    setText("addFrame", ui.editor?.addFrame || "Add frame");
    setText("howTitle", ui.editor?.howTitle || "How this works");
    const howList = document.getElementById("howList");
    if (howList) howList.innerHTML = (ui.editor?.howList || []).map(item => `<li>${esc(item)}</li>`).join("");

    setText("footerNote", ui.footerNote || "");
  }

  function initializeEditorControls() {
    newFrameType.innerHTML = Object.entries(FRAME_TYPES).map(([value, label]) => `<option value="${value}">${label}</option>`).join("");

    document.getElementById("editorToggle").addEventListener("click", () => {
      layoutEditor.hidden = !layoutEditor.hidden;
    });

    document.getElementById("resetLayout").addEventListener("click", () => {
      if (!confirm(ui.editor?.resetConfirm || "Reset the layout to the default config order?")) return;
      localStorage.removeItem(STORAGE_KEY);
      layout = normalizeLayout(structuredClone(config.layout));
      renderDashboard();
    });

    document.getElementById("downloadConfig").addEventListener("click", () => download("config.js", buildConfigFile()));

    const copyButton = document.getElementById("copyConfig");
    if (copyButton) {
      copyButton.addEventListener("click", async () => {
        try {
          await copyToClipboard(buildConfigFile());
          showToolbarMessage(ui.toolbar?.copySuccess || "Copied config.js source to clipboard.");
        } catch (error) {
          console.error(error);
          showToolbarMessage(ui.toolbar?.copyError || "Could not copy config.js automatically.", 3600);
        }
      });
    }

    document.getElementById("addFrame").addEventListener("click", () => addFrame(newFrameType.value));

    frameList.addEventListener("click", event => {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      const index = Number(button.dataset.index);
      const action = button.dataset.action;
      if (action === "up") moveFrame(index, index - 1);
      if (action === "down") moveFrame(index, index + 1);
      if (action === "duplicate") duplicateFrame(index);
      if (action === "toggle") {
        layout[index].enabled = layout[index].enabled === false;
        saveLayout();
        renderDashboard();
      }
      if (action === "remove") {
        layout.splice(index, 1);
        saveLayout();
        renderDashboard();
      }
    });

    frameList.addEventListener("change", event => {
      const select = event.target.closest('select[data-action="width"]');
      if (!select) return;
      const index = Number(select.dataset.index);
      layout[index].width = select.value;
      saveLayout();
      renderDashboard();
    });
  }

  initializeStaticText();
  initializeEditorControls();
  renderDashboard();
  setInterval(updateCountdowns, 60 * 60 * 1000);
})();