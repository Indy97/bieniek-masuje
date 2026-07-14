/* ============================================================
   Bieniek masuje — skrypty strony
   ============================================================ */

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
