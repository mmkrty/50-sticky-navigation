const nav = document.querySelector('.nav')
const hero = document.querySelector('.hero')
window.addEventListener('scroll', navFix)

function navFix() {
    if(window.scrollY > nav.offsetHeight){
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}