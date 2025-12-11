/* app.optimized.js - optimized behavior (defer this script) */

/* ---------- Translations (kept, trimmed) ---------- */
const translations = { /* same translations object you had (omit here for brevity) */ };

/* ---------- Theme toggle ---------- */
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function initializeTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  body.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}
function updateThemeIcon(theme){
  const icon = themeToggle?.querySelector('i');
  if(icon) icon.className = theme === 'light' ? 'bx bx-moon' : 'bx bx-sun';
}
themeToggle?.addEventListener('click', () => {
  const cur = body.getAttribute('data-theme') || 'dark';
  const next = cur === 'light' ? 'dark' : 'light';
  body.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});

/* ---------- Language ---------- */
const languageSelect = document.getElementById('languageSelect');
function updateLanguage(lang){
  const els = document.querySelectorAll('[data-translate]');
  els.forEach(el => {
    const key = el.getAttribute('data-translate');
    if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
  });
}
function initializeLanguage(){
  const saved = localStorage.getItem('language') || 'en';
  if(languageSelect){
    languageSelect.value = saved;
    updateLanguage(saved);
    languageSelect.addEventListener('change', (e) => {
      updateLanguage(e.target.value);
      localStorage.setItem('language', e.target.value);
    });
  } else updateLanguage(saved);
}

/* ---------- Lazy-load project videos on hover ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-vidbox').forEach(vb => {
    const video = vb.querySelector('video');
    const src = vb.dataset.src;
    let loaded = false;

    // mouseenter / touchstart: load and play
    const loadAndPlay = () => {
      if(!loaded && src && video){
        video.src = src;
        video.load();
        loaded = true;
      }
      video?.play().catch(()=>{});
      vb.querySelector('.hover-sign')?.classList.add('active');
    };
    const pauseOnLeave = () => {
      video?.pause();
      vb.querySelector('.hover-sign')?.classList.remove('active');
    };

    vb.addEventListener('mouseenter', loadAndPlay);
    vb.addEventListener('touchstart', loadAndPlay, {passive:true});
    vb.addEventListener('mouseleave', pauseOnLeave);
    vb.addEventListener('touchend', pauseOnLeave);
  });
});

/* ---------- Back to top ---------- */
const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.style.position = 'fixed';
backToTop.style.right = '18px';
backToTop.style.bottom = '18px';
backToTop.style.display = 'none';
backToTop.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';
backToTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
document.body.appendChild(backToTop);
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 400 ? 'block' : 'none';
});

/* ---------- Rotating roles (lighter) ---------- */
const rotatingRoles = ['Full Stack Developer','Frontend Developer','Backend Developer','UI/UX Enthusiast','MERN Stack Expert'];
let rotatingIndex = 0;
const rotatingText = document.getElementById('rotating-text');
function showNextRole(){
  if(!rotatingText) return;
  rotatingText.style.opacity = 0;
  setTimeout(()=> {
    rotatingText.textContent = rotatingRoles[rotatingIndex];
    rotatingText.style.opacity = 1;
    rotatingIndex = (rotatingIndex+1) % rotatingRoles.length;
  }, 300);
}
if(rotatingText){
  rotatingText.textContent = rotatingRoles[0];
  setInterval(showNextRole, 2500);
}

/* ---------- Simple sidebar toggle ---------- */
const menu = document.getElementById('menuBtn');
const closeIcon = document.getElementById('closeBtn');
const sideBar = document.getElementById('sidebar');
menu?.addEventListener('click', ()=> sideBar.classList.add('open-sidebar'));
closeIcon?.addEventListener('click', ()=> sideBar.classList.remove('open-sidebar'));

/* ---------- Initialize theme & language ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  initializeLanguage();
});

/* ---------- AOS init deferred (if script loaded) ---------- */
window.addEventListener('load', () => {
  if(window.AOS) window.AOS.init({ duration: 900, once: true });
});

/* ---------- Prevent expensive repaints: throttle heavy events if any ---------- */
/* (Add throttling here if you bind heavy events in future.) */
