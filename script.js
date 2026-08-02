const weddingDate = new Date('2026-08-16T00:00:00+03:00');
function tick(){
  const now = new Date();
  let diff = weddingDate - now;
  if(diff < 0) diff = 0;
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  const set = (id,val)=>{ const el=document.getElementById(id); if(el) el.textContent=val; };
  set('days', d);
  set('hours', String(h).padStart(2,'0'));
  set('minutes', String(m).padStart(2,'0'));
  set('seconds', String(s).padStart(2,'0'));
}
tick(); setInterval(tick,1000);

const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-menu');
if(btn && menu){
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('active');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    btn.classList.remove('active');
    menu.classList.remove('active');
  }));
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
