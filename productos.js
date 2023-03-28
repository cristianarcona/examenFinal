const button1 = document.querySelector('.button1')
button1.addEventListener('click', mostrarButton)

function mostrarButton(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}