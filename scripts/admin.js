let barToggle = false;

$(document).ready(() => {
    $('.barsWrap').click(() => { // menu bar anim func
        barToggle = !barToggle;
        if(barToggle) {
            $('.barsWrap .bar3').css({display: 'none'});
            $('.barsWrap .bar1').css({transform: 'translate(0, 10px) rotate(45deg)'}).css({width: '25px'}).css({background: '#000'});
            $('.barsWrap .bar2').css({transform: 'rotate(-45deg)'}).css({width: '25px'}).css({background: '#000'});
            $('nav').animate({left: '2.5%'})
        }
        else {
            $('.barsWrap .bar1').css({transform: 'translate(0, 0) rotate(0deg)'}).css({width: '35px'}).css({background: '#000'});
            $('.barsWrap .bar2').css({transform: 'rotate(0deg)'}).css({width: '35px'}).css({background: '#000'});
            $('.barsWrap .bar3').fadeIn(700).css({display: 'block'}).css({transform: 'rotate(-180deg)'}).css({width: '35px'}).css({background: '#000'});
            $('nav').animate({left: '-100%'})
        }
    });
  
    btn_show.on('click',function(e) { // show more | portfolio.html
        item_show.css('display','block');
        $(this).hide();
    });

});