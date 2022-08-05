let closer = document.querySelector('#closer');

closer.onclick = () =>{
    closer.style.display = 'none';
    navbar.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    closer.style.display = 'block';
    navbar.classList.toggle('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    closer.style.display = 'block';
    cart.classList.toggle('active');
}

let loginForm = document.querySelector('.account');

document.querySelector('#login-btn').onclick = () =>{
    closer.style.display = 'block';
    loginForm.classList.toggle('active');
}

let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}



var typed = new Typed('.typing-text',{
    strings : ['Scrum Master | Tester'],
    loop : true,
    typeSpeed : 50
})
var typed = new Typed('.typing-text1',{
    strings : ['Frontend Developer'], 
    loop : true,
    typeSpeed : 50
})
var typed = new Typed('.typing-text2',{
    strings : ['Frontend Developer'], 
    loop : true,
    typeSpeed : 50
})
var typed = new Typed('.typing-text3',{
    strings : ['Frontend Developer'], 
    loop : true,
    typeSpeed : 50
})
var typed = new Typed('.typing-text4',{
    strings : ['Backend Developer'], 
    loop : true,
    typeSpeed : 50
})
var typed = new Typed('.typing-text5',{
    strings : ['Backend Developer'], 
    loop : true,
    typeSpeed : 50
})
var typed = new Typed('.typing-text6',{
    strings : ['Frontend Developer'], 
    loop : true,
    typeSpeed : 50
})