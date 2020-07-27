// BURGER MENU

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', function () {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
})

// CLICK FUNCTIONS 

$('.welcome button').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.aboutMe').offset().top
    }, 500)
})


$('.back-about').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.aboutMe').offset().top
    }, 750)
    nav.classList.remove('active')
})


$('.back-skills').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.skills').offset().top
    }, 900)
    nav.classList.remove('active')
})

$('.back-quotes').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.quotes').offset().top
    }, 1000)
    nav.classList.remove('active')
})


$('.back-projects').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.projects').offset().top
    }, 1150)
    nav.classList.remove('active')
})


$('.back-contact').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contact').offset().top
    }, 600)
    nav.classList.remove('active')
})