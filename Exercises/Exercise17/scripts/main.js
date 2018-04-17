$(document).ready(function () {

    $('.error').hide();

    let inputsEven = $('.input-group').filter(':even');
    inputsEven.addClass('even');
    $('#firstName').find('span').show();
    $('#firstName').blur(function () {
        if ($('#firstName').val() === '') {
            $('span:first').show();
        } else {
            $('span:first').hide();
        };
    });

    $('#lastName').blur(function () {
        if ($('#lastName').val() === '') {
            $('.input-group:nth-child(2) span').show();
        } else {
            $('.input-group:nth-child(2) span').hide();
        };
    });

    $('#emailAddress').blur(function () {
        if ($('#emailAddress').val() === '') {
            $('.input-group:nth-child(3) span').show();
        } else {
            $('.input-group:nth-child(3) span').hide();
        };
        let testEmail = new RegExp("@");
        let testEmail2 = new RegExp(".com");
        let emailAddress = $('#emailAddress').val();
        console.log(emailAddress)
        console.log(testEmail.test(emailAddress));
        if (testEmail.test(emailAddress) === false || testEmail2.test(emailAddress) === false) {
            $('.emailMsg').show();
        } else {
            $('.emailMsg').hide();
        }
    });

});