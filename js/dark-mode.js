const brush = document.querySelector('.fa-brush'),
      body = document.querySelector('body'),
      a = document.querySelectorAll('a'),
      allTitle = document.querySelectorAll('.all-title'),
      project = document.querySelectorAll('.project'),
      contactIcon = document.querySelectorAll('.contact-icon'),
      local = document.querySelectorAll('.contact-container a'),
      label = document.querySelectorAll('label'),
      formField = document.querySelectorAll('.form-field'),
      skill = document.querySelectorAll('.skill')

function darkMode() {
    console.log('darkMode ativado')

    body.classList.toggle('body-dark')
    
    menuHamburguer.classList.toggle('menu-hamburguer-dark') //já foi declarado
    menuMobile.classList.toggle('menu-mobile-dark') //já foi declarado
    brush.classList.toggle('brush-dark')

    a.forEach(item => {
        item.classList.toggle('a-dark')
    });

    allTitle.forEach(item => {
        item.classList.toggle('all-title-dark')
    })

    project.forEach(item => {
        item.classList.toggle('project-dark')
    })

    skill.forEach(item => {
        item.classList.toggle('skill-dark')
    })

    contactIcon.forEach(item => {
        item.classList.toggle('contact-icon-dark')
    })

    local.forEach(item => {
        item.classList.toggle('local-a-dark')
    })

    label.forEach(item => {
        item.classList.toggle('label-dark')
    })

    formField.forEach(item => {
        item.classList.toggle('form-field-dark')
    })


}

brush.addEventListener('click', darkMode)