(() => {
  const config = window.DASHBOARD_CONFIG;
  const hero = document.getElementById("hero");
  const dashboard = document.getElementById("dashboard");
  const privacyNote = document.getElementById("privacyNote");

  const esc = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const slug = (value) => String(value || "card")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "card";

  function renderHero() {
    const meta = config.meta;
    hero.innerHTML = `
      <div class="hero-copy">
        <span class="tag tag-pink">${esc(meta.heroLabel)}</span>
        <h1>${esc(meta.title)}</h1>
        <p class="hero-lead">${esc(meta.subtitle)}</p>
        <p class="hero-greeting">${esc(meta.greeting)}</p>
      </div>
      <div class="hero-seal"><span>${esc(meta.seal)}</span></div>
      <div class="ghost-blocks" aria-hidden="true"><span></span><span></span><span></span></div>`;
    privacyNote.textContent = meta.footer;
  }

  function cardShell(frame, content, extraClass = "") {
    const data = config.content[frame.content] || {};
    return `
      <article id="${esc(slug(frame.id))}" class="card span-${esc(frame.span || 4)} ${esc(extraClass)}" data-card-type="${esc(frame.type)}">
        <span class="tag tag-pink">${esc(data.label || frame.type)}</span>
        <h2 class="card-title">${esc(data.title || frame.id)}</h2>
        <div class="card-body">${content}</div>
      </article>`;
  }

  function renderCountdown(frame) {
    const data = config.content[frame.content];
    const days = Number.isFinite(data.manualDays) ? data.manualDays : daysUntil(data.targetDate);
    const chips = (data.chips || []).map((chip, index) => `<span class="mini-chip ${index % 2 ? "mini-chip-peach" : ""}">${esc(chip)}</span>`).join("");
    return cardShell(frame, `
      <div class="big-number">${esc(days)}</div>
      <p class="count-text">${esc(data.text)}</p>
      <p class="count-target">${esc(data.target)}</p>
      <div class="mini-chips">${chips}</div>
    `, "countdown-card");
  }

  function daysUntil(dateText) {
    const [year, month, day] = String(dateText || "").split("-").map(Number);
    if (!year || !month || !day) return "--";
    const target = new Date(year, month - 1, day);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.max(0, Math.ceil((target - today) / 86400000));
  }

  function renderChecklist(frame) {
    const data = config.content[frame.content];
    const rows = (data.items || []).map(item => `
      <li><span class="fake-checkbox" aria-hidden="true"></span><span>${esc(item)}</span></li>`).join("");
    return cardShell(frame, `<ul class="static-checklist">${rows}</ul>`, "checklist-card");
  }

  function renderLevels(frame) {
    const data = config.content[frame.content];
    const rows = (data.items || []).map(item => {
      const score = Math.max(0, Math.min(100, Number(item.score || 0)));
      return `
        <div class="level-row">
          <div class="level-top"><strong>${esc(item.title)}</strong><span>${score}%</span></div>
          <div class="bar" aria-hidden="true"><span style="width:${score}%"></span></div>
          <p>${esc(item.detail)}</p>
        </div>`;
    }).join("");
    return cardShell(frame, `<div class="levels-list">${rows}</div>`, "levels-card");
  }

  function renderLaundry(frame) {
    const data = config.content[frame.content];
    const rows = (data.items || []).map(item => `<div class="instruction-card">▸ ${esc(item)}</div>`).join("");
    return cardShell(frame, `<div class="instruction-list">${rows}</div>`, "laundry-card");
  }

  function renderStock(frame) {
    const data = config.content[frame.content];
    const rows = (data.items || []).map(item => `<li>${esc(item)}</li>`).join("");
    return cardShell(frame, `<ul class="stock-list">${rows}</ul>`, "stock-card");
  }

  function renderRecipes(frame) {
    const data = config.content[frame.content];
    const rows = (data.items || []).map(recipe => `
      <article class="recipe-card">
        <h3>🍽️ ${esc(recipe.name)}</h3>
        <span class="mini-chip">${esc(recipe.time)}</span>
        <p><strong>Ingredients:</strong> ${esc(recipe.ingredients)}</p>
        <div class="steps-card">▸ ${esc(recipe.stepsLabel || "Steps")}</div>
      </article>`).join("");
    return cardShell(frame, `<div class="recipe-grid">${rows}</div>`, "recipes-card");
  }

  function renderNotes(frame) {
    const data = config.content[frame.content];
    const rows = (data.items || []).map(note => `
      <article class="note-card ${note.tone === "hot" ? "note-hot" : "note-calm"}">
        <h3>${esc(note.icon)} ${esc(note.title)}</h3>
        <p>${esc(note.text)}</p>
      </article>`).join("");
    return cardShell(frame, `<div class="note-grid">${rows}</div>`, "notes-card");
  }

  function renderSop(frame) {
    const data = config.content[frame.content];
    const rows = (data.items || []).map(item => `<li><span>${esc(item)}</span></li>`).join("");
    return cardShell(frame, `<ol class="procedure-list">${rows}</ol>`, "sop-card");
  }

  function renderMatrix(frame) {
    const data = config.content[frame.content];
    const columns = (data.columns || []).map(column => `
      <article class="matrix-card">
        <span class="mini-chip ${String(column.label).toLowerCase().includes("urgent") ? "mini-chip-peach" : ""}">${esc(column.label)}</span>
        <h3>${esc(column.title)}</h3>
        <ul>${(column.items || []).map(item => `<li>${esc(item)}</li>`).join("")}</ul>
      </article>`).join("");
    return cardShell(frame, `<div class="matrix-grid">${columns}</div>`, "matrix-frame");
  }

  const renderers = {
    countdown: renderCountdown,
    checklist: renderChecklist,
    levels: renderLevels,
    laundry: renderLaundry,
    stock: renderStock,
    recipes: renderRecipes,
    notes: renderNotes,
    sop: renderSop,
    matrix: renderMatrix
  };

  function renderDashboard() {
    dashboard.innerHTML = config.layout
      .filter(frame => frame.enabled !== false)
      .map(frame => (renderers[frame.type] || renderChecklist)(frame))
      .join("");
  }

  renderHero();
  renderDashboard();
})();
