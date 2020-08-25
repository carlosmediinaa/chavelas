jQuery ('document').ready(function($){

  var menuBtn = $ ('.main-nav__icon'),
  menu = $('.main-nav__menu ul');

  menuBtn.click(function() {

    if(menu.hasClass('show') ) {

      menu.removeClass('show');
    } else {

      menu.addClass('show');
    }
    
  });

});
