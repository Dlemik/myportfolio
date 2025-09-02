// mobile menu
const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
if (menuBtn){
  menuBtn.addEventListener('click', ()=> nav.classList.toggle('open'));
}

// active link highlight
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(a=>{
  if(a.getAttribute('href') === path) a.classList.add('active');
});

// scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show'); });
},{threshold:.2});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// smooth scroll for on-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
    }
  });
});
