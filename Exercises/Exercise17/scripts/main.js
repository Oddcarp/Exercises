$(document).ready(function () {

    $('.error').hide();

    let inputsEven = $('.input-group').filter(':even');
    inputsEven.addClass('even');
    $('#firstName').find('span').show();
    $('#firstName').blur(function () {
        if ($('#firstName').val() === '') {
            $('span:first').fadeIn();
        } else {
            $('span:first').fadeOut();
        };
    });

    $('#lastName').blur(function () {
        if ($('#lastName').val() === '') {
            $('.input-group:nth-child(2) span').fadeIn();
        } else {
            $('.input-group:nth-child(2) span').fadeOut();
        };
    });

    $('#emailAddress').blur(function () {
        if ($('#emailAddress').val() === '') {
            $('.input-group:nth-child(3) span').fadeIn();
        } else {
            $('.input-group:nth-child(3) span').fadeOut();
        };
        let testEmail = new RegExp("@");
        let testEmail2 = new RegExp(".com");
        let emailAddress = $('#emailAddress').val();
        console.log(emailAddress)
        console.log(testEmail.test(emailAddress));
        if (testEmail.test(emailAddress) === false || testEmail2.test(emailAddress) === false) {
            $('.emailMsg').fadeIn();
        } else {
            $('.emailMsg').fadeOut();
        }
    });

});