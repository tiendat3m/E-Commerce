const navbar = document.querySelector(".navbar");
const menuBar = document.querySelector("#menu-bar");
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingIcon = document.querySelector(".icons .fa-shopping-cart");
const loginForm = document.querySelector(".login-form");
const userIcon = document.querySelector(".icons .fa-user");
const searchForm = document.querySelector(".search-form");
const searchIcon = document.querySelector(".icons .fa-search");

menuBar.onclick = function () {
    menuBar.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}


shoppingIcon.onclick = () => {
    shoppingCart.classList.toggle("active");
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
}

userIcon.onclick = () => {
    loginForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    searchForm.classList.remove("active");
}

searchIcon.onclick = () => {
    searchForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
}

window.onscroll = () => {
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
}

let slides = document.querySelectorAll(".home-slide-container");
let index = 0;

function next() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.querySelectorAll(".feature-image-1").forEach(image_1 => {
    image_1.addEventListener("click", () => {
        var src =  image_1.getAttribute("src");
        document.querySelector(".big-image-1").src = src;
    });
});

document.querySelectorAll(".feature-image-2").forEach(image_2 => {
    image_2.addEventListener("click", () => {
        var src =  image_2.getAttribute("src");
        document.querySelector(".big-image-2").src = src;
    });
});

document.querySelectorAll(".feature-image-3").forEach(image_3 => {
    image_3.addEventListener("click", () => {
        var src =  image_3.getAttribute("src");
        document.querySelector(".big-image-3").src = src;
    });
});