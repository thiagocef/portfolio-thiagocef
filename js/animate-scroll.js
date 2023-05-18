const animate = document.querySelectorAll('[data-anime]')

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75) 

    animate.forEach(item => {

        if(windowTop > item.offsetTop) {
            item.classList.add('show-element')
        } else {
            item.classList.remove('show-element')
        }

    })
}
window.addEventListener('scroll', animeScroll)