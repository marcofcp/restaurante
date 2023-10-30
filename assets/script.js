/* Hidden/Mobile Menu */

const nav_button = document.getElementById('nav-button');
const hidden_menu = document.getElementById('hidden-menu');
const close_hidden_menu = document.getElementById('close-hidden-menu');
const facebook_box = document.getElementById('facebook-box');

nav_button.addEventListener('click', () => {
  hidden_menu.classList.add('right-hidden-menu');
  facebook_box.style.display = "none";
})

close_hidden_menu.addEventListener('click', () => {
  hidden_menu.classList.remove('right-hidden-menu');
  facebook_box.style.display = "block";
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    centerSlides: true,
    grabCursor: true,
    breakpoints: {
      318: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
});

/* Botão Topo da Página */

const botao_topo = document.getElementById('top-page-button');

window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
      botao_topo.classList.add('button-bottom');
    } else {
      botao_topo.classList.remove('button-bottom');
    }
});

/* Scroll Reveal */

const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
});

sr.reveal(`.main-img-box`, {
  origin: "left",
  interval: 100,
});

sr.reveal(`.right-main-box`, {
  origin: "right",
  interval: 100,
});

sr.reveal(`.galeria, .testemunhos-container`, {
  origin: "bottom",
  interval: 100,
});

sr.reveal(`.localizacao, .telefone, .facebook-footer`, {
  origin: "top",
  interval: 100,
});