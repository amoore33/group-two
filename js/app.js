let nav = document.querySelector("#nav");
let main = document.querySelector("main");

nav.innerHTML = '\
    <a href="index.html"><div class="logo">\
       <span class="redbox">G</span>\
       <span class="redbox">F</span>\
       <span class="redbox">Y</span>\
       NEWS\
    </div></a>\
    <div class="hamburger-container"><i id="hamburger" class="fa-solid fa-bars"></i></div>\
    <div class="navlist">\
        <a href="index.html">HOME</a>\
        <a href="">WHAT’S HOT</a>\
        <a href="">POLITICS</a>\
        <a href="">ABOUT US</a>\
    </div>\
';
let menuOpen = false;
let hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", function() {
    menuOpen = !menuOpen;
    document.querySelector(".navlist").style.display = menuOpen ? "flex" : "none";
    hamburger.classList.toggle("fa-bars");
    hamburger.classList.toggle("fa-xmark");
});