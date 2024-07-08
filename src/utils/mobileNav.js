export function mobileNav () {
  const barIcon = document.querySelector('.header__bars');
  const mobileNav = document.querySelector('.mobile-nav');
  const close = document.querySelector('.mobile-nav__close-btn'); 

  barIcon.addEventListener('click', () => {
    mobileNav.style.display = 'flex';
  });

  close.addEventListener('click', () => {
    mobileNav.style.display = 'none';
  });
}