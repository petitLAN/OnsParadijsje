/*
  Ons Paradijsje dashboard renderer
  ------------------------------------------------------------
  This file contains the rendering logic only.
  Content lives in assets/content.js.
  There are intentionally no click handlers or interactive card actions.
*/

const content = window.DASHBOARD_CONTENT;
const root = document.getElementById("dashboard");

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const nlToBreaks = (value = "") => escapeHtml(value).replaceAll("\n", "<br>");

function pill(label, extraClass = "") {
  return `<span class="pill ${extraClass}">${escapeHtml(label)}</span>`;
}

function chip(label, tone = "neon") {
  return `<span class="mini-pill ${tone === "peach" ? "alt" : ""}">${escapeHtml(label)}</span>`;
}

function renderHero(hero) {
  return `
    <header class="hero">
      ${pill(hero.tag)}
      <h1>${hero.titleLines.map(escapeHtml).join("<br>")}</h1>
      <p class="lead">${escapeHtml(hero.subtitle)}</p>
      <p class="lead">${escapeHtml(hero.greeting)}</p>
      <div class="hero-badge"><span>${escapeHtml(hero.badge)}</span></div>
      <div class="ghost-blocks" aria-hidden="true"><span></span><span></span><span></span></div>
    </header>
  `;
}

function cardShell(card, body) {
  return `
    <article class="card ${escapeHtml(card.layout || card.type)}">
      ${pill(card.tag)}
      <h2 class="headline">${nlToBreaks(card.title)}</h2>
      ${body}
    </article>
  `;
}

function renderCountdown(card) {
  return cardShell(card, `
    <div class="count-number">${escapeHtml(card.number)}</div>
    <p>${escapeHtml(card.caption)}</p>
    <p class="target">${escapeHtml(card.target)}</p>
    <div class="mini-pills">${card.chips.map(c => chip(c.label, c.tone)).join("")}</div>
  `);
}

function renderChecklist(card) {
  return cardShell(card, `
    <ul class="todo-list">
      ${card.items.map(item => `
        <li><span class="fake-check" aria-hidden="true"></span><span>${escapeHtml(item)}</span></li>
      `).join("")}
    </ul>
  `);
}

function renderLevels(card) {
  return cardShell(card, `
    <div class="levels-list">
      ${card.levels.map(level => `
        <div class="level-row">
          <span class="level-title">${escapeHtml(level.label)}</span>
          <span class="bar" aria-hidden="true"><span class="bar-fill" style="--value:${Number(level.value)}%"></span></span>
          <span class="level-percent">${Number(level.value)}%</span>
        </div>
        <p class="level-note">${escapeHtml(level.note)}</p>
      `).join("")}
    </div>
  `);
}

function renderInstructions(card) {
  return cardShell(card, `
    <div class="instruction-list">
      ${card.items.map(item => `<div class="instruction">▸ ${escapeHtml(item)}</div>`).join("")}
    </div>
  `);
}

function renderBullets(card) {
  return cardShell(card, `<ul class="plain-list">${card.items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`);
}

function renderRecipes(card) {
  return cardShell(card, `
    <div class="recipe-grid">
      ${card.recipes.map(recipe => `
        <section class="cream-card recipe-card">
          <h3>${escapeHtml(recipe.title)}</h3>
          <span class="time-chip">${escapeHtml(recipe.time)}</span>
          <p><strong>Ingredients:</strong> ${escapeHtml(recipe.ingredients)}</p>
          <div class="steps-box" aria-hidden="true">▸ Steps</div>
        </section>
      `).join("")}
    </div>
  `);
}

function renderNotes(card) {
  return cardShell(card, `
    <div class="note-grid">
      ${card.notes.map(note => `
        <section class="note ${escapeHtml(note.tone)}">
          <h3>${escapeHtml(note.title)}</h3>
          <p>${escapeHtml(note.body)}</p>
        </section>
      `).join("")}
    </div>
  `);
}

function renderNumbered(card) {
  return cardShell(card, `
    <div class="number-list">
      ${card.items.map((item, index) => `
        <div class="number-row"><span class="number-badge">${index + 1}</span><span>${escapeHtml(item)}</span></div>
      `).join("")}
    </div>
  `);
}

function renderDecisions(card) {
  return cardShell(card, `
    <div class="decision-grid">
      ${card.groups.map(group => `
        <section class="cream-card decision-card">
          ${chip(group.chip, group.chipTone)}
          <h3>${escapeHtml(group.title)}</h3>
          <ul>${group.items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </section>
      `).join("")}
    </div>
  `);
}

const renderers = {
  countdown: renderCountdown,
  checklist: renderChecklist,
  levels: renderLevels,
  instructions: renderInstructions,
  bullets: renderBullets,
  recipes: renderRecipes,
  notes: renderNotes,
  numbered: renderNumbered,
  decisions: renderDecisions
};

function renderDashboard() {
  root.innerHTML = [
    renderHero(content.hero),
    ...content.cards.map(card => {
      const renderer = renderers[card.type];
      return renderer ? renderer(card) : "";
    }),
    `<p class="footer-note">${escapeHtml(content.footer)}</p>`
  ].join("\n");
}

renderDashboard();
