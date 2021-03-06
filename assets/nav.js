const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const homeMenu = document.querySelector('#home-menu')
const featuresMenu = document.querySelector('#features-menu')
const aboutMenu = document.querySelector('#about-menu')
const homeImage = document.querySelector('.home-image')
const menuBar = document.querySelector('.active');

const mobileMenu = () => {
    menu.classList.toggle('active')
    menuLinks.classList.toggle('active')
}

const highlightNav = () => {
    let scrollPos = window.scrollY
    if(window.innerWidth > 960) {
        if(scrollPos < 580){
            homeMenu.classList.add('view')
            featuresMenu.classList.remove('view')
            aboutMenu.classList.remove('view')


            return
        } else if (scrollPos > 580 && scrollPos < 1100){ 
            homeMenu.classList.remove('view')
            featuresMenu.classList.add('view')
            aboutMenu.classList.remove('view')
            return
        } else if (scrollPos > 1100 && scrollPos < 2300){ 
            homeMenu.classList.remove('view')
            featuresMenu.classList.remove('view')
            aboutMenu.classList.add('view')

            return
        }
    }
    homeMenu.classList.remove('view')
    featuresMenu.classList.remove('view')
    aboutMenu.classList.remove('view')

}

const hideMobileMenu = () => {

    if(menuBar) {
        menu.classList.toggle('active')
        menuLinks.classList.toggle('active')
    }
}


menu.addEventListener('click', mobileMenu)
menuLinks.addEventListener('click' ,hideMobileMenu)
window.addEventListener('scroll', highlightNav)
window.addEventListener('click', highlightNav)