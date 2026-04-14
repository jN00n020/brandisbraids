/* =============================================
   BRANDI'S BRAIDS — JAVASCRIPT
   ============================================= */

// ----- NAVBAR: scroll effect -----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ----- HAMBURGER MENU -----
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ----- SCROLL REVEAL -----
const revealEls = document.querySelectorAll(
  '.service-card, .gallery-item, .testimonial-card, .about-content, .about-image-wrap, .contact-info, .contact-form'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal', 'visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ----- CONTACT FORM SUBMIT -----
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const success = document.getElementById('formSuccess');

  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Simulate async submit
  setTimeout(() => {
    btn.textContent = 'Sent! ✓';
    btn.style.background = 'linear-gradient(135deg, #6bab7a, #4a8a5a)';
    success.classList.add('visible');

    // Reset after 5s
    setTimeout(() => {
      document.getElementById('contactForm').reset();
      btn.textContent = 'Send Booking Request ✨';
      btn.style.background = '';
      btn.disabled = false;
      success.classList.remove('visible');
    }, 5000);
  }, 1500);
}

// ----- SMOOTH ACTIVE NAV LINKS -----
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinkEls.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--rose)';
    }
  });
});
