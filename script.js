
function toggleMenu(){
  const links=document.querySelector('.nav-links');
  if(links) links.classList.toggle('open');
}
function typeIntro(text, el, speed=75){
  let i=0;
  (function tick(){
    if(i<text.length){
      el.textContent += text.charAt(i++);
      setTimeout(tick, speed);
    }
  })();
}
document.addEventListener('DOMContentLoaded', ()=>{
  const typed=document.querySelector('[data-typed]');
  if(typed) typeIntro(typed.dataset.text || 'I am Nzali...', typed, 80);
});

