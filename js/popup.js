export default function popup(arg) {

    let popup, popupBg, popupCloseBtn;

    try {
        
        popup = document.querySelector(arg.id);
        popupBg = popup.querySelector('._popup-bg');
        popupCloseBtn = popup.querySelector('._popup-close-btn');

    } catch {
        return false;
    }

    arg.html.style.setProperty('--popup-padding', window.innerWidth - arg.body.offsetWidth + 'px');
    
    arg.body.classList.add('_popup-active');

    
    
    //window.location.hash = id;

    popup.classList.add('_active');

    function removeFunc() {

        popup.classList.remove('_active');
        setTimeout(function() {
            arg.body.classList.remove('_popup-active');
            arg.html.style.setProperty('--popup-padding', '0px');
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

    document.addEventListener("keydown", function(event) {
        if(event.keyCode == 27) {
            removeFunc();
            setTimeout(function() {
                return false;
            },200)
        }
    })

}

//export default {popup};

