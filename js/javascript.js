$(function(){
    // header
    const $logo = $('header>.logo>a');
    const $gnb = $('header>.gnb>li');
    const $sub = $('header>.gnb>li>.sub');
    const $subBg = $('header>.sub_bg');

    let nowIdx = 0;

    $logo.on('click',function(evt){
        evt.preventDefault();
        $('body, html').stop().animate({
            scrollTop : 0
        });
    });

    $(window).on('scroll',function(){
        scrollTop = $(window).scrollTop();
        // console.log('scrolltop =',scrollTop);

        if(scrollTop > 150){ 
            $('header>.gnb').css({
                position: 'fixed',
                top : 40,
                left : 0,
                right : 0
            });
            $subBg.css({
                position : 'fixed',
                top : 73
            });
            $('section>.visual').css({
                marginTop : '30px'
            });
        }else{
            $('header>.gnb').css({
                position: 'relative',
                top : 0
            });
            $subBg.css({
                position : 'absolute',
                top : 223
            });
            $('section>.visual').css({
                marginTop : 0
            });
        }
    });

    $gnb.on('mouseenter',function(){
        nowIdx = $gnb.index(this);

        if($gnb.index(this)>6){
            $subBg.hide();
        }else{
            $subBg.stop().fadeIn(200);
        }

        $sub.eq(nowIdx).stop().fadeIn(400);

    });

    $gnb.on('mouseleave',function(){
        $sub.stop().fadeOut(400);
        $subBg.stop().fadeOut(200);
    });
});

$(function(){
    // section
    const $promotionEvt = $('section>.promotion>.promotion_container>.promotion_event');
    const $welcomeTxt = $('section>.welcome>.welcome_container>.welcome_txt');
    const $slide = $('section>.bottom_slide>ol>li');

    const $btnSearch = $('header>.mnu>.mnu_service>a:nth-of-type(3)');
    const $search = $('section>.search');

    let nowIdx = 0;
    let intervalKey = null;

    $(window).on('scroll',function(){
        if(scrollTop==150){
            $search.css({
                position : 'fixed',
                width : '100%',
                top : 40,
            });
        }if(scrollTop>300){
            $search.css({
                position : 'absolute',
                top : 0
            });
        }if(scrollTop>900){
            $promotionEvt.stop().animate({
                top : 0,
                opacity : 1
            },700);
        }if(scrollTop>3300){
            $welcomeTxt.stop().animate({
                right : 0,
                opacity : 1
            },700);
        }
    });

    $(window).on('load',function(){
        intervalKey = setInterval(function(){
            $slide.eq(nowIdx).stop().fadeOut();
            
            if(nowIdx==0){
                nowIdx=1;
            }else{
                nowIdx=0;
            }

            $slide.eq(nowIdx).stop().fadeIn();    
        },5000);
    });

    $btnSearch.on('click', function(evt){
        evt.preventDefault();
        $search.slideToggle();
        $('body, html').stop().animate({
            scrollTop : 0
        });
    });
});

$(function(){
    //footer
    $('footer>.footer_logo , aside').on('click', function(evt){
        evt.preventDefault();
        $('body, html').stop().animate({
            scrollTop : 0
        });
    });

    $(window).on('load', function(){
        $('footer>.footer_logo').trigger('click');
    });

});