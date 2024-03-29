// Navbar on scroll effect

window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 0);
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-light");
        navbar.classList.remove("navbar-dark");
        navbar.style.padding = '1rem .5rem';
    } else {
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("navbar-light");
        navbar.style.padding = '2rem 1rem';
    }
});