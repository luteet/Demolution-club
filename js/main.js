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


const tariffSlider = new Swiper('.tariffs__block', {
    
    spaceBetween: 15,
    slidesPerView: 1,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.tariffs__block--arrow._next',
      prevEl: '.tariffs__block--arrow._prev',
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
          
        }
      }
});

const reviewsSlider = new Swiper('.reviews__block', {
    
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,

  navigation: {
    nextEl: '.reviews__item--slider-arrow._next',
    prevEl: '.reviews__item--slider-arrow._prev',
  },

  breakpoints: {
      // when window width is >= 320px
      1180: {
          slidesPerView: 3,
      }
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

            const day = timerElem.querySelector('.tariffs__item--timer-day .tariffs__item--timer-value'),
                  hour = timerElem.querySelector('.tariffs__item--timer-hours .tariffs__item--timer-value'),
                  minute = timerElem.querySelector('.tariffs__item--timer-minute .tariffs__item--timer-value');

            const diff = deadline - new Date(),
              
                  days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0,
                  hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0,
                  minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      
      
            day.innerHTML = days;
            hour.innerHTML = hours;
            minute.innerHTML = minutes;
             
            //console.log
    });

    
  // id таймера
  


}

timer();
/* const image = new Image();
image.src = bg;

const plugin = {
  beforeDraw: (chart) => {
    if (image.complete) {
      const ctx = chart.ctx;
      const {top, left, width, height} = chart.chartArea;
      const x = left + width / 1.95 - image.width / 2;
      const y = top + height / 2.15 - image.height / 2;
      ctx.drawImage(image, x, y);
    } else {
      image.onload = () => chart.draw();
    }
    
  },
};
 */
const ctx = document.getElementById('btc-chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
          {
            label: 'Минимальный процент дохода',
            data: dataMin,
            backgroundColor: [
                'rgba(24, 120, 198, 0.3)'
            ],
            borderColor: [
              'rgba(24, 120, 198, 1)'
            ],
            pointRadius: 0,
            borderWidth: 3,
            cubicInterpolationMode: 'monotone',
            tension: 0.4
        },
        {
          label: 'Максимальный процент дохода',
          data: dataMax,
          backgroundColor: [
            'rgba(91, 239, 203, 0.3)'
          ],
          borderColor: [
            'rgba(91, 239, 203, 1)'
          ],
          pointRadius: 0,
          borderWidth: 2,
          cubicInterpolationMode: 'monotone',
          tension: 0.4
      }
      ]
    },
    options: {
      
      scaleLineColor: "rgba(0,0,0,0)",
      responsive: true,
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            font: {
              size: 12,
            }
          },
        }
      },  
      interaction: {
        intersect: false,
        mode: 'index',
      },
      
      scales: {
        y: {
          suggestedMin: 2000,
          suggestedMax: 6500,

          grid: {
            display: false,
            borderWidth: 0,
          }
        },
        x: {
          grid: {
            display: false,
            borderWidth: 0,
          }
        },
        
        
      }

      }
    
  
    /* options: {
      scales: {
          x: {
              type: 'time',
              time: {
                  displayFormats: {
                      quarter: 'MMM YYYY'
                  }
              }
          }
      }
  } */

});
/* // Анимация {

wow = new WOW({
mobile:       false,
})
wow.init();

// } */
