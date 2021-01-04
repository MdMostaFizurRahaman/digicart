// window.Popper = require("popper.js").default;
// window.$ = window.jQuery = require("jquery");

// require("bootstrap");
const bootstrap = require('bootstrap')

// menu-bar
document.querySelector('.menu-bar').addEventListener('click', function (e) {
    this.classList.toggle('rotate');
    document.querySelector('.sidebar').classList.toggle('show');
})

// Sidebar dropdown
const sidebarItems = document.querySelectorAll('.sidebar__item');

sidebarItems.forEach(item => {
    item.addEventListener('click', function () {
        if (this.querySelector('ul')) {
            this.querySelector('ul').classList.toggle('show');
        }
    })
})

// Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

import Splide from '@splidejs/splide';

// Slider Js
const latestWorks = document.getElementById('latest-works');
const testimonial = document.getElementById('testimonial-slider');

if(latestWorks){
    
    new Splide( latestWorks, {
        type   : 'loop',
        perPage: 4,
        perMove: 1,
        gap: "1rem",
        pagination: false,
        autoplay: true,
        interval: 3000,
        breakpoints: {
            992: {
                perPage: 3,
            },
    
            768: {
                perPage: 2,
            },
    
            576: {
                perPage: 1,
            },
        }
    } ).mount();
}


if(testimonial){

    new Splide( testimonial, {
        type   : 'loop',
        perPage: 2,
        arrows: false,
        gap: "2rem",
        pagination: true,
        autoplay: true,
        interval: 3000,
        breakpoints: {
            992: {
                perPage: 1,
            },
        }
    } ).mount();
}


