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
      return saved ? JSON.parse(saved) : structuredClone(config.layout);
    } catch {
      return structuredClone(config.layout);
    }
  }

  function saveLayout() {
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
    return String(value || "frame").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "frame";
  }

  function list(items) {
    return `<ul class="clean">${(items || []).map(item => `<li>${esc(item)}</li>`).join("")}</ul>`;
  }

  function checklist(items, frameId) {
    return `<div class="check">${(items || []).map((item, index) => {
      const key = `${frameId}-${index}`;
      return `<label><input type="checkbox" data-check="${esc(key)}"><span>${esc(item)}</span></label>`;
    }).join("")}</div>`;
  }

  function renderShell(frame, body, typeLabel) {
    const article = document.createElement("article");
    article.className = `card frame-card ${frame.width || "span-4"} ${frame.type === "countdown" ? "countdown-card" : ""}`;
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
    const targetDate = frame.targetDate || config.meta.countdownTarget;
    const countdownUi = ui.countdown || {};
    return renderShell(frame, `
      <div class="big-number" data-countdown-days data-target-date="${esc(targetDate)}">--</div>
      <p data-countdown-text>${esc(countdownUi.initialText || "Counting down until we see each other again.")}</p>
      <span class="tag ok" data-countdown-tag>${esc(countdownUi.dateTag || "30 June")}</span><span class="tag warn">${esc(countdownUi.almostTag || "Almost there")}</span>
    `, "dynamic frame");
  }

  function renderChecklist(frame) {
    const source = frame.source || "daily";
    let items = config.content[source] || [];
    if (Number.isFinite(frame.limit)) items = items.slice(0, frame.limit);
    return renderShell(frame, checklist(items, frame.id), "checklist frame");
  }

  function renderConsistency(frame) {
    const rows = (config.content.consistencies || []).map(item => `
      <div class="score-row">
        <strong>${esc(item.title)}</strong>
        <div class="bar"><span style="width:${Math.max(0, Math.min(100, Number(item.score || 0)))}%"></span></div>
        <span class="small">${esc(item.score)}%</span>
      </div>
      <p class="tinyline">${esc(item.detail)}</p>
    `).join("");
    return renderShell(frame, rows, "status frame");
  }

  function renderLaundry(frame) {
    const html = (config.content.laundry || []).map(item => `
      <details>
        <summary>${esc(item.load)} — ${esc(item.temp)}</summary>
        <p><strong>Detergent:</strong> ${esc(item.detergent)}</p>
        <p><strong>Avoid:</strong> ${esc(item.avoid)}</p>
      </details>
    `).join("");
    return renderShell(frame, html, "instruction frame");
  }

  function renderRedFlags(frame) {
    const source = frame.source || "shoppingStock";
    const items = config.content[source] || (config.content.troubleshooting || []).map(item => item.problem);
    return renderShell(frame, list(items), "alert frame");
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
    const html = `<div class="mini-grid">${(config.content.recipes || []).map(recipeCard).join("")}</div>`;
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

  function renderDecisionMatrix(frame) {
    const matrix = config.content.decisionMatrix || {};
    const columns = Array.isArray(matrix) ? matrix : [
      { title: "Do now", tag: "urgent", items: matrix.doNow || [] },
      { title: "Can wait", tag: "optional", items: matrix.canWait || [] }
    ];
    const html = `<div class="matrix">${columns.map(column => `
      <article class="matrix-card">
        <span class="tag ${String(column.tag || "").toLowerCase().includes("urgent") ? "warn" : "ok"}">${esc(column.tag || column.title)}</span>
        <h3>${esc(column.title)}</h3>
        ${list(column.items || [])}
      </article>`).join("")}
    </div>`;
    return renderShell(frame, html, "decision frame");
  }

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
      <div class="time-block"><div class="time-pill">Dinner</div><div class="plain-card"><h3>Food</h3><div class="mini-grid">${(config.content.recipes || []).map(recipeCard).join("")}</div></div></div>
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
    if (type === "countdown") frame.targetDate = config.meta.countdownTarget;
    if (type === "customHtml") frame.html = ui.editor?.customFramePlaceholder || "<p>A custom frame. Edit this in the exported config.</p>";
    layout.push(frame);
    saveLayout();
    renderDashboard();
  }

  function updateCountdowns() {
    document.querySelectorAll("[data-countdown-days]").forEach(daysEl => {
      const targetDateText = daysEl.dataset.targetDate || config.meta.countdownTarget;
      const textEl = daysEl.parentElement.querySelector("[data-countdown-text]");
      const tagEl = daysEl.parentElement.querySelector("[data-countdown-tag]");
      const target = parseLocalDate(targetDateText);
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const targetDay = new Date(target.getFullYear(), target.getMonth(), target.getDate());
      const msPerDay = 24 * 60 * 60 * 1000;
      const dayDiff = Math.ceil((targetDay - today) / msPerDay);
      const label = target.toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" });
      if (dayDiff > 1) {
        daysEl.textContent = dayDiff;
        textEl.innerHTML = `${esc(ui.countdown?.manyDaysText || "days until we see each other again.")}<span class="countdown-date">${esc(ui.countdown?.targetPrefix || "Target:")} ${esc(label)}</span>`;
        tagEl.textContent = ui.countdown?.daysLeftTag || "Days left";
      } else if (dayDiff === 1) {
        daysEl.textContent = "1";
        textEl.innerHTML = `${esc(ui.countdown?.oneDayText || "day until we see each other again.")}<span class="countdown-date">${esc(ui.countdown?.tomorrowText || "Tomorrow ❤️")}</span>`;
        tagEl.textContent = ui.countdown?.almostShortTag || "Almost";
      } else if (dayDiff === 0) {
        daysEl.textContent = "0";
        textEl.innerHTML = esc(ui.countdown?.todayText || "days left. Today is the day we see each other again ❤️");
        tagEl.textContent = ui.countdown?.todayTag || "Today";
      } else {
        daysEl.textContent = "0";
        textEl.innerHTML = esc(ui.countdown?.completeText || "The countdown is complete. We saw each other again ❤️");
        tagEl.textContent = ui.countdown?.completeTag || "Complete";
      }
    });
  }

  function parseLocalDate(value) {
    const [year, month, day] = String(value).split("-").map(Number);
    return new Date(year, month - 1, day, 0, 0, 0);
  }

  function restoreChecks() {
    document.querySelectorAll('input[type="checkbox"][data-check]').forEach(input => {
      const key = `ons-paradijsje-${input.dataset.check}`;
      input.checked = localStorage.getItem(key) === "1";
      input.addEventListener("change", () => localStorage.setItem(key, input.checked ? "1" : "0"));
    });
  }

  function buildConfigFile() {
    const exported = structuredClone(config);
    exported.layout = layout;
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
      layout = structuredClone(config.layout);
      renderDashboard();
    });

    document.getElementById("downloadConfig").addEventListener("click", () => download("config.js", buildConfigFile()));

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
