const heroVideo = document.querySelector('.site-video');
const soundToggle = document.querySelector('.sound-toggle');
const sections = [...document.querySelectorAll('.page')];
const navLinks = [...document.querySelectorAll('.nav a')];
const counters = [...document.querySelectorAll('[data-count]')];

if (heroVideo && soundToggle) {
  soundToggle.addEventListener('click', () => {
    heroVideo.muted = !heroVideo.muted;
    soundToggle.textContent = heroVideo.muted ? '开启声音' : '关闭声音';
    soundToggle.setAttribute('aria-pressed', String(!heroVideo.muted));
    heroVideo.play().catch(() => {});
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.18 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

function animateCount(el) {
  if (el.dataset.done) return;
  el.dataset.done = 'true';
  const end = Number(el.dataset.count || 0);
  const duration = 1600;
  const startTime = performance.now();
  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(end * eased).toLocaleString('zh-CN');
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) animateCount(entry.target); });
}, { threshold: 0.6 });
counters.forEach((counter) => countObserver.observe(counter));

const pageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { threshold: 0.55 });
sections.forEach((section) => pageObserver.observe(section));

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.querySelectorAll('.page__bg').forEach((bg, index) => {
    bg.style.transform = `translateY(${(y - bg.parentElement.offsetTop) * 0.08}px) scale(1.06)`;
  });
}, { passive: true });

const assetCandidates = {
  'image-space-01': ['assets/space-panorama-1', 'assets/space-panorama-1.jpg', 'assets/space-panorama-1.png', 'assets/space-panorama-1.webp'],
  'image-space-02': ['assets/rocket-launch-2', 'assets/rocket-launch-2.jpg', 'assets/rocket-launch-2.png', 'assets/rocket-launch-2.webp'],
  'image-space-03': ['assets/space-panorama-3', 'assets/space-panorama-3.jpg', 'assets/space-panorama-3.png', 'assets/space-panorama-3.webp'],
  'image-rocket-01': ['assets/rocket-launch-1', 'assets/rocket-launch-1.jpg', 'assets/rocket-launch-1.png', 'assets/rocket-launch-1.webp'],
  'image-feitian-01': ['assets/feitian-1', 'assets/feitian-1.jpg', 'assets/feitian-1.png', 'assets/feitian-1.webp'],
  'image-feitian-astronaut': ['assets/feitian-astronaut', 'assets/feitian-astronaut.jpg', 'assets/feitian-astronaut.png', 'assets/feitian-astronaut.webp']
};

function useFirstExistingImage(className, candidates) {
  const target = document.querySelector(`.${className}`);
  if (!target) return;
  const tryNext = (index) => {
    if (index >= candidates.length) return;
    const probe = new Image();
    probe.onload = () => { target.style.backgroundImage = `url("${candidates[index]}")`; };
    probe.onerror = () => tryNext(index + 1);
    probe.src = candidates[index];
  };
  tryNext(0);
}

Object.entries(assetCandidates).forEach(([className, candidates]) => useFirstExistingImage(className, candidates));
