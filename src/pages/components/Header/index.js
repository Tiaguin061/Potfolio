const menu = document.querySelector('#menu')
const getButtonMenuOpen = document.querySelector('.btnMenu_open')
const getButtonMenuClose = document.querySelector('.btnMenu_close')
const menu_items = document.querySelectorAll('.menu-item .menu-item-action')

console.log(getButtonMenuOpen, getButtonMenuClose)
// getButtonMenuOpen.addEventListener('click', () => {
//     menu.classList.add('menu_open')
// })  

// getButtonMenuClose.addEventListener('click', () => {
//     menu.classList.remove('menu_open')
// })  


menu_items.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu_open')
    })
})
