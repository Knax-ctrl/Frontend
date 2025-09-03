
function image(){
    var fixedimage = document.querySelector(".fixed-image");
    var elems = document.querySelectorAll(".elem");

elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
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
