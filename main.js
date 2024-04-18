$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('.header').css({'background':'rgb(11, 1, 65)', 'box-shadow':'0 .2rem .5rem rgb(17, 2, 106)'});
        }else{
            $('.header').css({'background':'none', 'box-shadow':'none'});

        }

    })
    
});