$(document).ready(function () {
    

    let menu_bar = $('.menu_bar');
    let menu_mobile = $('.mobile_menu');
    let menu_cross = $('.cross_menu');

    menu_bar.click(function() {
        menu_mobile.css("height","100vh")
    });
    menu_cross.click(function(){
        menu_mobile.css("height", "0")
    });



});