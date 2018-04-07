$(document).ready(function(){

  $('#btnShow').click(function() {
    $('.display-basic').show();
  });

  $('#btnHide').click(function() {
    $('.display-basic').hide();
  });

  $('#btnToggle').click(function() {
    $('.display-basic').toggle();
  });



  $('#btnFadeIn').click(function() {
    $('.display-fade').fadeIn();
  });

  $('#btnFadeOut').click(function() {
    $('.display-fade').fadeOut();
  });

  $('#btnFadeToggle').click(function() {
    $('.display-fade').fadeToggle();
  });



  $('#btnSlideDown').click(function() {
    $('.display-slide').slideDown();
  });

  $('#btnSlideUp').click(function() {
    $('.display-slide').slideUp();
  });

  $('#btnSlideToggle').click(function() {
    $('.display-slide').slideToggle();
  });

});

$('.part3').show();
