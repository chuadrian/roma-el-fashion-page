const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 70)
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open');
}

//Dark mode
let darkMode = document.querySelector("#darkmode")

darkMode.onclick = () => {
    if(darkMode.classList.contains('bx-moon')){
        darkMode.classList.replace('bx-moon', 'bx-sun')
        document.body.classList.add('active')
    } else{
        darkMode.classList.replace('bx-sun', 'bx-moon')
        document.body.classList.remove('active')
    }
}
