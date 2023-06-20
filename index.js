const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 6;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
          scrollLeft = window.scrollX || document.documentElement.scrollLeft,
          scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout( ()=> {
        animOnScroll();
    }, 300 );
}

var endDate = new Date("September 2, 2023 16:00").getTime();
var daysEl = document.querySelector('.until > .days > strong > div');
var hoursEl = document.querySelector('.until > .hours > strong > div');
var minutesEl = document.querySelector('.until > .minutes > strong > div');
var secondsEl = document.querySelector('.until > .seconds > strong > div');

setInterval( function(){
    var now = new Date().getTime();
    var distance = endDate - now;

    var days = Math.floor( distance / (1000 * 60 * 60 * 24) );
    var hours = Math.floor( (distance % (1000 * 60 * 60 *24) ) / (1000 * 60 * 60) );
    var minutes = Math.floor( (distance % (1000 * 60 * 60) ) / (1000 * 60) );
    var seconds = Math.floor( ( distance % (1000 * 60) ) / 1000 );

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    console.log('Second')
}, 1000);

function scrollToElement(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}