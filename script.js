const menuItems = document.querySelector('.menu-items')
const cross = document.querySelector('.cross')
const bar = document.querySelector('.bar')

cross.addEventListener('click', toggleFunction)
bar.addEventListener('click', toggleFunction)
function toggleFunction() {
    cross.classList.toggle('active');
    menuItems.classList.toggle('active')
    bar.classList.toggle('active')
}