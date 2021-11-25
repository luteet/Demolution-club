/* $(function() {

    

}); */



const body = document.querySelector('body'),
    html = document.querySelector('html'),
    menu = document.querySelectorAll('._burger, .header__nav, body'),
    burger = document.querySelector('._burger'),
    header = document.querySelector('.header');



const selectLists = document.querySelectorAll('._select-style')
let checkTabActive = false;

body.addEventListener('click', function (e) {

    // Меню в шапке
    if (e.target.classList.contains('_burger') || e.target.parentNode.classList.contains('_burger')) {
        menu.forEach(elem => {
            elem.classList.toggle('_active')
        })
    }

    if (e.target.classList.contains('_select-style-btn') || e.target.closest('._select-style-btn')) {
        
        if(e.target.closest('._select-style-btn')) {
            const parent = e.target.closest('._select-style');

            //parent.querySelector('._select-style-btn').classList.toggle('_active');
            parent.classList.toggle('_active');

        }

    } else if(!e.target.closest('._select-style')) {
        try {
            document.querySelector('._select-style').classList.remove('_active');
        }catch {}
        
    }

    if(e.target.classList.contains('_tab-link') || e.target.parentNode.classList.contains('_tab-link') && checkTabActive == false) {
        e.preventDefault();
        tab(e.target);
    }

    if(e.target.classList.contains('_popup-btn') || e.target.parentNode.classList.contains('_popup-btn')) {
        e.preventDefault();
        popup(e.target.getAttribute('href'));
    }

})


const swiper = new Swiper('.tariffs__block', {
    
    //loop: true,
    
    spaceBetween: 15,
    slidesPerView: 1,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1180: {
            slidesPerView: 2,
            spaceBetween: 72,
            centeredSlides: false,
          
        },
        768: {
            centeredSlides: true,
            spaceBetween: 15,
            slidesPerView: 3,
          
        }/* ,
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        } */
      }

  });

/* // Анимация {

wow = new WOW({
mobile:       false,
})
wow.init();

// } */
