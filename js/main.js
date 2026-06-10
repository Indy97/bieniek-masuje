/* ============================================================
   Bieniek masuje — skrypty strony
   ============================================================ */

/* --- KONFIGURACJA REZERWACJI (Cal.com) ---------------------
   1. Załóż darmowe konto na https://cal.com
   2. Utwórz typ wydarzenia, np. "Masaż 60 min"
   3. Wpisz poniżej swój link, np. "bieniek-masuje/masaz-60-min"
   Dopóki pole jest puste, sekcja rezerwacji pokazuje
   telefon i Messenger zamiast kalendarza.                    */
const CAL_LINK = "";

/* ---------- Kalendarz Cal.com (inline embed) ---------- */
(function initBooking() {
  if (!CAL_LINK) return;
  const calEl = document.getElementById("calEmbed");
  const fallbackEl = document.getElementById("bookingFallback");
  calEl.hidden = false;
  fallbackEl.hidden = true;

  /* oficjalny snippet osadzania Cal.com */
  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal, ar = arguments;
      if (!cal.loaded) {
        cal.ns = {}; cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); }
        else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");

  Cal("init", { origin: "https://cal.com" });
  Cal("inline", {
    elementOrSelector: "#calEmbed",
    calLink: CAL_LINK,
    layout: "month_view",
    config: { theme: "light" }
  });
})();

/* ---------- Nawigacja: tło po przewinięciu ---------- */
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Menu mobilne ---------- */
const burger = document.getElementById("navBurger");
const links = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(open));
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }
});

/* ---------- Animacje przy przewijaniu ---------- */
const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ---------- Rok w stopce ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
