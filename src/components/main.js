window.addEventListener("scroll", () => {
    const navbar = document.getElementById('navbar');

    var scroll = window.scrollY;
    if (scroll > 40) {
        navbar.classList.add("bg-[--Sage]");
        navbar.classList.remove("bg-[#f5f5f571]");
        navbar.classList.add("text-[--Ivory]");
    } else {
        navbar.classList.remove("bg-[--Sage]");
        navbar.classList.add("bg-[#f5f5f571]");
        navbar.classList.remove("text-[--Ivory]");

    }

});


document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.main-content');

    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 1s ease-in-out';

        setTimeout(() => {
            preloader.style.display = 'none';
            mainContent.style.display = 'block';
            document.body.style.overflow = 'auto';
        }, 1000);

    }, 2000); 
});




var blogbtn = document.querySelectorAll(".click");
var divhidebtn = document.querySelectorAll(".hidelist");
var icon = document.querySelectorAll(".icon");

blogbtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        btn.classList.add("text-[--DarkGreen]")
        btn.classList.remove("text-[--Ivory]")

        divhidebtn[index].classList.toggle("max-h-0");
        divhidebtn[index].classList.toggle("opacity-0");
        divhidebtn[index].classList.toggle("max-h-[500px]");
        divhidebtn[index].classList.toggle("opacity-100");

        if (icon[index].classList.contains('fa-plus')) {
            icon[index].classList.remove('fa-plus');
            icon[index].classList.add('fa-minus');
        } else {
            btn.classList.remove("text-[--DarkGreen]")
            icon[index].classList.remove('fa-minus');
            icon[index].classList.add('fa-plus');
        }
    });
});
