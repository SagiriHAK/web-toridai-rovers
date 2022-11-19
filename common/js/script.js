function fadeAnime() {
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    
    $('.fadeUpTrigger').each(function(){
        var elemPos = $(this).offset().top - 50;
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
        } else {
            $(this).removeClass('fadeUp');
        }
    });

    $('.fadeRightTrigger').each(function(){
        var elemPos = $(this).offset().top - 50;
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeRight');
        } else {
            $(this).removeClass('fadeRight');
        }
    });

    $('.fadeLeftTrigger').each(function(){
        var elemPos = $(this).offset().top - 50;
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeLeft');
        } else {
            $(this).removeClass('fadeLeft');
        }
    });
}

$('.hambtn').on('click', function () {
    $('.hambtn, .menu, .menu-back, .menu-sns, .menu-contact').toggleClass('show');
});

$('.accordion-title').on('click', function () {
    $('.accordion-box').slideUp(500);

    var findElm = $(this).next('.accordion-box');

    if ($(this).hasClass('close')) {
        $(this).removeClass('close');
    } else {
        $('.close').removeClass('close');
        $(this).addClass('close');
        $(findElm).slideDown(500);
    }
});

$(window).scroll(function(){
    fadeAnime();
});

$(window).on('load', function () {
    fadeAnime();

    $('.accordion li:first-of-type section').addClass("open");
	$(".open").each(function(index, element){
		var Title =$(element).children('.accordion-title');
		$(Title).addClass('close');
		var Box =$(element).children('.accordion-box');
		$(Box).slideDown(500);
	});
});