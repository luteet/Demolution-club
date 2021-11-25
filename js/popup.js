

function popup(id) {

    let popup, popupBg, popupCloseBtn;

    try {
        
        popup = document.querySelector(id);
        popupBg = popup.querySelector('._popup-bg');
        popupCloseBtn = popup.querySelector('._popup-close-btn');

    } catch {
        return false;
    }

    html.style.setProperty('--popup-padding', window.innerWidth - body.offsetWidth + 'px');
    
    body.classList.add('_popup-active');

    
    
    //window.location.hash = id;

    popup.classList.add('_active');

    function removeFunc() {

        popup.classList.remove('_active');
        setTimeout(function() {
            //history.replaceState("", "", location.pathname)
            //window.location.hash = '';
            body.classList.remove('_popup-active');
            html.style.setProperty('--popup-padding', '0px');
        },200)
        
    }

    popupBg.addEventListener('click', function() {
        removeFunc();
        setTimeout(function() {
            return false;
        },200)
    });

    popupCloseBtn.addEventListener('click', function() {
        removeFunc();
        setTimeout(function() {
            return false;
        },200)
    });

}

/* function popupInit() {
    let hash = window.location.hash,
        popupElem;

    try {
        popupElem = document.querySelector(hash);
    } catch {
        return false;
    }

    if(popupElem.classList.contains('_popup')) {
        popup(hash);
    }
    
}

popupInit(); */

