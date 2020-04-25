$(document).ready(function(){
    $('.nav1>ul>li>a>span').hover(function(){
        $(this).addClass('on');
    },function(){
        $(this).removeClass('on');
    })
    $('.nav1>ul>li>a').click(function(){
        $(this).parent().siblings().children().removeClass('on');
        $(this).addClass('on');
    })
    $("#weixin").mouseover(function(){
        $('#nowx').css("display","block");
    })
    $("#weixin").mouseout(function(){
        $('#nowx').css("display","none");
    })
})

$(window).scroll(function(event) {
    var toped = $(this).scrollTop();
    $('.f1').css({'top':(919-(toped*0.1))+'px'});
    $('.f2').css({'top':(1252-(toped*0.25))+'px'});
    $('.f3').css({'top':(1464-(toped*0.15))+'px'});
    $('.f4').css({'top':(2021-(toped*0.2))+'px'});
    $('.f5').css({'top':(2389-(toped*0.05))+'px'});
    $('.f6').css({'top':(3174-(toped*0.06))+'px'});
    $('.f7').css({'top':(3658-(toped*0.06))+'px'});
    $('.f8').css({'top':(3905-(toped*0.06))+'px'});
});


$(function(){
    $(".cpz li").click(function(){
    　　　//获取点击的元素给其添加样式，讲其兄弟元素的样式移除
    　　　$(this).addClass("active").siblings().removeClass("active");
    　　　//获取选中元素的下标
    　　　var index = $(this).index();
    　　　$(this).parent().parent().siblings().children().eq(index).fadeIn(800).siblings().fadeOut(1000);
    });
});