if (window.lucide) {
  lucide.createIcons();
}

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const header = document.getElementById("main-header");
window.addEventListener("scroll", () => {
  if (!header) return;
  if (window.scrollY > 60) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

function setMenuOpen(open) {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.classList.toggle("menu-open", open);
  document.body.classList.toggle("overflow-hidden", open);
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
}

function toggleMenu() {
  if (!mobileMenu) return;
  setMenuOpen(!mobileMenu.classList.contains("menu-open"));
}

if (menuToggle) menuToggle.addEventListener("click", toggleMenu);
if (menuClose) menuClose.addEventListener("click", () => setMenuOpen(false));
mobileLinks.forEach((link) => link.addEventListener("click", () => setMenuOpen(false)));

function setupServiceDetailsToggle(buttonId, detailsId) {
  const button = document.getElementById(buttonId);
  const details = document.getElementById(detailsId);
  if (!button || !details) return;

  const icon = button.querySelector('i[data-lucide="chevron-right"]');

  button.addEventListener("click", () => {
    const isOpen = Boolean(details.style.maxHeight);
    if (isOpen) {
      details.style.maxHeight = "";
      if (icon) icon.style.transform = "rotate(0deg)";
    } else {
      details.style.maxHeight = details.scrollHeight + "px";
      if (icon) icon.style.transform = "rotate(90deg)";
    }
  });
}

setupServiceDetailsToggle("toggle-interiores-btn", "interiores-details");
setupServiceDetailsToggle("toggle-escolas-btn", "escolas-details");
setupServiceDetailsToggle("toggle-pavimentacao-btn", "pavimentacao-details");
setupServiceDetailsToggle("toggle-interiores2-btn", "interiores2-details");
setupServiceDetailsToggle("toggle-consultoria-btn", "consultoria-details");
setupServiceDetailsToggle("toggle-portfolio-btn", "portfolio-details");

const revealEls = document.querySelectorAll(".reveal:not(.is-visible)");
if (revealEls.length && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
