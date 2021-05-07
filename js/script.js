// Accordions
const accordionButtons = document.querySelectorAll('.section-faq__accordion-question h3');
accordionButtons[0].parentElement.classList.add('active');

function removeActive() {
  accordionButtons.forEach(btn => {
    btn.parentElement.classList.remove('active')
  })
}
accordionButtons.forEach(btn => {
  btn.addEventListener('click', event => {
    removeActive();
    event.target.parentElement.classList.add('active')
  })
})

// Tabs
const tabContents = document.querySelectorAll(".tab");

tabContents.forEach(tab => {
  tab.style.display = 'none'
});
tabContents[0].style.display = 'flex'

function openTab(tabNumber) {
  tabContents.forEach(tab => {
    tab.style.display = 'none'
  });
  document.getElementById(tabNumber).style.display = "flex";
}

const openMenu = document.querySelector('.mobile-header .open-menu');
const mobileNav = document.querySelector('.mobile-header .mobile-nav');
const x = document.querySelector('.x');

console.log(openMenu);
console.log(mobileNav);

openMenu.addEventListener('click', () => {
  mobileNav.classList.add('active')
})

x.addEventListener('click', () => {
  mobileNav.classList.remove('active')
})
