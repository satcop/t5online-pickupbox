$(function() {

    //메뉴 토글
    $('.bind-menu-button').on('click', function() {
        $('body').addClass('show-side-menu');
    });
    $('.bind-close-button').on('click', function() {
        $('body').removeClass('show-side-menu');
    });

    $('.bind-add-order').on('click', function() {      
        $('.popup-order').show();
    });
    $('.bind-button-close').on('click', function() {
        $('.popup-order').hide();
    });

});