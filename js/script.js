/* Slider */
$('.intro_sec').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplayTimeout: 8000,
    /*  autoplay: true,  */
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
/* Header animation */
if (window.innerWidth > 1199) {
    let nav = document.querySelector('.middle-bar-sec');
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 70) {
            nav.classList.add('header-scrolled');
        }
        else { nav.classList.remove('header-scrolled') };
    }
}

/* Toggle-btn */
$(document).ready(function () {
    $(".toggle-btn").click(function () {
        $(this).toggleClass("cross_icon");
        $(".middle-bar .right ul").slideToggle("slow");

    })
})


// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse');

navBar.forEach(function (a) {
    a.addEventListener('click', function () {
        navCollapse.classList.remove('show');
    });
});
