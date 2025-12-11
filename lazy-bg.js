/* lazy-bg.js */
document.addEventListener('DOMContentLoaded', () => {
    const bgEls = document.querySelectorAll('[data-bg]');
    if('IntersectionObserver' in window && bgEls.length){
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            const el = entry.target;
            el.style.backgroundImage = `url(${el.dataset.bg})`;
            el.removeAttribute('data-bg');
            obs.unobserve(el);
          }
        });
      }, { rootMargin: '300px' });
      bgEls.forEach(e => io.observe(e));
    } else {
      bgEls.forEach(el => {
        el.style.backgroundImage = `url(${el.dataset.bg})`;
        el.removeAttribute('data-bg');
      });
    }
  });
  