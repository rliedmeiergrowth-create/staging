// script.js

// Contact form fallback (kept for compatibility if a form is added later)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for reaching out! I'll get back to you soon.");
    });
  }
});

// Mobile accordion for Services (titles only expand/collapse)
document.addEventListener('DOMContentLoaded', () => {
  const mq = window.matchMedia('(max-width: 768px)');

  function setupAccordions() {
    const isMobile = mq.matches;
    document.querySelectorAll('.service-item').forEach(item => {
      const btn = item.querySelector('.service-title-btn');
      const collapse = item.querySelector('.service-collapse');
      if (!btn || !collapse) return;

      if (isMobile) {
        // start collapsed
        item.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.onclick = () => {
          const open = item.classList.toggle('open');
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        };
      } else {
        // desktop: always open
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        btn.onclick = null;
      }
    });
  }

  setupAccordions();
  mq.addEventListener ? mq.addEventListener('change', setupAccordions)
                      : mq.addListener(setupAccordions);
});
