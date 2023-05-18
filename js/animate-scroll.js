// todas as divs da section com atritubuto data-anima="scroll"
const projects = document.querySelectorAll('[data-anime]')

console.log(projects)
// PEGAR A DISTÂNCIA DO SCROLL EM RELAÇÃO AO TOPO DA PÁGINA
function animeScroll() {
    // distância do scroll (window.pageYOffset)
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75) //SEMPRE UTILIZAR ESSE CALCULO

    // (window.innerHeight * 0.75) é exatamente onde vai acontecer a animação do elemento

    // percorre cada caixa
    // e pega a distância de cada caixa em relação ao topo
    projects.forEach(box => {

        // comparar a distancia do elemento e do scroll
        if(windowTop > box.offsetTop) {

            box.classList.add('show-element')
            console.log('É maior')
        } else {
            box.classList.remove('show-element')
        }

    })

}
window.addEventListener('scroll', animeScroll)