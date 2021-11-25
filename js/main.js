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


function timer() {

    const timerElems = document.querySelectorAll('._timer');
    
    let deadline;
    
    timerElems.forEach(timerElem => {

        deadline = new Date(

            timerElem.getAttribute('data-date-year'),
            timerElem.getAttribute('data-date-month'),
            timerElem.getAttribute('data-date-day'),
            timerElem.getAttribute('data-date-hour'),
            timerElem.getAttribute('data-date-minute'));

            //let timerId = null;
            // склонение числительных
            /* function declensionNum(num, words) {
              return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
            } */
            // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
            function countdownTimer() {
              const diff = deadline - new Date();
              if (diff <= 0) {
                clearInterval(timerId);
              }
              const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
              const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
              const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
              
              /* timerElem.querySelector('.tariffs__item--timer-day .tariffs__item--timer-value').innerHTML = days;
timerElem.querySelector('.tariffs__item--timer-hour .tariffs__item--timer-value').innerHTML = hours; */


              const day = timerElem.querySelector('.tariffs__item--timer-day .tariffs__item--timer-value').innerHTML = days,
                    hour = timerElem.querySelector('.tariffs__item--timer-hours .tariffs__item--timer-value').innerHTML = hours,
                    minute = timerElem.querySelector('.tariffs__item--timer-minute .tariffs__item--timer-value').innerHTML = minutes;
              //const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
              /* $days.textContent = days < 10 ? '0' + days : days;
              $hours.textContent = hours < 10 ? '0' + hours : hours;
              $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
              $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
              $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
              $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
              $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
              $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']); */
            }
            // получаем элементы, содержащие компоненты даты
            /* const $days = document.querySelector('.tariffs__item--timer-day .tariffs__item--timer-value');
            const $hours = document.querySelector('.timer__hours');
            const $minutes = document.querySelector('.timer__minutes');
            const $seconds = document.querySelector('.timer__seconds'); */
            // вызываем функцию countdownTimer
            countdownTimer();
            // вызываем функцию countdownTimer каждую секунду
            //timerId = setInterval(countdownTimer, 60000);
    });

    
  // id таймера
  


}

timer();
  

/* // Анимация {

wow = new WOW({
mobile:       false,
})
wow.init();

// } */
