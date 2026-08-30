const MONTH_LABEL = "März 2026";

const ICONS = {
  alert:
    '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path>',
  wrench:
    '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
  clipboard:
    '<rect width="8" height="4" x="8" y="2" rx="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path>',
  clock:
    '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
  check: '<path d="M20 6 9 17l-5-5"></path>',
  chev: '<path d="m9 18 6-6-6-6"></path>',
  chevLeft: '<path d="m15 18-6-6 6-6"></path>',
  plus: '<path d="M5 12h14"></path><path d="M12 5v14"></path>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>',
  people:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
  building:
    '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path>',
  msg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
  bank: '<path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>',
  card: '<rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line>',
  globe:
    '<circle cx="12" cy="12" r="10"></circle><path d="m4.9 4.9 14.2 14.2"></path><path d="M2 12h20"></path>',
  help: '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path>',
  logout:
    '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line>',
  close: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>',
  receipt:
    '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8H8"></path><path d="M16 12H8"></path><path d="M13 16H8"></path>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>',
  phone:
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"></path>',
  calendar:
    '<rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18M8 2v4M16 2v4"></path>',
  house:
    '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path>',
  trend:
    '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline>',
  checkCircle:
    '<path d="M21.8 10A10 10 0 1 1 17 3.3"></path><path d="m9 11 3 3L22 4"></path>',
  arrow: '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
  dash: '<rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect>',
  tasks:
    '<path d="m9 11 3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
};

function svg(name, size = 18, width) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${width || 2}" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
}

const CAT = {
  dringend: { strip: "#D64545", iconBg: "rgba(214,69,69,0.12)", iconColor: "#D64545" },
  ungelesen: { strip: "#D9822B", iconBg: "#FFF4E6", iconColor: "#D9822B" },
  bearbeitung: { strip: "#9AA09B", iconBg: "rgba(91,99,96,0.12)", iconColor: "#5B6360" },
};

const IMAGES = {
  ticketPhoto1: "assets/ticket1.jpg",
  ticketPhoto2: "assets/ticket2.jpg",
  prop1Img: "assets/prop1.jpg",
  prop2Img: "assets/prop2.jpg",
  prop3Img: "assets/prop3.jpg",
};

const TICKETS = [
  {
    id: "tk3",
    kind: "damage",
    title: "Schimmel im Badezimmer",
    sub: "Seestrasse 8 · Wohnung 2.1",
    property: "Seestrasse 8",
    unit: "Wohnung 2.1",
    who: "Thomas Burri",
    phone: "+41 79 412 88 21",
    email: "thomas.burri@bluewin.ch",
    cat: "dringend",
    iconKey: "alert",
    statusLabel: "In Prüfung",
    statusDot: "#4169E1",
    group: "main",
    prio: "urgent",
    created: "04.03.2026",
    desc: "Im Badezimmer hat sich an der Decke über der Dusche dunkler Schimmel gebildet. Der Mieter meldet zudem einen muffigen Geruch.",
    location: "Badezimmer, Decke über Dusche",
    photos: ["ticketPhoto1", "ticketPhoto2"],
    status: "Neu",
    timeline: [
      { label: "Schaden gemeldet vom Mieter", date: "04.03.2026", type: "info" },
      { label: "In Prüfung genommen", date: "05.03.2026", type: "info" },
    ],
  },
  {
    id: "tk15",
    kind: "task",
    title: "Nebenkostenabrechnung erstellen",
    sub: "Tribschenstrasse 22 · Alle Wohnungen",
    property: "Tribschenstrasse 22",
    unit: "Alle Wohnungen",
    who: null,
    cat: "dringend",
    iconKey: "alert",
    dueLabel: "in 6 Tagen",
    group: "main",
    prio: "urgent",
    created: "01.03.2026",
    due: "12.03.2026",
    desc: "Jährliche Nebenkostenabrechnung für alle vier Wohnungen erstellen und an die Mieter versenden.",
    timeline: [{ label: "Aufgabe erstellt", date: "01.03.2026", type: "info" }],
  },
  {
    id: "tk6",
    kind: "task",
    title: "Lüftungsfilter wechseln",
    sub: "Hirschmattstrasse 14 · Alle Wohnungen",
    property: "Hirschmattstrasse 14",
    unit: "Alle Wohnungen",
    who: null,
    cat: "ungelesen",
    iconKey: "wrench",
    dueLabel: "in 9 Tagen",
    group: "main",
    prio: "normal",
    created: "02.03.2026",
    due: "15.03.2026",
    desc: "Lüftungsfilter in allen Einheiten gemäss Wartungsplan austauschen.",
    timeline: [{ label: "Aufgabe erstellt", date: "02.03.2026", type: "info" }],
  },
  {
    id: "tk14",
    kind: "task",
    title: "Jährliche Liegenschaftsinspektion",
    sub: "Seestrasse 8 · Alle Wohnungen",
    property: "Seestrasse 8",
    unit: "Alle Wohnungen",
    who: null,
    cat: "ungelesen",
    iconKey: "clipboard",
    dueLabel: "in 35 Tagen",
    group: "main",
    prio: "normal",
    created: "28.02.2026",
    due: "10.04.2026",
    desc: "Vollständige Inspektion der Liegenschaft inkl. Dach, Fassade und Allgemeinflächen.",
    timeline: [{ label: "Aufgabe erstellt", date: "28.02.2026", type: "info" }],
  },
  {
    id: "tk16",
    kind: "damage",
    title: "Tropfender Wasserhahn Bad",
    sub: "Tribschenstrasse 22 · Wohnung 3.4",
    property: "Tribschenstrasse 22",
    unit: "Wohnung 3.4",
    who: "Franziska Huber",
    phone: "+41 78 220 14 09",
    email: "f.huber@gmx.ch",
    cat: "bearbeitung",
    iconKey: "clock",
    statusLabel: "Handwerker beauftragt",
    statusDot: "#4169E1",
    group: "processing",
    prio: "normal",
    created: "27.02.2026",
    desc: "Der Wasserhahn im Badezimmer tropft kontinuierlich. Bereits an Sanitär Müller AG übergeben.",
    location: "Badezimmer",
    contractor: "Sanitär Müller AG",
    status: "Beauftragt",
    timeline: [
      { label: "Schaden gemeldet", date: "27.02.2026", type: "info" },
      { label: "Handwerker beauftragt: Sanitär Müller AG", date: "28.02.2026", type: "success" },
    ],
  },
];

const PROPERTIES = [
  {
    id: "1",
    name: "Hirschmattstrasse 14",
    city: "6003 Luzern",
    units: 3,
    occ: 3,
    rent: 4500,
    expenses: 620,
    status: "ok",
    img: "prop1Img",
    unitList: [
      { label: "Wohnung 1.1", floor: "EG", tenant: "Familie Schmid", initials: "FS", rent: 1500, st: "occupied" },
      { label: "Wohnung 2.1", floor: "1. OG", tenant: "Laura Keller", initials: "LK", rent: 1500, st: "occupied" },
      { label: "Wohnung 3.1", floor: "2. OG", tenant: "Marco Frei", initials: "MF", rent: 1500, st: "occupied" },
    ],
    contacts: [
      { name: "Laura Keller", role: "Mieterin", initials: "LK", color: "#111418" },
      { name: "Sanitär Müller AG", role: "Handwerker", initials: "SM", color: "#4169E1" },
      { name: "Hauswartung Luzern", role: "Hauswart", initials: "HL", color: "#5A5A5A" },
    ],
  },
  {
    id: "2",
    name: "Seestrasse 8",
    city: "6048 Horw",
    units: 2,
    occ: 1,
    rent: 1400,
    expenses: 340,
    status: "attention",
    img: "prop2Img",
    unitList: [
      { label: "Wohnung 2.1", floor: "1. OG", tenant: "Thomas Burri", initials: "TB", rent: 1400, st: "occupied" },
      { label: "Wohnung 1.1", floor: "EG", tenant: null, initials: null, rent: 1350, st: "vacant" },
    ],
    contacts: [
      { name: "Thomas Burri", role: "Mieter", initials: "TB", color: "#111418" },
      { name: "Elektro Steiner", role: "Handwerker", initials: "ES", color: "#4169E1" },
    ],
  },
  {
    id: "3",
    name: "Tribschenstrasse 22",
    city: "6005 Luzern",
    units: 4,
    occ: 4,
    rent: 6200,
    expenses: 810,
    status: "ok",
    img: "prop3Img",
    unitList: [
      { label: "Wohnung 1.4", floor: "EG", tenant: "Sandra Vogt", initials: "SV", rent: 1550, st: "occupied" },
      { label: "Wohnung 2.4", floor: "1. OG", tenant: "Peter Lang", initials: "PL", rent: 1550, st: "occupied" },
      { label: "Wohnung 3.4", floor: "2. OG", tenant: "Franziska Huber", initials: "FH", rent: 1550, st: "occupied" },
      { label: "Wohnung 4.4", floor: "3. OG", tenant: "Nina Roth", initials: "NR", rent: 1550, st: "occupied" },
    ],
    contacts: [
      { name: "Franziska Huber", role: "Mieterin", initials: "FH", color: "#111418" },
      { name: "Sanitär Müller AG", role: "Handwerker", initials: "SM", color: "#4169E1" },
    ],
  },
];

const STATUS_FLOW = ["Neu", "In Prüfung", "Beauftragt", "Termin", "Repariert", "Rechnung", "Bezahlt"];

const CREATE_KINDS = {
  task: { accent: "#000000", tint: "rgba(0,0,0,0.08)", title: "Aufgabe erstellen" },
  damage: { accent: "#D64545", tint: "rgba(214,69,69,0.12)", title: "Schaden melden" },
  message: { accent: "#4169E1", tint: "rgba(65,105,225,0.12)", title: "Nachricht senden" },
  invoice: { accent: "#D9822B", tint: "rgba(217,130,43,0.12)", title: "Rechnung erfassen" },
  document: { accent: "#4169E1", tint: "rgba(65,105,225,0.12)", title: "Dokument hochladen" },
  property: { accent: "#000000", tint: "rgba(0,0,0,0.08)", title: "Liegenschaft hinzufügen" },
};

const state = {
  screen: "dashboard",
  revealT: 0,
  todoFilter: "alle",
  swipeId: null,
  swipeDx: 0,
  swiping: false,
  removing: {},
  done: {},
  createMounted: false,
  createView: "menu",
  formKind: "task",
  form: { title: "", desc: "", prop: "", prio: "normal" },
  detail: null,
  statusOverrides: {},
  toast: null,
};

let raf = null;
let drag = null;
let toastTimer = null;
let successTimer = null;

function fmtCHF(n) {
  return "CHF " + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
}

function visibleTickets() {
  return TICKETS.filter((t) => !state.done[t.id]);
}

function filteredTickets() {
  const map = { alle: null, schaeden: ["damage"], aufgaben: ["task"], nachrichten: ["message"] };
  const types = map[state.todoFilter];
  return visibleTickets().filter((t) => types === null || types.includes(t.kind));
}

function animateReveal() {
  cancelAnimationFrame(raf);
  const start = performance.now();
  const dur = 950;
  const tick = (now) => {
    const t = Math.min(1, (now - start) / dur);
    const e = 1 - Math.pow(1 - t, 3);
    state.revealT = e;
    updateRevealNumbers();
    if (t < 1) raf = requestAnimationFrame(tick);
  };
  state.revealT = 0;
  updateRevealNumbers();
  raf = requestAnimationFrame(tick);
}

function updateRevealNumbers() {
  const rT = state.revealT;
  const vis = visibleTickets();
  const $ = (id) => document.getElementById(id);
  if ($("savedHours")) $("savedHours").textContent = Math.round(9 * rT) + "h";
  if ($("saldo")) $("saldo").textContent = fmtCHF(10650 * rT);
  if ($("objekte")) $("objekte").textContent = String(Math.round(PROPERTIES.length * rT));
  if ($("einheiten")) $("einheiten").textContent = String(Math.round(9 * rT));
  if ($("aufgaben")) $("aufgaben").textContent = String(Math.round(vis.length * rT));
}

function nav(screen) {
  if (state.screen === screen && !state.detail) return;
  state.screen = screen;
  state.detail = null;
  render();
  if (screen === "dashboard") animateReveal();
}

function flashToast(msg) {
  state.toast = msg;
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("is-on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    state.toast = null;
    el.classList.remove("is-on");
  }, 2200);
}

function openCreate() {
  state.createMounted = true;
  state.createView = "menu";
  state.form = { title: "", desc: "", prop: "", prio: "normal" };
  renderSheet();
}

function closeCreate() {
  state.createMounted = false;
  state.createView = "menu";
  clearTimeout(successTimer);
  renderSheet();
}

function selectForm(kind) {
  state.formKind = kind;
  state.createView = "form";
  state.form = { title: "", desc: "", prop: "", prio: "normal" };
  renderSheet();
}

function submitForm() {
  if (!state.form.title.trim()) return;
  state.createView = "success";
  renderSheet();
  successTimer = setTimeout(closeCreate, 1700);
}

function openDetail(type, id) {
  state.detail = { type, id };
  renderDetail();
}

function closeDetail() {
  state.detail = null;
  renderDetail();
  if (state.screen === "todos") renderScreen();
}

function completeFromDetail(id) {
  state.done[id] = true;
  closeDetail();
  flashToast("Als erledigt markiert");
  renderScreen();
  renderNav();
}

function advanceStatus(id, cur) {
  const idx = STATUS_FLOW.indexOf(cur);
  const next = STATUS_FLOW[Math.min(idx + 1, STATUS_FLOW.length - 1)];
  state.statusOverrides[id] = next;
  flashToast("Status: " + next);
  renderDetail();
}

function completeTicket(id) {
  state.removing[id] = true;
  state.swipeId = null;
  state.swipeDx = 0;
  renderScreen();
  setTimeout(() => {
    delete state.removing[id];
    state.done[id] = true;
    renderScreen();
  }, 300);
}

function cardDown(e, id) {
  drag = { id, x0: e.clientX, y0: e.clientY, dir: null };
  try {
    e.currentTarget.setPointerCapture(e.pointerId);
  } catch (_) {}
  state.swipeId = id;
  state.swipeDx = 0;
  state.swiping = true;
}

function cardMove(e) {
  const d = drag;
  if (!d) return;
  const dx = e.clientX - d.x0;
  const dy = e.clientY - d.y0;
  if (!d.dir) {
    if (Math.abs(dx) > 5 && Math.abs(dx) > Math.abs(dy) * 1.2) d.dir = "h";
    else if (Math.abs(dy) > 7) {
      drag = null;
      state.swipeId = null;
      state.swipeDx = 0;
      state.swiping = false;
      return;
    } else return;
  }
  state.swipeDx = Math.max(-44, Math.min(165, dx));
  applySwipe(d.id);
}

function cardUp(e, id) {
  const d = drag;
  if (!d) return;
  drag = null;
  const dx = e.clientX - d.x0;
  const dy = e.clientY - d.y0;
  state.swiping = false;
  if (dx > 92) {
    completeTicket(id);
    return;
  }
  state.swipeId = null;
  state.swipeDx = 0;
  applySwipe(id);
  if (Math.abs(dx) < 6 && Math.abs(dy) < 6) openDetail("ticket", id);
}

function applySwipe(id) {
  const card = document.querySelector(`[data-ticket="${id}"]`);
  const reveal = document.querySelector(`[data-reveal="${id}"]`);
  if (!card) return;
  const dx = state.swipeId === id ? state.swipeDx : 0;
  card.style.transform = `translateX(${dx}px)`;
  card.style.transition = state.swiping && state.swipeId === id ? "none" : "transform .26s cubic-bezier(.25,1,.5,1)";
  if (reveal) reveal.style.opacity = String(Math.max(0, Math.min(1, dx / 92)));
}

function render() {
  renderStatus();
  renderScreen();
  renderNav();
  renderSheet();
  renderDetail();
}

function renderStatus() {
  /* Status bar is always the fake iPhone chrome above the Concrete navbar. */
}

function renderNav() {
  document.querySelectorAll("[data-nav]").forEach((btn) => {
    btn.classList.toggle("is-on", btn.dataset.nav === state.screen);
    const stroke = btn.classList.contains("is-on") ? "2.4" : "1.9";
    const svgEl = btn.querySelector("svg");
    if (svgEl) svgEl.setAttribute("stroke-width", stroke);
  });
}

function renderScreen() {
  const root = document.getElementById("screen");
  if (state.screen === "dashboard") root.innerHTML = dashboardHTML();
  else if (state.screen === "todos") root.innerHTML = todosHTML();
  else if (state.screen === "portfolio") root.innerHTML = portfolioHTML();
  else root.innerHTML = profileHTML();
  renderStatus();
}

function dashboardHTML() {
  const rT = state.revealT;
  const vis = visibleTickets();
  const riskD = vis.filter((t) => t.cat === "dringend").length;
  const riskU = vis.filter((t) => t.cat === "ungelesen").length;
  const riskB = vis.filter((t) => t.cat === "bearbeitung").length;
  return `
    <div class="scroll hs" style="padding-bottom:20px">
      <div class="page-head">
        <div>
          <h1 class="page-title">Guten Tag, Jan Meier</h1>
          <p class="page-sub">Diesen Monat hast du mit Stube</p>
        </div>
        <span class="chip">${MONTH_LABEL}</span>
      </div>
      <div class="dash-metrics">
        <div>
          <p class="stat-value" id="savedHours">${Math.round(9 * rT)}h</p>
          <p class="stat-label">Zeit gespart</p>
        </div>
        <div>
          <div class="bars">
            <div class="bar bar--you"></div>
            <div class="bar bar--market"></div>
          </div>
          <div class="bar-labels">
            <div><strong>3h</strong><span>Du</span></div>
            <div class="is-muted"><strong>12h</strong><span>Ø Markt</span></div>
          </div>
        </div>
      </div>

      <div class="section">
        <p class="kicker">Finanzen · ${MONTH_LABEL}</p>
        <div class="panel" style="padding:16px">
          <div class="saldo-row">
            <div>
              <p class="micro">Saldo</p>
              <p class="saldo" id="saldo">${fmtCHF(10650 * rT)}</p>
            </div>
            <span class="delta">${svg("trend", 14, 2.4)} +8%</span>
          </div>
          <svg class="spark" width="100%" height="56" viewBox="0 0 280 56" preserveAspectRatio="none">
            <defs>
              <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#4169E1" stop-opacity=".22"></stop>
                <stop offset="1" stop-color="#4169E1" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
            <path d="M0,9 L56,9 L112,32 L168,9 L224,9 L280,48 L280,56 L0,56 Z" fill="url(#sg)" style="animation:fadeIn .6s .5s both"></path>
            <path d="M0,9 L56,9 L112,32 L168,9 L224,9 L280,48" fill="none" stroke="#4169E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="640" stroke-dashoffset="640" style="animation:draw 1.1s .25s ease forwards"></path>
            <circle cx="280" cy="48" r="3" fill="#4169E1" style="animation:popIn .4s 1.15s both"></circle>
          </svg>
          <div class="spark-labels"><span>Okt</span><span>Nov</span><span>Dez</span><span>Jan</span><span>Feb</span><span>Mrz</span></div>
          <div class="split">
            <div class="split__col"><p>Einnahmen</p><p>CHF 12'100</p></div>
            <div class="split__rule"></div>
            <div class="split__col"><p>Ausgaben</p><p>CHF 1'450</p></div>
          </div>
        </div>
        <div class="panel" style="padding:16px;margin-top:12px">
          <div class="rent-head"><p>Miete eingegangen</p><span>88%</span></div>
          <div class="track"><div class="track__fill" style="width:88%"></div></div>
          <div class="rent-foot"><span>CHF 10'700 von 12'100</span><span class="is-open">CHF 1'400 offen</span></div>
        </div>
      </div>

      <div class="section--tight">
        <p class="kicker">Portfolio</p>
        <div class="kpi-row">
          <div class="kpi"><strong id="objekte">${Math.round(PROPERTIES.length * rT)}</strong><span>Objekte</span></div>
          <div class="kpi"><strong id="einheiten">${Math.round(9 * rT)}</strong><span>Einheiten</span></div>
          <button class="kpi" data-action="nav-todos"><strong id="aufgaben">${Math.round(vis.length * rT)}</strong><span>Aufgaben</span></button>
        </div>
      </div>

      <div class="section--tight">
        <p class="kicker">Risiko &amp; Offenes</p>
        <div class="data-table">
          <button class="data-row" data-action="nav-todos">
            <div class="data-row__strip" style="background:#D64545"></div>
            <div class="data-row__icon" style="background:rgba(214,69,69,0.12);color:#D64545">${svg("alert", 16)}</div>
            <div class="data-row__copy"><p>Dringend</p><span>Sofort handeln</span></div>
            <span class="data-row__count" id="riskD">${riskD}</span>
            ${svg("chev", 16, 2).replace("<svg", '<svg class="chev"')}
          </button>
          <button class="data-row" data-action="nav-todos">
            <div class="data-row__strip" style="background:#D9822B"></div>
            <div class="data-row__icon" style="background:#FFF4E6;color:#D9822B">${svg("msg", 16)}</div>
            <div class="data-row__copy"><p>Ungelesen</p><span>Noch nicht bearbeitet</span></div>
            <span class="data-row__count" id="riskU">${riskU}</span>
            ${svg("chev", 16, 2).replace("<svg", '<svg class="chev"')}
          </button>
          <button class="data-row" data-action="nav-todos">
            <div class="data-row__strip" style="background:#666666"></div>
            <div class="data-row__icon" style="background:#f0f0f0;color:#666666">${svg("clock", 16)}</div>
            <div class="data-row__copy"><p>In Bearbeitung</p><span>Warten auf Handwerker</span></div>
            <span class="data-row__count" id="riskB">${riskB}</span>
            ${svg("chev", 16, 2).replace("<svg", '<svg class="chev"')}
          </button>
        </div>
      </div>
    </div>`;
}

function todoCardHTML(t) {
  const c = CAT[t.cat];
  const removing = !!state.removing[t.id];
  const dx = state.swipeId === t.id ? state.swipeDx : 0;
  const iconName = t.iconKey === "alert" ? "alert" : t.iconKey === "wrench" ? "wrench" : t.iconKey === "clipboard" ? "clipboard" : "clock";
  return `
    <div class="todo-wrap${removing ? " is-removing" : ""}">
      <div class="todo-slide">
        <div class="todo-reveal" data-reveal="${t.id}" style="opacity:${Math.max(0, Math.min(1, dx / 92))}">
          <span>${svg("check", 18, 2.4)} Erledigt</span>
        </div>
        <div class="todo-card" data-ticket="${t.id}" style="transform:translateX(${dx}px)">
          <div class="todo-card__strip" style="background:${c.strip}"></div>
          <div class="todo-card__body">
            <div class="todo-card__icon" style="background:${c.iconBg};color:${c.iconColor}">${svg(iconName)}</div>
            <div class="todo-card__copy">
              <h3>${t.title}</h3>
              <p>${t.sub}</p>
              ${t.who ? `<p>${t.who}</p>` : ""}
              ${t.kind === "damage" ? `<div class="todo-meta"><span class="dot" style="background:${t.statusDot || "#9AA09B"}"></span>${t.statusLabel}</div>` : ""}
              ${t.dueLabel ? `<div class="todo-due" style="color:${c.iconColor}">${svg("clock", 13, 2.2)}<span>${t.dueLabel}</span></div>` : ""}
            </div>
            ${svg("chev", 16, 2).replace("<svg", '<svg style="flex-shrink:0;margin-top:2px;color:#999999"')}
          </div>
        </div>
      </div>
    </div>`;
}

function todosHTML() {
  const vis = visibleTickets();
  const fl = filteredTickets();
  const mainList = fl.filter((t) => t.group === "main");
  const procList = fl.filter((t) => t.group === "processing");
  const cnt = {
    alle: vis.length,
    schaeden: vis.filter((t) => t.kind === "damage").length,
    aufgaben: vis.filter((t) => t.kind === "task").length,
    nachrichten: vis.filter((t) => t.kind === "message").length,
  };
  const tabs = [
    ["alle", "Alle", cnt.alle],
    ["schaeden", "Schäden", cnt.schaeden],
    ["aufgaben", "Aufgaben", cnt.aufgaben],
    ["nachrichten", "Nachrichten", cnt.nachrichten],
  ];
  return `
    <div class="scroll hs">
      <div class="page-head">
        <div>
          <h1 class="page-title">Aufgaben</h1>
          <p class="page-sub">${vis.length} offen</p>
        </div>
      </div>
      <div class="tabs">
        ${tabs
          .map(
            ([k, label, n]) =>
              `<button class="tab${state.todoFilter === k ? " is-on" : ""}" data-filter="${k}">${label} <em>${n}</em></button>`
          )
          .join("")}
      </div>
      <div class="todo-list">
        ${
          fl.length === 0
            ? `<div class="empty"><div class="empty__icon">${svg("check", 22, 2.2)}</div><p>Alles erledigt</p><span>Keine offenen Einträge</span></div>`
            : mainList.map(todoCardHTML).join("")
        }
        ${
          procList.length
            ? `<div class="proc-label">${svg("clock", 14, 2.2)}<p>In Bearbeitung</p></div>${procList.map(todoCardHTML).join("")}`
            : ""
        }
        <p class="hint">Nach rechts wischen zum erledigen</p>
      </div>
    </div>`;
}

function portfolioHTML() {
  const totalUnits = PROPERTIES.reduce((a, p) => a + p.units, 0);
  const cards = PROPERTIES.map((p, i) => {
    const ok = p.status === "ok";
    return `
      <div class="prop-card" data-prop="${p.id}" style="animation:riseIn .5s ${(0.06 * i).toFixed(2)}s cubic-bezier(.16,1,.3,1) both">
        <div class="prop-card__img" style="background-image:url('${IMAGES[p.img]}')">
          <div class="prop-card__shade"></div>
          <div class="prop-card__status ${ok ? "is-ok" : "is-attention"}">${ok ? "Voll vermietet" : "1 Einheit frei"}</div>
        </div>
        <div class="prop-card__body">
          <h3>${p.name}</h3>
          <div class="prop-card__city">${svg("pin", 13)} ${p.city}</div>
          <div class="prop-card__foot">
            ${svg("people", 16)}
            <span>${p.occ}/${p.units} vermietet</span>
            <span class="prop-card__rent">${fmtCHF(p.rent)}</span>
            <span class="prop-card__per">/Mt.</span>
          </div>
        </div>
      </div>`;
  }).join("");
  return `
    <div class="scroll hs">
      <div class="port-head">
        <div>
          <h1 class="page-title">Portfolio</h1>
          <p class="page-sub">${PROPERTIES.length} Objekte · ${totalUnits} Einheiten</p>
        </div>
        <button class="btn-neu" data-action="open-create">${svg("plus", 16, 2.4)} Neu</button>
      </div>
      <div class="prop-list">${cards}</div>
    </div>`;
}

function profileHTML() {
  return `
    <div class="scroll hs">
      <div class="page-head">
        <h1 class="page-title">Profil</h1>
      </div>
      <div class="profile-card">
        <div class="profile-card__row">
          <div class="avatar">JM</div>
          <div style="flex:1;min-width:0">
            <h2>Jan Meier</h2>
            <p class="email">jan.meier@stube.ch</p>
          </div>
          <span class="pro-badge">PRO</span>
        </div>
        <div class="profile-stats">
          <div><strong>9h</strong><span>gespart</span></div>
          <div><strong>3</strong><span>Objekte</span></div>
          <div><strong>9</strong><span>Einheiten</span></div>
        </div>
      </div>
      <div class="menu-wrap">
        <p class="kicker">Konto</p>
        <div class="menu">
          <button type="button"><div class="menu__ico menu__ico--ink">${svg("user", 17)}</div><span>Konto &amp; Profil</span>${svg("chev", 16, 2)}</button>
          <button type="button"><div class="menu__ico menu__ico--blue">${svg("bank", 17)}</div><span>Bankverbindungen</span><aside>2 aktiv</aside>${svg("chev", 16, 2)}</button>
          <button type="button"><div class="menu__ico menu__ico--warn">${svg("bell", 17)}</div><span>Benachrichtigungen</span>${svg("chev", 16, 2)}</button>
        </div>
        <p class="kicker" style="margin-top:20px">Abonnement</p>
        <div class="menu">
          <button type="button"><div class="menu__ico menu__ico--blue">${svg("card", 17)}</div><span>Stube&nbsp;Pro</span><em class="aktiv">Aktiv</em>${svg("chev", 16, 2)}</button>
        </div>
        <p class="kicker" style="margin-top:20px">Mehr</p>
        <div class="menu">
          <button type="button"><div class="menu__ico menu__ico--mute">${svg("globe", 17)}</div><span>Sprache</span><aside>Deutsch</aside>${svg("chev", 16, 2)}</button>
          <button type="button"><div class="menu__ico menu__ico--mute">${svg("help", 17)}</div><span>Hilfe &amp; Support</span>${svg("chev", 16, 2)}</button>
        </div>
        <button class="logout" type="button">${svg("logout", 17)} Abmelden</button>
      </div>
    </div>`;
}

function renderSheet() {
  const host = document.getElementById("sheetHost");
  if (!state.createMounted) {
    host.innerHTML = "";
    renderStatus();
    return;
  }
  const kind = CREATE_KINDS[state.formKind];
  const disabled = !state.form.title.trim();
  host.innerHTML = `
    <div class="overlay">
      <div class="backdrop" data-action="close-create"></div>
      <div class="sheet">
        <div class="sheet__handle"><i></i></div>
        <div class="sheet__head">
          ${state.createView === "form" ? `<button class="ico-btn" data-action="back-menu">${svg("chevLeft", 18, 2.2)}</button>` : ""}
          <div style="flex:1;min-width:0">
            ${
              state.createView === "menu"
                ? `<h2>Neu erstellen</h2><p>Was möchtest du hinzufügen?</p>`
                : state.createView === "form"
                  ? `<h2>${kind.title}</h2>`
                  : `<h2>Fertig</h2>`
            }
          </div>
          <button class="ico-btn" data-action="close-create">${svg("close", 17, 2.2)}</button>
        </div>
        <div class="sheet__body hs">
          ${
            state.createView === "menu"
              ? `
            <div class="create-menu">
              <p class="create-kicker">Primäre Aktionen</p>
              <button class="create-item" data-create="task"><div class="create-item__ico create-item__ico--ink">${svg("wrench", 20)}</div><div style="flex:1"><h3>Aufgabe</h3><p>Aufgabe oder To-do anlegen</p></div>${svg("chev", 16, 2.2)}</button>
              <button class="create-item" data-create="damage"><div class="create-item__ico create-item__ico--danger">${svg("alert", 20)}</div><div style="flex:1"><h3>Schaden melden</h3><p>Defekt oder Schaden erfassen</p></div>${svg("chev", 16, 2.2)}</button>
              <button class="create-item" data-create="message"><div class="create-item__ico create-item__ico--blue">${svg("msg", 20)}</div><div style="flex:1"><h3>Nachricht</h3><p>Mieter kontaktieren</p></div>${svg("chev", 16, 2.2)}</button>
              <p class="create-kicker" style="margin-top:16px">Verwaltung</p>
              <button class="create-item" data-create="invoice"><div class="create-item__ico create-item__ico--warn">${svg("receipt", 20)}</div><div style="flex:1"><h3>Rechnung</h3><p>Kosten oder Zahlung erfassen</p></div>${svg("chev", 16, 2.2)}</button>
              <button class="create-item" data-create="document"><div class="create-item__ico create-item__ico--blue">${svg("file", 20)}</div><div style="flex:1"><h3>Dokument</h3><p>Datei oder Vertrag hochladen</p></div>${svg("chev", 16, 2.2)}</button>
              <p class="create-kicker" style="margin-top:16px">Liegenschaft</p>
              <button class="create-item" data-create="property"><div class="create-item__ico create-item__ico--ink">${svg("building", 20)}</div><div style="flex:1"><h3>Liegenschaft hinzufügen</h3><p>Neue Liegenschaft anlegen</p></div>${svg("chev", 16, 2.2)}</button>
            </div>`
              : state.createView === "form"
                ? `
            <div class="create-form" id="createForm">
              <div class="accent-line" style="background:${kind.accent}"></div>
              <div class="field">
                <p>Titel</p>
                <input name="title" value="${escapeAttr(state.form.title)}" placeholder="z. B. Lüftungsfilter wechseln">
              </div>
              <div class="field">
                <p>Beschreibung</p>
                <textarea name="desc" rows="3" placeholder="Details…">${escapeHtml(state.form.desc)}</textarea>
              </div>
              <div class="field">
                <p>Liegenschaft</p>
                <select name="prop">
                  <option value="">Auswählen…</option>
                  <option value="1"${state.form.prop === "1" ? " selected" : ""}>Hirschmattstrasse 14</option>
                  <option value="2"${state.form.prop === "2" ? " selected" : ""}>Seestrasse 8</option>
                  <option value="3"${state.form.prop === "3" ? " selected" : ""}>Tribschenstrasse 22</option>
                </select>
              </div>
              <div class="field">
                <p>Priorität</p>
                <div class="prio-row">
                  <button type="button" class="prio${state.form.prio === "normal" ? " is-on" : ""}" data-prio="normal">Normal</button>
                  <button type="button" class="prio prio--urgent${state.form.prio === "urgent" ? " is-on" : ""}" data-prio="urgent">Dringend</button>
                </div>
              </div>
              <button type="button" class="submit" data-action="submit-form" ${disabled ? "disabled" : ""} style="background:${disabled ? "#e0e0e0" : kind.accent}">Erstellen</button>
            </div>`
                : `
            <div class="success">
              <div class="success__circle" style="background:${kind.tint};color:${kind.accent}">${svg("checkCircle", 42, 2.4)}</div>
              <div>
                <h3>Erfolgreich erstellt</h3>
                <p>Der Eintrag wurde gespeichert.</p>
              </div>
            </div>`
          }
        </div>
      </div>
    </div>`;
  if (state.createView === "form") {
    const form = document.getElementById("createForm");
    const title = form.querySelector('[name="title"]');
    title.focus();
    title.setSelectionRange(title.value.length, title.value.length);
  }
  renderStatus();
}

function renderDetail() {
  const host = document.getElementById("detailHost");
  if (!state.detail) {
    host.innerHTML = "";
    renderStatus();
    return;
  }
  if (state.detail.type === "ticket") host.innerHTML = ticketDetailHTML(state.detail.id);
  else host.innerHTML = propertyDetailHTML(state.detail.id);
  renderStatus();
}

function ticketDetailHTML(id) {
  const t = TICKETS.find((x) => x.id === id);
  if (!t) return "";
  const isDamage = t.kind === "damage";
  const curStatus = state.statusOverrides[t.id] || t.status;
  const flowIdx = STATUS_FLOW.indexOf(curStatus);
  const canAdvance = isDamage && flowIdx < STATUS_FLOW.length - 1;
  const photos = (t.photos || [])
    .map((url) => `<div class="photo" style="background-image:url('${IMAGES[url]}')"></div>`)
    .join("");
  const timeline = (t.timeline || [])
    .map(
      (e, i, arr) => `
      <div class="tl-item">
        <div class="tl-rail"><b style="background:#4169E1"></b>${i < arr.length - 1 ? "<i></i>" : "<i></i>"}</div>
        <div><p>${e.label}</p><span>${e.date}</span></div>
      </div>`
    )
    .join("");
  return `
    <div class="detail">
      <div class="detail__hero">
        <button class="back-light" data-action="close-detail">${svg("chevLeft", 20, 2.2)}</button>
        <div class="detail__type">
          <span>${isDamage ? "Schadensmeldung" : "Aufgabe"}</span>
          ${t.prio === "urgent" ? `<span class="urgent-tag">DRINGEND</span>` : ""}
        </div>
        <h2>${t.title}</h2>
        <div class="detail__where">${svg("building", 14)} <span>${t.property} · ${t.unit}</span></div>
      </div>
      <div class="detail__body hs">
        <div class="info-card">
          ${
            isDamage
              ? `<div class="status-row"><span>Status</span>
              <button class="status-pill" data-action="advance-status" data-id="${t.id}" data-status="${curStatus}">
                <i></i>${curStatus}${canAdvance ? svg("arrow", 13, 2.4) : ""}
              </button></div>`
              : ""
          }
          <div class="info-rows">
            <div class="info-row">${svg("house", 17)}<div><p>Objekt</p><strong>${t.property} – ${t.unit}</strong></div></div>
            ${t.who ? `<div class="info-row">${svg("user", 17)}<div><p>Mieter</p><strong>${t.who}</strong></div></div>` : ""}
            ${t.due ? `<div class="info-row">${svg("clock", 17)}<div><p>Fällig</p><strong>${t.due}</strong></div></div>` : ""}
            <div class="info-row">${svg("calendar", 17)}<div><p>Erstellt</p><strong>${t.created}</strong></div></div>
          </div>
        </div>
        ${
          photos
            ? `<div class="info-card"><p class="kicker" style="margin-bottom:12px">Fotos</p><div class="photos hs">${photos}</div></div>`
            : ""
        }
        <div class="info-card">
          <p class="kicker" style="margin-bottom:9px">Beschreibung</p>
          <p class="desc">${t.desc}</p>
          ${t.location ? `<div class="loc">${svg("pin", 15)}<span>${t.location}</span></div>` : ""}
        </div>
        ${
          t.who
            ? `<div class="info-card">
              <p class="kicker" style="margin-bottom:12px">Mieter kontaktieren</p>
              <div class="contact-actions">
                <button class="btn-call" data-action="toast" data-msg="Anruf wird gestartet…">${svg("phone", 16)} Anrufen</button>
                <button class="btn-msg" data-action="toast" data-msg="Nachricht öffnen…">${svg("msg", 16)} Nachricht</button>
              </div>
            </div>`
            : ""
        }
        ${
          t.contractor
            ? `<div class="info-card contractor">
              <div class="contractor__ico">${svg("wrench", 19)}</div>
              <div style="flex:1"><p>Handwerker</p><strong>${t.contractor}</strong></div>
              <span class="ok">${svg("checkCircle", 20, 2.2)}</span>
            </div>`
            : ""
        }
        <div class="info-card">
          <p class="kicker" style="margin-bottom:12px">Verlauf</p>
          ${timeline}
        </div>
        <button class="btn-done" data-action="complete-detail" data-id="${t.id}">${svg("check", 18, 2.4)} Als erledigt markieren</button>
      </div>
    </div>`;
}

function propertyDetailHTML(id) {
  const p = PROPERTIES.find((x) => x.id === id);
  if (!p) return "";
  const bal = p.rent - p.expenses;
  const occPct = Math.round((p.occ / p.units) * 100);
  const propTickets = visibleTickets().filter((x) => x.property === p.name);
  const ticketRows = propTickets
    .map((x) => {
      const c = CAT[x.cat];
      const iconName = x.iconKey === "alert" ? "alert" : x.iconKey === "wrench" ? "wrench" : x.iconKey === "clipboard" ? "clipboard" : "clock";
      return `
        <button class="row-btn" data-ticket-open="${x.id}">
          <div class="row-btn__ico" style="background:${c.iconBg};color:${c.iconColor}">${svg(iconName, 17)}</div>
          <div style="flex:1;min-width:0"><h3>${x.title}</h3><p>${x.unit}</p></div>
          <span class="dot" style="background:${c.strip}"></span>
          ${svg("chev", 15, 2.2)}
        </button>`;
    })
    .join("");
  const units = p.unitList
    .map(
      (u) => `
      <div class="unit">
        <div class="unit__av ${u.initials ? "is-on" : "is-off"}">${u.initials || "·"}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center"><h3>${u.label}</h3><span class="floor">${u.floor}</span></div>
          <p>${u.tenant || "Leerstehend"}</p>
        </div>
        <div class="unit__right">
          <strong>${fmtCHF(u.rent)}</strong>
          <div class="unit__st"><i style="background:${u.st === "occupied" ? "#4169E1" : "#e0e0e0"}"></i>${u.st === "occupied" ? "Belegt" : "Leer"}</div>
        </div>
      </div>`
    )
    .join("");
  const contacts = p.contacts
    .map(
      (c) => `
      <button class="row-btn" data-action="toast" data-msg="Kontakt: ${escapeAttr(c.name)}">
        <div class="contact-av" style="background:${c.color}">${c.initials}</div>
        <div style="flex:1;min-width:0"><h3>${c.name}</h3><p>${c.role}</p></div>
        ${svg("msg", 16)}
      </button>`
    )
    .join("");
  return `
    <div class="detail">
      <div class="scroll hs" style="flex:1;min-height:0">
        <div class="pd-hero" style="background-image:url('${IMAGES[p.img]}')">
          <div class="pd-hero__shade"></div>
          <button class="pd-back" data-action="close-detail">${svg("chevLeft", 20, 2.2)}</button>
          <div class="pd-hero__copy">
            <h2>${p.name}</h2>
            <p>${p.city}</p>
          </div>
        </div>
        <div class="pd-body">
          <div class="pd-stats">
            <div class="pd-stat"><strong>${p.units}</strong><span>Einheiten</span></div>
            <div class="pd-stat"><strong class="is-warn">${propTickets.length}</strong><span>Aufgaben</span></div>
            <div class="pd-stat"><strong class="is-bal">${fmtCHF(bal)}</strong><span>Saldo/Mt.</span></div>
          </div>
          ${
            propTickets.length
              ? `<div><p class="kicker">Aktuelle Aufgaben</p><div class="menu">${ticketRows}</div></div>`
              : ""
          }
          <div>
            <p class="kicker">Finanzen · ${MONTH_LABEL}</p>
            <div class="info-card">
              <div class="split" style="border:none;padding:0 0 14px">
                <div class="split__col"><p>Einnahmen</p><p>${fmtCHF(p.rent)}</p></div>
                <div class="split__rule"></div>
                <div class="split__col"><p>Kosten</p><p>${fmtCHF(p.expenses)}</p></div>
              </div>
              <div class="rent-head" style="margin-bottom:7px"><p style="font-size:12px;font-weight:400;color:var(--muted-2)">Belegung</p><span>${occPct}%</span></div>
              <div class="track"><div class="track__fill" style="width:${occPct}%;animation:none"></div></div>
            </div>
          </div>
          <div>
            <p class="kicker">Einheiten &amp; Mieter</p>
            <div class="menu">${units}</div>
          </div>
          <div>
            <p class="kicker">Kontakte</p>
            <div class="menu">${contacts}</div>
          </div>
        </div>
      </div>
    </div>`;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(s) {
  return escapeHtml(s).replace(/"/g, "&quot;");
}

function bind() {
  const phone = document.getElementById("phone");

  phone.addEventListener("click", (e) => {
    const navBtn = e.target.closest("[data-nav]");
    if (navBtn) {
      e.preventDefault();
      nav(navBtn.dataset.nav);
      return;
    }
    const actionEl = e.target.closest("[data-action]");
    if (actionEl) {
      const a = actionEl.dataset.action;
      if (a === "nav-todos") nav("todos");
      else if (a === "open-create") openCreate();
      else if (a === "close-create") closeCreate();
      else if (a === "back-menu") {
        state.createView = "menu";
        renderSheet();
      } else if (a === "close-detail") closeDetail();
      else if (a === "advance-status") advanceStatus(actionEl.dataset.id, actionEl.dataset.status);
      else if (a === "complete-detail") completeFromDetail(actionEl.dataset.id);
      else if (a === "toast") flashToast(actionEl.dataset.msg);
      else if (a === "submit-form") {
        const box = document.getElementById("createForm");
        if (box) {
          state.form.title = box.querySelector('[name="title"]').value;
          state.form.desc = box.querySelector('[name="desc"]').value;
          state.form.prop = box.querySelector('[name="prop"]').value;
        }
        submitForm();
      }
      return;
    }
    const filter = e.target.closest("[data-filter]");
    if (filter) {
      state.todoFilter = filter.dataset.filter;
      renderScreen();
      return;
    }
    const create = e.target.closest("[data-create]");
    if (create) {
      selectForm(create.dataset.create);
      return;
    }
    const prio = e.target.closest("[data-prio]");
    if (prio) {
      state.form.prio = prio.dataset.prio;
      renderSheet();
      return;
    }
    const prop = e.target.closest("[data-prop]");
    if (prop) {
      openDetail("property", prop.dataset.prop);
      return;
    }
    const tkOpen = e.target.closest("[data-ticket-open]");
    if (tkOpen) {
      openDetail("ticket", tkOpen.dataset.ticketOpen);
    }
  });

  phone.addEventListener("pointerdown", (e) => {
    const card = e.target.closest("[data-ticket]");
    if (!card) return;
    cardDown(e, card.dataset.ticket);
  });
  phone.addEventListener("pointermove", (e) => {
    if (drag) cardMove(e);
  });
  phone.addEventListener("pointerup", (e) => {
    const card = e.target.closest("[data-ticket]");
    if (drag) cardUp(e, drag.id || (card && card.dataset.ticket));
  });
  phone.addEventListener("pointercancel", (e) => {
    if (drag) cardUp(e, drag.id);
  });

  phone.addEventListener("input", (e) => {
    if (!e.target.closest("#createForm")) return;
    const box = e.target.closest("#createForm");
    state.form.title = box.querySelector('[name="title"]').value;
    state.form.desc = box.querySelector('[name="desc"]').value;
    state.form.prop = box.querySelector('[name="prop"]').value;
    const kind = CREATE_KINDS[state.formKind];
    const btn = box.querySelector(".submit");
    const disabled = !state.form.title.trim();
    btn.disabled = disabled;
    btn.style.background = disabled ? "#e0e0e0" : kind.accent;
  });

  phone.addEventListener("change", (e) => {
    if (e.target.name === "prop") state.form.prop = e.target.value;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);
  const start = params.get("screen");
  if (["dashboard", "todos", "portfolio", "profile"].includes(start)) {
    state.screen = start;
  }
  if (params.get("sheet") === "1") {
    state.createMounted = true;
    state.createView = "menu";
  }
  if (params.get("static") === "1") {
    state.revealT = 1;
    document.documentElement.classList.add("is-static");
  }
  bind();
  render();
  if (state.screen === "dashboard" && params.get("static") !== "1") animateReveal();
});
