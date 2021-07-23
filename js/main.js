let d = document;

/****** MENU *****/
((d) => {
  const btnMenu = d.getElementById('hamburger');
  const toggle = d.getElementById('toggle');

  btnMenu.addEventListener('click', () => {
    toggle.classList.toggle('menu-toggle');
  });

  d.addEventListener('click', (e) => {
    if (!e.target.matches('.social-menu div span')) return false;
    toggle.classList.toggle('menu-toggle');
  })
})(d)