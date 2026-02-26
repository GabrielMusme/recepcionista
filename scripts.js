// Custom cursor
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((el) => observer.observe(el));

// Animate software bars on scroll
const bars = document.querySelectorAll(".sw-fill");
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width + "%";
      }
    });
  },
  { threshold: 0.3 },
);
bars.forEach((bar) => barObserver.observe(bar));

// Mobile menu hamburger
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

mobileMenuClose.addEventListener("click", () => {
  hamburger.classList.remove("active");
  mobileMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});

// WhatsApp on large screens – intercept phone link
const phoneLink = document.getElementById("phone-link");
if (phoneLink) {
  phoneLink.addEventListener("click", (e) => {
    e.preventDefault();
    const whatsappNumber = "5492235910329";
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}
