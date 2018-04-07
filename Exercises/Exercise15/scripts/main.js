$(document).ready(function(){

     ///// Code goes here
  $('#btnOne').click(function(){
    alert("The button was clicked.");
  });

  $('#btnTwo').click(function(){
    $(".update-html").html('<h3>Hello Word!</h3>');
  });

  $('#btnThree').click(function(){
    $("#text-update").val('<h3>Hello Word!</h3>');
  });

  $('#btnCopyHtml').click(function(){
    var copiedHtml = $('.copy-html').html();
    console.log(copiedHtml);
    $('.paste-html').html(copiedHtml);
  });

  $('#btnCopyValues').click(function(){
    var copiedValue = $("#copy-text").val();
    $("#paste-text").val(copiedValue);
  });


});
