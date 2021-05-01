let d = document;

/****** MENU *****/
((d) => {
  const menu = d.querySelector(".menu"), 
        menuBtn = d.querySelector(".menu-btn");

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-active');
  });
  
  d.addEventListener('click', (e) => {
    if(!e.target.matches('.menu a')) return false;
    menu.classList.toggle('is-active');    
  })
})(d)