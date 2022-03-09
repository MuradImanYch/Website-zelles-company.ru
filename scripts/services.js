let barToggle = false;

$(document).ready(() => {
    $('.barsWrap').click(() => { // menu bar anim func
        barToggle = !barToggle;
        if(barToggle) {
            $('header .barsWrap .bar1').css({transform: 'translate(0, 10px) rotate(45deg)'}).css({width: '15px'}).css({background: '#131313'});
            $('header .barsWrap .bar2').css({transform: 'rotate(-45deg)'}).css({width: '15px'}).css({background: '#131313'});
            $('.mobMenuWrap').fadeIn();
        }
        else {
            $('header .barsWrap .bar1').css({transform: 'translate(0, 0) rotate(0deg)'}).css({width: '35px'}).css({background: '#fff'});
            $('header .barsWrap .bar2').css({transform: 'rotate(0deg)'}).css({width: '35px'}).css({background: '#fff'});
            $('.mobMenuWrap').fadeOut();
        }
    });
});