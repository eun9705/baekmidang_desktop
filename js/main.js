//mobile
$(document).ready(function(){
    var mobile_keys = new Array('iPhone','iPad','Android','BlackBerry','Windows Phone','Windows CE','LG','MOT','SAMSUNG','SonyEricsson','Nokia');
    
    if(document.URL.match('move_pc_screen')){
        $('.mobilebtn').fadeIn(0);
        mobile_keys = null;
    }
    
    for(var i in mobile_keys){
        if(navigator.userAgent.match(mobile_keys[i]) != null){ 
            location.href = 'http://mekhosting.dothome.co.kr/';
        }
    }
});

//popup
$(document).ready(function(){
    function setCookie(name, value, expiredays){
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';';
    }
    
    var popup = '.popup';
    var chkbox = '#chk';
    
    $(popup).find('form a').click(function(){
        var chk = $(chkbox).prop('checked');
        
        if(chk){
            setCookie('exCookie','done',1); 
        }
        $(popup).stop().fadeOut(0);
        $('html, body').css('overflow','visible');
    });
    
    var cookieData = document.cookie;
    
    if(cookieData.indexOf('exCookie=done') < 0){
        $(popup).fadeIn(0);
        $('html, body').css('overflow','hidden');
    }else{
        $(popup).fadeOut(0);
        $('html, body').css('overflow','visible');
    }
});

//main_slider
$(document).ready(function(){
    $('.main_slider .flexslider').flexslider({
        animation: 'slide',
        slideshowSpeed: 5000,
        pausePlay: true,
		directionNav: false,
        pauseText: '',
        playText: '', 
    });
});

//icecream
$(document).ready(function(){
    var iPhoto = '.icecream .photo li';
    var iOne_btn = '.icecream .one_btn';
    var speed = 700;
    var iNum = $(iPhoto).size();
    var iBtnWrap = '';
    
    for(var i=1;i<=iNum;i++){
        iBtnWrap += '<button></button>';
    }
    $(iOne_btn).html(iBtnWrap);
    var iBtn = '.icecream .one_btn button';
    
    $(iPhoto).first().fadeIn(0);
    $(iBtn).first().addClass('active');
    
    $(iBtn).click(function(){
        $(iBtn).removeClass('active');
        $(this).addClass('active');
        
        var index = $(this).index();
        $(iPhoto).stop().fadeOut(speed);
        $(iPhoto).eq(index).stop().fadeIn(speed);
    });
});

//bakery
$(document).ready(function(){
    var bPhoto = '.bakery .photo li';
    var bOne_btn = '.bakery .one_btn';
    var speed = 700;
    var bNum = $(bPhoto).size();
    var bBtnWrap = '';
    
    for(var i=1;i<=bNum;i++){
        bBtnWrap += '<button></button>';
    }
    $(bOne_btn).html(bBtnWrap);
    var bBtn = '.bakery .one_btn button';
    
    $(bPhoto).first().fadeIn(0);
    $(bBtn).first().addClass('active');
    
    $(bBtn).click(function(){
        $(bBtn).removeClass('active');
        $(this).addClass('active');
        
        var index = $(this).index();
        $(bPhoto).stop().fadeOut(speed);
        $(bPhoto).eq(index).stop().fadeIn(speed);
    });
});

//store
$(document).ready(function(){
    var btn = '.tab_bar ul'; 
    var content = '.store_img'; 
    var active = 'active';
    var speed = 500;
    $(btn).find('li:first a').addClass(active); 
    $(content).find('div:first').fadeIn(speed); 
    $(btn).find('li a').click(function(e){
        e.preventDefault(); 
        $(btn).find('li a').removeClass(active);
        $(this).addClass('active');
        var index = $(this).parents('li').index();
        $(content).find('div').fadeOut(speed); 
        $(content).find('div').eq(index).fadeIn(speed);
    });
});

//movie
$(document).ready(function(){
    var myVideo01 = document.getElementById('myVideo01');
    var myVideo02 = document.getElementById('myVideo02');
    var myVideo03 = document.getElementById('myVideo03');
    var myVideo04 = document.getElementById('myVideo04');
    
    var num =  $('.movie .swiper-slide').size();
    
    var swiper = new Swiper('.movie .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 220,
		centeredSlides: true,
		navigation: {
			nextEl: '.movie .swiper-button-next',
			prevEl: '.movie .swiper-button-prev',
    	},
		loop: true,
        allowTouchMove: false,
        on: {
            slideChangeTransitionStart: function(){
                myVideo01.pause();
                myVideo01.currentTime = 0;
                myVideo02.pause();
                myVideo02.currentTime = 0;
                myVideo03.pause();
                myVideo03.currentTime = 0;
                myVideo04.pause();
                myVideo04.currentTime = 0;
            },
            slideChangeTransitionEnd: function(){
                var index = $('.movie .swiper-slide-active').attr('data-swiper-slide-index');
                  
                for(var i=0;i<=num;i++){
                    if(i == index){
                        var v = eval('myVideo0' + (i + 1));
                        
                        $('.movie .swiper-slide-active').hover(function(){
                            if(v.paused){
                                $(this).find('.play_btn').stop().fadeIn(0);
                                $(this).find('.pause_btn').stop().fadeOut(0);
                            }else{
                                $(this).find('.pause_btn').stop().fadeIn(0);
                                $(this).find('.play_btn').stop().fadeOut(0);
                            }

                            $(document).on('click','.movie .swiper-slide-active .pause_btn',function(){
                                $(this).parent().siblings('video').trigger('pause');
                                $(this).prev().stop().fadeIn(0);
                                $(this).stop().fadeOut(0);
                            });

                            $(document).on('click','.movie .swiper-slide-active .play_btn',function(){
                                $(this).parent().siblings('video').trigger('play');
                                $(this).next().stop().fadeIn(0);
                                $(this).stop().fadeOut(0);
                            });
                        },function(){
                            $(this).find('.play_btn').stop().fadeOut(0);
                            $(this).find('.pause_btn').stop().fadeOut(0);
                        });
                    }
                }
            }
        },
    });
});

//notice_event
$(document).ready(function(){
    var btn = '.notice_event > ul'; 
    var noticeList = '.notice_event .notice_content';
    var boardList = '.notice_event';
    var active = 'active';
    var list = '.list';
    var notice_btn = '.notice_content .more_btn';
    var event_btn = '.event_content .more_btn';
    $(btn).find('li:first').addClass(active);
    $(noticeList).find(list).fadeIn(0); 
    
    function check(){
        var has = $(btn).find('li:first').hasClass('active');
        if(has){
            $(notice_btn).css('display','block');
            $(event_btn).css('display','none');
        }else{
            $(event_btn).css('display','block');
            $(notice_btn).css('display','none');
        }
    };
    
    $(btn).find('> li > a').click(function(e){
        e.preventDefault(); 
        $(btn).find('> li').removeClass('active');
        $(this).parent().addClass(active);
        var activeLi = $(this).parent();
        $(boardList).find('.list').fadeOut(0);
        activeLi.find(list).fadeIn(0);
        check();
    });
    check();
});