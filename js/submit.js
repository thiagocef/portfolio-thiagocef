//prevenir o comportamento padrão do botão/submit, que é recarregar a página
function preventBtn(event){
    event.preventDefault()
}

document.querySelector('.btn').addEventListener('click', preventBtn)