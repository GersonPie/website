// script.js

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

const nav = document.querySelector('#navigation')
const showNav = () =>{

    nav.classList.replace('shy', 'active')
}

document.querySelector('#x').addEventListener('click', ()=>{
    
    
})
const hideNav = () =>{

    nav.classList.replace('active','shy')
}