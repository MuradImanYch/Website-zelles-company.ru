

$(document).ready(() => {
    // category filter
    $('.filter button:nth-child(1)').click(() => {
        $('.filter button:nth-child(1)').css({background: '#272339'}).css({color: '#fff'});
        $('.filter button:not(.filter button:nth-child(1))').css({background: '#000'}).css({color: 'rgba(255, 255, 255, 0.4)'});
        $('.grapDes, .promotion').hide();
        $('.webDev').fadeIn();
    });
    $('.filter button:nth-child(2)').click(() => {
        $('.filter button:nth-child(2)').css({background: '#272339'}).css({color: '#fff'});
        $('.filter button:not(.filter button:nth-child(2))').css({background: '#000'}).css({color: 'rgba(255, 255, 255, 0.4)'});
        $('.webDev, .promotion').hide();
        $('.grapDes').fadeIn();
        $('.grapDes').css({display: 'flex'});
    });
    $('.filter button:nth-child(3)').click(() => {
        $('.filter button:nth-child(3)').css({background: '#272339'}).css({color: '#fff'});
        $('.filter button:not(.filter button:nth-child(3))').css({background: '#000'}).css({color: 'rgba(255, 255, 255, 0.4)'});
        $('.webDev, .grapDes').hide();
        $('.promotion').fadeIn();
        $('.promotion').css({display: 'flex'});
    });
});