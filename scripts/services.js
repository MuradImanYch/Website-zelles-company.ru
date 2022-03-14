

$(document).ready(() => {
    // category filter
    $('.filter button:nth-child(1)').click(() => {
        $('.filter button:nth-child(1)').css({background: '#272339'}).css({color: '#fff'});
        $('.filter button:not(.filter button:nth-child(1))').css({background: '#000'}).css({color: 'rgba(255, 255, 255, 0.4)'});
        $('.grapDes').hide();
        $('.webDev').fadeIn();
    });
    $('.filter button:nth-child(2)').click(() => {
        $('.filter button:nth-child(2)').css({background: '#272339'}).css({color: '#fff'});
        $('.filter button:not(.filter button:nth-child(2))').css({background: '#000'}).css({color: 'rgba(255, 255, 255, 0.4)'});
        $('.webDev').hide();
        $('.grapDes').fadeIn();
        $('.grapDes').css({display: 'flex'});
    });
});