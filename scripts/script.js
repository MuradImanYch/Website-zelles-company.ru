let barToggle = false;
let btn_show = $("#btn_show");
let item_show = $('.portfolio_content .show');

$(document).ready(() => {
    $('.barsWrap').click(() => { // menu bar anim func
        barToggle = !barToggle;
        if(barToggle) {
            $('header .barsWrap .bar3').css({display: 'none'});
            $('header .barsWrap .bar1').css({transform: 'translate(0, 10px) rotate(45deg)'}).css({width: '15px'}).css({background: '#131313'});
            $('header .barsWrap .bar2').css({transform: 'rotate(-45deg)'}).css({width: '15px'}).css({background: '#131313'});
            $('.header .mobMenuWrap').fadeIn();
        }
        else {
            $('header .barsWrap .bar1').css({transform: 'translate(0, 0) rotate(0deg)'}).css({width: '35px'}).css({background: '#fff'});
            $('header .barsWrap .bar2').css({transform: 'rotate(0deg)'}).css({width: '35px'}).css({background: '#fff'});
            $('header .barsWrap .bar3').fadeIn(700).css({display: 'block'}).css({transform: 'rotate(-180deg)'}).css({width: '35px'}).css({background: '#fff'});
            $('.header .mobMenuWrap').fadeOut();
        }
    });
  
    btn_show.on('click',function(e) { // show more | portfolio.html
        item_show.css('display','block');
    });

});