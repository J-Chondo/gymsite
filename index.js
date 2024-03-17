const header = document.querySelector("header");
const navlist = document.querySelector('.navlist');
const menu = document.querySelector(".navitem i");

window.onscroll = () => {
    if (window.scrollY > 100) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }

    navlist.classList.remove("show");
    menu.classList.remove("show");
}

menu.addEventListener("click", (event) => {
    event.stopPropagation();
    navlist.classList.toggle("show");
    menu.classList.toggle("fa-times"); // Toggle menu icon
});

document.querySelectorAll(".navlist").forEach((n) =>
    n.addEventListener("click", () => {
        navlist.classList.remove("show");
        menu.classList.remove("fa-times"); // Remove x icon
    })
);

navlist.addEventListener("click", (event) => {
    event.stopPropagation();
});
















var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  