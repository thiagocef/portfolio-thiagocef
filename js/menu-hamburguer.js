const menuHamburguer = document.querySelector('.menu-hamburguer'),
      navBar = document.querySelector('.nav-bar'),
      menuMobile = document.querySelector('.menu-mobile'),
      item1 = document.querySelector('.item-1'),
      item2 = document.querySelector('.item-2'),
      item3 = document.querySelector('.item-3')

menuMobile.className = 'oculto'

function openMenu() {
    menuMobile.classList.toggle('menu-mobile')
    item1.classList.toggle('anime-item-1')
    item2.classList.toggle('anime-item-2')
    item3.classList.toggle('anime-item-3')

}
menuHamburguer.addEventListener('click', openMenu)
