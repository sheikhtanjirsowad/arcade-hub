/* ============================================================
   ARCADEHUB — all the motion
   Reads content from config.js and injects it into the page.
   ============================================================ */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- theme tokens ---------- */
  const t = CONFIG.theme;
  const root = document.documentElement.style;
  root.setProperty("--accent1", t.accent1);
  root.setProperty("--accent2", t.accent2);
  root.setProperty("--accent3", t.accent3);
  root.setProperty("--bg", t.background);
  if (!t.glow) document.body.classList.add("glow-off");

  /* ---------- brand ---------- */
  $("#logoText").innerHTML = `${CONFIG.brand}<b>${CONFIG.brandAccent}</b>`;
  $("#footerBrand").textContent = CONFIG.brand + CONFIG.brandAccent;
  $("#year").textContent = new Date().getFullYear();
  $("#footerNote").textContent = CONFIG.footerNote;

  /* ---------- hero ---------- */
  $("#heroKicker").textContent = CONFIG.hero.kicker;
  $("#heroSub").textContent = CONFIG.hero.subtitle;
  $("#heroBtn1").querySelector("span").textContent = CONFIG.hero.primaryBtn.text;
  $("#heroBtn1").href = CONFIG.hero.primaryBtn.href;
  $("#heroBtn2").querySelector("span").textContent = CONFIG.hero.secondaryBtn.text;
  $("#heroBtn2").href = CONFIG.hero.secondaryBtn.href;
  $$(".hero-title .line").forEach((line, i) => {
    const txt = CONFIG.hero.titleLines[i] || line.dataset.text;
    line.dataset.text = txt;
    line.querySelector("i").textContent = txt;
  });

  /* ---------- about ---------- */
  $("#aboutHeading").innerHTML = CONFIG.about.heading;
  $("#aboutParagraphs").innerHTML = CONFIG.about.paragraphs.map(p => `<p>${p}</p>`).join("");
  $("#aboutStats").innerHTML = CONFIG.about.stats.map(s => `
    <div class="stat reveal">
      <b>${s.value}</b>
      <span>${s.label}</span>
    </div>`).join("");

  /* ---------- contact ---------- */
  $("#contactHeading").textContent = CONFIG.contact.heading;
  $("#contactText").textContent = CONFIG.contact.text;
  const mail = $("#mailBtn");
  mail.href = "mailto:" + CONFIG.contact.email;
  mail.querySelector("span").textContent = "✉ " + CONFIG.contact.email;
  $("#socials").innerHTML = CONFIG.socials.map(s =>
    `<a href="${s.href}" aria-label="${s.label}" target="_blank" rel="noopener">${s.icon}</a>`).join("");

  /* ---------- games panel (click to reveal the list) ---------- */
  const gp = CONFIG.gamesPanel;
  $("#gamesDesc").textContent = gp.desc;
  $("#gtIcon").textContent = gp.icon;
  $("#gtTitle").textContent = gp.title;
  $("#gtSub").textContent = gp.subtitle;
  $("#gtCount").textContent = CONFIG.games.length;

  const gameList = $("#gameList");
  gameList.innerHTML = CONFIG.games.map((g, i) => `
    <a class="gl-item" href="${g.link}" target="_blank" rel="noopener"
       style="--glow:${g.color}; --i:${i}">
      <span class="gl-icon">${g.icon}</span>
      <span class="gl-body">
        <span class="gl-title">${g.title}</span>
        <span class="gl-desc">${g.desc}</span>
      </span>
      ${g.tag ? `<span class="tag">${g.tag}</span>` : ""}
      <span class="gl-arrow">↗</span>
    </a>`).join("");

  const gameToggle = $("#gameToggle");
  gameToggle.addEventListener("click", () => {
    const open = gameList.classList.toggle("open");
    gameToggle.classList.toggle("open", open);
    gameToggle.setAttribute("aria-expanded", open);
  });

  const linksGrid = $("#linksGrid");
  linksGrid.innerHTML = CONFIG.links.map(l => `
    <a class="card link-card" href="${l.href}" target="_blank" rel="noopener" style="--glow:${l.color || "#00d4ff"}">
      <span class="card-icon">${l.icon}</span>
      <div class="card-inner">
        <h3>${l.title}</h3>
        <p>${l.desc}</p>
      </div>
      <span class="card-arrow">↗</span>
    </a>`).join("");

  /* ---------- cursor glow ---------- */
  const glowEl = $(".cursor-glow");
  let mx = innerWidth / 2, my = innerHeight / 2;
  let gx = mx, gy = my;
  addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; });
  (function glowLoop() {
    gx += (mx - gx) * 0.14;
    gy += (my - gy) * 0.14;
    glowEl.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
    requestAnimationFrame(glowLoop);
  })();

  /* ---------- nav scrolled ---------- */
  const nav = $("#nav");
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 20);
    const h = document.documentElement.scrollHeight - innerHeight;
    $("#scrollBar").style.width = (scrollY / (h || 1)) * 100 + "%";
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  const burger = $("#burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    $(".nav-links").classList.toggle("open");
  });
  $$(".nav-links a").forEach(a => a.addEventListener("click", () => {
    burger.classList.remove("open");
    $(".nav-links").classList.remove("open");
  }));

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach((en, i) => {
      if (en.isIntersecting) {
        en.target.style.transitionDelay = (i * 60) + "ms";
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.15 });
  $$(".reveal, .card").forEach(el => io.observe(el));

  /* ---------- 3D tilt + card spot ---------- */
  $$(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty("--mx", px * 100 + "%");
      card.style.setProperty("--my", py * 100 + "%");
      const rx = (0.5 - py) * 12;
      const ry = (px - 0.5) * 14;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px) scale(1.02)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  /* ---------- parallax orbs on move ---------- */
  const orbs = $$(".bg-orb");
  addEventListener("mousemove", e => {
    const nx = (e.clientX / innerWidth - 0.5);
    const ny = (e.clientY / innerHeight - 0.5);
    orbs.forEach((o, i) => {
      const depth = (i + 1) * 14;
      o.style.marginLeft = nx * depth + "px";
      o.style.marginTop = ny * depth + "px";
    });
  });

  /* ---------- particles ---------- */
  const cv = $("#particles");
  const ctx = cv.getContext("2d");
  let W, H, dots = [];
  const COLORS = [t.accent1, t.accent2, t.accent3];
  function resize() {
    W = cv.width = innerWidth * devicePixelRatio;
    H = cv.height = innerHeight * devicePixelRatio;
    cv.style.width = innerWidth + "px";
    cv.style.height = innerHeight + "px";
    const count = Math.min(90, Math.round(innerWidth / 16));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: (Math.random() * 1.8 + 0.6) * devicePixelRatio,
      vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      c: COLORS[(Math.random() * COLORS.length) | 0],
      a: Math.random() * 0.5 + 0.2,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    dots.forEach(d => {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0) d.x = W; if (d.x > W) d.x = 0;
      if (d.y < 0) d.y = H; if (d.y > H) d.y = 0;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = d.c;
      ctx.globalAlpha = d.a;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  if (t.particles) { resize(); draw(); addEventListener("resize", resize); }
  else cv.style.display = "none";
})();
