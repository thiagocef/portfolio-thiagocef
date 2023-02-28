const afterLoader = document.querySelector('.after-loader'),
      loader = document.querySelector('.loader')  

setTimeout(function() {
    loader.classList.add('oculto')
    afterLoader.classList.remove('oculto')  

}, 4800)