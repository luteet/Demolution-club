import tab from './tab.js';
import popup from './popup.js';
import galleryPopup from './gallery-popup.js';
import scrollToSection from './scrollToSection.js';
import lazyLoadForVideo from './lazyLoadForVideo.js';
import * as sliders from './sliders.js';
import timer from './timer.js';
import chart from './chart.js';
import headerToggle from './headerToggle.js';


const body = document.querySelector('body'),
      html = document.querySelector('html'),
      menu = document.querySelectorAll('._burger, .header__nav, body'),
      burger = document.querySelector('._burger'),
      header = document.querySelector('.header');


const selectLists = document.querySelectorAll('._select-style')
let checkTabActive = false;


body.addEventListener('click', function (e) {



  // Закрыть меню
  if (e.target.classList.contains('header__nav--block')) {
    menu.forEach(elem => {
      elem.classList.remove('_active')
    })
  }




// Меню в шапке
if (e.target.classList.contains('_burger') || e.target.closest('._burger')) {
  menu.forEach(elem => {
    elem.classList.toggle('_active')
  })
}




// Выбор языка страницы
if (e.target.classList.contains('_select-style-btn') || e.target.closest('._select-style-btn')) {

  if (e.target.closest('._select-style-btn')) {
    const parent = e.target.closest('._select-style');
    parent.classList.toggle('_active');

  }

} else if (!e.target.closest('._select-style')) {
  try {
    document.querySelector('._select-style').classList.remove('_active');
  } catch { }

}





// Табы
if (e.target.classList.contains('_tab-link') || e.target.parentNode.classList.contains('_tab-link') && checkTabActive == false) {
  e.preventDefault();
  tab({
    checkTabActive: checkTabActive,
    e: e,
  });
}






// Попап

if (e.target.classList.contains('_popup-btn') || e.target.parentNode.classList.contains('_popup-btn')) {
  e.preventDefault();
  popup({
    id: e.target.getAttribute('href'),
    html: html,
    body: body,
  })
}






// Галерея Попап
if (e.target.classList.contains('_gallery-popup-link') || e.target.closest('._gallery-popup-link')) {
  let link = (e.target.closest('._gallery-popup-link')) ? e.target.closest('._gallery-popup-link') : e.target
  
  e.preventDefault()
  galleryPopup({
      link: link,
      html: html,
      body: body,
  });
  
}






// Скролл к секциям
if (e.target.classList.contains('_btn-to-scroll')) {

    scrollToSection({
        e: e,
        menu: menu,
        header: header,
    })

}






})


document.addEventListener('DOMContentLoaded', function() {
  lazyLoadForVideo();
  
  // =-=-=-=-=-=-=-= СЛАЙДЕРЫ { =-=-=-=-=-=-=-=
  
  sliders.tariffSlider();
  
  
  // =-=-=-=-=-=-=-= } СЛАЙДЕРЫ =-=-=-=-=-=-=-=
  
  
  // =-=-=-=-=-=-=-= ТАЙМЕР { =-=-=-=-=-=-=-=
  
  timer();
  
  // =-=-=-=-=-=-=-= ТАЙМЕР } =-=-=-=-=-=-=-=
  
  
  // =-=-=-=-=-=-=-= ГРАФИК { =-=-=-=-=-=-=-=
  
  chart();
  
  // =-=-=-=-=-=-=-= ГРАФИК } =-=-=-=-=-=-=-=
  
  
  // Media запросы {
  
  let windowSize = window.innerWidth,
  resizeCheck = windowSize >= 768 ? false : true;
  
  let appendBlock = document.querySelector('._append-to-menu'),
      headerNavBody = document.querySelector('.header__nav--body'),
      headerNavBlockBody = document.querySelector('.header__nav--block-body');
  
  function resize() {
  windowSize = window.innerWidth;
  if (windowSize >= 768 && resizeCheck == false) {
    resizeCheck = true;
  
    if (appendBlock) {
      headerNavBody.prepend(appendBlock);
      appendBlock.classList.add('_visible');
    }

    sliders.reviewsSlider.desktopMode();
  
    } else if (windowSize < 768 && resizeCheck == true) {
        resizeCheck = false;

        if (appendBlock) {
            headerNavBlockBody.prepend(appendBlock);
            appendBlock.classList.add('_visible');
        }

        sliders.reviewsSlider.tableMode();
    
    }
  }
  
  resize();
  
  window.onresize = resize;
  
  // Media запросы }
  
  
  // Изменение шапки при скролле {
  
  headerToggle({
      header: header,
  });
  
  // Изменение шапки при скролле }
  

});


function loaded() {


}

window.onload = loaded

// Анимация {

  AOS.init({
    //offset: 0,
    //disable: 'mobile',
    duration: 600,
    //anchorPlacement: 'bottom-bottom', 
  });
    
// }

// data-aos-anchor-placement="top-center"
// data-aos-anchor=".levels-training__container"
