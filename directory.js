(function () {
  const FILTERS = [
    ["Children", /child|play therapy|pcit/i],
    ["Teens", /adolescent|teen|pre-teen/i],
    ["Couples", /couple|marital/i],
    ["Families", /famil/i],
    ["EMDR", /emdr/i],
    ["Trauma / PTSD", /trauma|ptsd/i],
    ["ADHD / Autism", /adhd|add\/adhd|autism|neurodiver/i],
    ["OCD", /\bocd\b|erp/i],
    ["LGBTQIA+", /lgbtq|queer|trans/i],
    ["Substance use", /addiction|substance|sobriety/i],
    ["Spanish", /spanish/i],
    ["Mandarin", /mandarin/i],
  ];
  const grid = document.getElementById("grid");
  const q = document.getElementById("q");
  const chipsEl = document.getElementById("chips");
  const countEl = document.getElementById("count");
  const active = new Set();

  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const initials = n => n.replace(/".*?"/g, "").split(/\s+/).filter(Boolean).map(w => w[0]).slice(0, 2).join("");

  FILTERS.forEach(([label]) => {
    const b = document.createElement("button");
    b.className = "chip"; b.type = "button"; b.textContent = label; b.setAttribute("aria-pressed", "false");
    b.onclick = () => {
      active.has(label) ? active.delete(label) : active.add(label);
      b.setAttribute("aria-pressed", active.has(label)); render();
    };
    chipsEl.appendChild(b);
  });

  function card([name, cred, prac, photo, spec]) {
    const tags = spec.split(/,\s*/).slice(0, 7).map(t => `<span>${esc(t)}</span>`).join("");
    const img = photo
      ? `<img loading="lazy" src="${PHOTO_BASE + photo}" alt="${esc(name)}" onerror="this.replaceWith(document.createTextNode('${initials(name)}'))">`
      : initials(name);
    return `<article class="pcard"><div class="ph">${img}</div><div class="body">
      <h3>${esc(name)}</h3><div class="cred">${esc(cred)}</div>
      ${prac ? `<div class="prac">${esc(prac)}</div>` : `<div class="prac">&nbsp;</div>`}
      <div class="tags">${tags}</div>
      <a class="btn btn-outline btn-sm" href="https://www.highersightscounseling.com/contact/">Request an appointment</a>
    </div></article>`;
  }

  function render() {
    const term = q.value.trim().toLowerCase();
    const list = PROVIDERS.filter(p => {
      const hay = p.join(" ").toLowerCase();
      if (term && !term.split(/\s+/).every(t => hay.includes(t.replace(/(ies|y)$/, "")))) return false;
      for (const [label, re] of FILTERS) if (active.has(label) && !re.test(p[4])) return false;
      return true;
    });
    grid.innerHTML = list.map(card).join("") || `<p style="grid-column:1/-1;color:var(--muted)">No providers match. Try fewer filters, or call 720-943-7080 and we'll help.</p>`;
    countEl.textContent = `Showing ${list.length} of ${PROVIDERS.length} providers`;
  }
  const pre = new URLSearchParams(location.search).get("q");
  if (pre) q.value = pre;
  q.addEventListener("input", render);
  render();
})();
