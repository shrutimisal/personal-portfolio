// Mobile menu toggle
const mobileMenuBtn = document.getElementById("menubtn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileNavLinks = document.querySelectorAll(".mobNavLink");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active navigation link highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-purple-600");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("text-purple-600");
    }
  });
});

// Progress bar animation
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".progress-bar");
      progressBars.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        setTimeout(() => {
          bar.style.width = width;
        }, 200);
      });
    }
  });
}, observerOptions);

const skillsSection = document.querySelector("#skills");
if (skillsSection) {
  observer.observe(skillsSection);
}

// Form validation (basic)
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Reset previous errors
  document.querySelectorAll(".text-red-500").forEach((error) => {
    error.classList.add("hidden");
  });

  formMessage.textContent = "Thank you! Your message has been sent.";
  formMessage.classList.remove("hidden");
  formMessage.classList.add("bg-green-100", "text-green-700");
});
