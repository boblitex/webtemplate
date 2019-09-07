const burger = document.querySelector('.navbar-toggle');
const nav = document.querySelector('.sticky-wrapper')

burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
})

