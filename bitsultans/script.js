// ============================================
// BitSultans v4 — Luxury Serif + Warm Noir
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Header scroll ---
  const hd = document.querySelector('.hd');
  window.addEventListener('scroll', () => {
    hd.classList.toggle('hd--scrolled', window.scrollY > 50);
  }, { passive: true });

  // --- Mobile menu ---
  const toggle = document.getElementById('hdToggle');
  const mob = document.getElementById('mob');
  const mobClose = document.getElementById('mobClose');

  toggle.addEventListener('click', () => {
    mob.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  mobClose.addEventListener('click', () => {
    mob.classList.remove('open');
    document.body.style.overflow = '';
  });

  mob.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mob.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // --- Reveal on scroll ---
  const els = document.querySelectorAll('[data-r]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('v');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.1 + 's';
    obs.observe(el);
  });

  // --- Metric bars ---
  const fills = document.querySelectorAll('.met__fill');
  const barObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        barObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(f => barObs.observe(f));

  // --- Smooth scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // --- Form ---
  const form = document.getElementById('ctaForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.bt');
      const orig = btn.textContent;
      btn.textContent = 'Enviado \u2713';
      btn.style.background = '#15803d';
      btn.style.pointerEvents = 'none';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.pointerEvents = '';
        form.reset();
      }, 2500);
    });
  }

});
