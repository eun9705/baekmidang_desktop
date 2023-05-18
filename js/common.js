//header scroll
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top > 50){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });
});

//hamburgermenu
$(document).ready(function(){
    var btn = '.topnav .sitemap_icon a';
    var sMap = '.sMap';
    var sw = 0; 
    $(btn).click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        var has = $(this).hasClass('active');
        if(has){
            $(sMap).fadeIn(0);
            $(sMap).click(function(){
                $(this).fadeOut(0);
                $(btn).removeClass('active');
            });
        }else{
            $(sMap).fadeOut(0);
        }
    });
});

//subnav
$(document).ready(function(){
    var subBg = $('<div class="subnavbg"></div>');
    $('header').append(subBg);
    var gnb = '.gnb';
    var main= '.main_nav';
    var sub= '.subnav';
    var bg= '.subnavbg';
    var speed = 'fast';
    $(gnb).hover(function(){
        $(sub + ', ' + bg).stop().slideDown(speed);
        $(main).removeClass('active');
    },function(){
        $(sub + ', ' + bg).stop().slideUp(speed);
        $(main).removeClass('active');
    });
    $(main).focus(function(){ 
        $(sub + ', ' + bg).stop().slideDown(speed);
        $(this).addClass('active'); 
    });
    $(main).focus(function(){
        $(main).removeClass('active');
        $(this).addClass('active');
    });
    $(main).first().keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){
                $(sub + ', ' + bg).stop().slideUp(speed);
                $(this).removeClass('active');
            }
        }
    });
    $(sub).last().find('li:last a').keydown(function(e){
        if(e.keyCode == 9){
            if(!e.shiftKey){
                $(sub + ', ' + bg).stop().slideUp(speed);
                $(main).removeClass('active');
            }
        }    
    });
    $(sub).find('li:last a').focus(function(){
        $(main).removeClass('active');
        $(this).parents(sub).prev().addClass('active');
    });
});

//familysite
$(document).ready(function(){
    var btn = '.familysite button';
    var icon = '.icon';
    var speed = 500;
    var active = 'active';
    
    $(btn).click(function(){
        $(this).next().stop().slideToggle(speed);
        $(this).find(icon).toggleClass(active);
    });
    $(btn).parent().mouseleave(function(){
        $(this).find('ul').slideUp(speed);
        $(this).find(icon).removeClass(active);
    });
    $(btn).next().find('li:last a').keydown(function(e){
        if(e.keyCode == 9){
            if(!e.shiftKey){
                $(btn).parent().trigger('mouseleave');
            }
        }
    });
    $(btn).keydown(function(e){
        if(e.keyCode == 9){ 
            if(e.shiftKey){
                $(this).parent().trigger('mouseleave');
            }    
        }
    });
});

//scrollTop_btn
$(document).ready(function(){
    var btn = '.top_btn a';
    var speed = 1200;
    var easing = 'easeOutCubic';
    var minWidth = 1180;
    var btnWidth = $(btn).width();
    var w = minWidth + (2 * btnWidth) + 20;
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        var wWidth = $(window).width();
        if(top < 200 || wWidth < w){
            $(btn).parent().stop().fadeOut(300);
        }else{
            $(btn).parent().stop().fadeIn(300);
        }
    });
    $(window).trigger('scroll');
    $(window).resize(function(){
       $(window).trigger('scroll');
    });
    $(btn).click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        },speed,easing);
    });
});