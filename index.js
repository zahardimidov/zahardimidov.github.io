$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.header__link').click(function(event) {
        if ($('.header__menu').hasClass('active')){
            $('.header__burger').click();
        }
    })

    let map;
    let marker;
    function initMap ()
    {
        map = new ymaps.Map("yandexmap", {
            center: [58.004678, 56.266338],
            zoom: 16,
            controls: []
            });
        marker = new ymaps.Placemark([58.004678, 56.266338], {}, {
                preset: 'islands#redDotIcon'
            });
        map.geoObjects.add(marker);
    }
    ymaps.ready(initMap);
})

function Scroll(el){
    document.querySelector(el).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}