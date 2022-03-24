document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".header__burger-opn").addEventListener("click", function() {
        document.querySelector(".header__navbar").classList.add("active");
    })
    document.querySelector(".header__burger-cls").addEventListener("click", function() {
        document.querySelector(".header__navbar").classList.remove("active");
    })
})
