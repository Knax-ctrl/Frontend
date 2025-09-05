
function image() {
    var fixedimage = document.querySelector(".fixed-image");
    var elems = document.querySelectorAll(".elem");

    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var imgdta = e.getAttribute("dta");
            fixedimage.style.backgroundImage = `url(${imgdta})`;
        })
    })
};

function work() {
    var heads = document.querySelectorAll(".w-head");
    var texts = document.querySelectorAll(".w-text");
    var Imgcon = document.querySelector(".w-con-r");


    heads.forEach(function (head) {
        head.addEventListener("click", function () {
            var Hid = head.getAttribute("id");
            var imgdata = head.getAttribute("w-img");
            Imgcon.style.backgroundImage = `url(${imgdata})`;

            heads.forEach(h => h.classList.remove("h-active"));

            head.classList.add("h-active");

            texts.forEach(function (text) {
                Tid = text.getAttribute("id");
                console.log(Tid);
                if (Hid == Tid) {
                    text.classList.add("t-active");
                }
                else {
                    text.classList.remove("t-active");
                }
            })
        })
    })
};
function responsivenavbar() {
    var showicon = document.querySelector(".nav-open");
    var closeicon = document.querySelector(".nav-close");
    var navbar = document.querySelector(".nav-bar");
    let n = 0;

    showicon.addEventListener("click", () => {
        if (n == 0) {
            n = 1;
            navbar.style.display = "flex";
            navbar.style.animation = "show-menu .6s ease-out .0s forwards";
        }        
        else{
            n = 0;
            navbar.style.animation = "hide-menu .6s ease-out .0s forwards";
            setTimeout(function () {
                navbar.style.display = "none";
            }, 600);
        }
    });

    closeicon.addEventListener("click", () => {
        navbar.style.animation = "hide-menu .6s ease-out .0s forwards";
        setTimeout(function () {
            navbar.style.display = "none";
        }, 600);

    });
}

responsivenavbar();
image();
work();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
