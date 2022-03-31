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
        $(this).hide();
    });

    // form sending
    $('form').submit((e) => {
        e.preventDefault();

        // validation
        if($('.form input:not(.form input:nth-child(3))')[0].value.length < 1 || $('.form input:not(.form input:nth-child(3))')[0].value.length > 15) {
            document.querySelector('.form input:not(.form input:nth-child(0))').classList.add('error');
            document.querySelector('.form input:not(.form input:nth-child(0))').setAttribute('placeholder', 'Поле не должно быть пустым и перевышать 15 символов');
            return false;
        }
        else {
            document.querySelector('.form input:not(.form input:nth-child(0))').classList.remove('error');
            document.querySelector('.form input:not(.form input:nth-child(0))').setAttribute('placeholder', 'Ваше имя');
        }
        if($('.form input:not(.form input:nth-child(3))')[1].value.length < 1 || $('.form input:not(.form input:nth-child(3))')[1].value.length > 15) {
            document.querySelector('.form input:not(.form input:nth-child(1))').classList.add('error');
            document.querySelector('.form input:not(.form input:nth-child(1))').setAttribute('placeholder', 'Поле не должно быть пустым и перевышать 15 символов');
            return false;
        }
        else {
            document.querySelector('.form input:not(.form input:nth-child(1))').classList.remove('error');
            document.querySelector('.form input:not(.form input:nth-child(1))').setAttribute('placeholder', 'Ваш телефон');
        }
        if($('.form input:not(.form input:nth-child(1))')[1].value.length < 1 || $('.form input:not(.form input:nth-child(1))')[1].value.length > 120) {
            $('.form input:not(.form input:nth-child(1))').eq(1).addClass('error');
            $('.form input:not(.form input:nth-child(1))').eq(1).attr('placeholder', 'Поле не должно быть пустым и перевышать 120 символов');
            return false;
        }
        else {
            $('.form input:not(.form input:nth-child(1))').eq(1).removeClass('error');
            $('.form input:not(.form input:nth-child(1))').eq(1).attr('placeholder', 'Краткое описание проекта');
        }

        $.ajax({
            type: 'POST',
            url: "/order_form.php", 
            cache: false,
            data: {
                name: $('.form input:not(.form input:nth-child(3))')[0].value,
                number: $('.form input:not(.form input:nth-child(3))')[1].value,
                description: $('.form input:not(.form input:nth-child(1))')[1].value
            },
            beforeSend: function() {
                $(".form input:not(.form input:nth-child(4))").val('');
                $('.form input:nth-child(4)').prop('disabled', true);
            },
            error: function(err) {
                console.log(err);
            },
            success: function() {
                $('.form input:nth-child(4)').prop('disabled', false);
            }
        });
        $('input[type="submit"]').val('Отправлено').css({background: '#00a141'});
    }); 
});

// <======= Scrollbar =======>

var scrollChild = document.getElementById("scrollChild");

var chet = 0;
window.onscroll = function () {
    bool_opacity = false;
    var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    scrollTop += innerHeight;
    var a = document.body.clientHeight / innerHeight;
    var b = document.body.clientHeight / scrollTop;
    var c = 100 / (a - 1);
    c = (a / b - 1) * c;
    a = innerHeight - 210;
    c = c / 100 * a;
    scrollChild.style.top = c + 'px';

    if (chet == 0) {
        scrollChild.style.animation = 'shadow_reverse  0.7s';
        scrollChild.style.opacity = 1;

        var timer = setInterval(function () {
            if (chet >= 100) {
                scrollChild.style.animation = 'shadow  0.5s';
                scrollChild.style.opacity = 0;
                clearInterval(timer);
            }
            chet++;
        }, 100);
    } else {
        chet = 0;
    }
}

var body = document.getElementsByTagName("body")[0];
is_active = false;

scrollChild.onmousedown = function (event) {
    is_active = true;
    y = event.clientY;
}

body.onmouseup = function (event) {
    is_active = false;
}

var y = 0;
body.onmousemove = function (e) 
{ 
    var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    if (is_active) {
        var c_y = e.clientY;
        var a = document.body.clientHeight / innerHeight;
        window.scrollTo(0, scrollTop + (c_y - y) * a);
        if (y < c_y) {
            y = c_y;
        } else if (y > c_y) {
            y = c_y;
        }
    }
};

document.getElementById("scrollbar").addEventListener("mouseover", function () {
    scrollChild.style.animation = 'shadow_reverse  0.7s';
    scrollChild.style.opacity = 1;
});

document.getElementById("scrollbar").addEventListener("mouseout", function () {
    if (!is_active) {
        scrollChild.style.animation = 'shadow  0.5s';
        scrollChild.style.opacity = 0;
    }
});

document.getElementById("scrollbar").onmousedown = document.getElementById("scrollbar").onselectstart = function () {
    return false;
};