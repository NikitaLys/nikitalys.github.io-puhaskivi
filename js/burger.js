document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".header__burger-opn").addEventListener("click", function() {
        document.querySelector(".header__navbar").classList.add("active");
    })
    var reverse = document.querySelector(".close")
    var tl = gsap.timeline();
    tl.fromTo(".menu__top", { y: -20, opacity: 0.6 }, { duration: 0.4, y: 0, ease: "power4" })
        .fromTo(".menu__top", { opacity: 0.6 }, { duration: 0.4, opacity: 1 })
    tl.fromTo(".menu__container", { y: 150, opacity: 0.2 }, { duration: 0.6, y: 0 }, "-=0.9")
        .fromTo(".menu__container", { opacity: 0.2 }, { duration: 1, opacity: 1 }, "-=0.9")
    tl.fromTo(".menu__nav", { y: 50, opacity: 0 }, { duration: 0.5, y: 0, })
        .fromTo(".menu__nav", { opacity: 0 }, { duration: 1, opacity: 1 }, "-=0.5")
    tl.fromTo(".social, .sub-menu", { y: 50, opacity: 0 }, { duration: 0.7, y: 0 }, "-=0.7")
        .fromTo(".social, .sub-menu", { opacity: 0 }, { duration: 0.7, opacity: 1 }, "-=0.7");
    reverse.onclick = function() {
        tl.reverse();
    }
});

document.querySelector(".header__burger-close").addEventListener('click', function() {
    setTimeout(function() {
        document.querySelector(".header__navbar").classList.remove("active");
    }, 1000)
})
