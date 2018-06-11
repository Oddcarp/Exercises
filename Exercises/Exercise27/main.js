/*
    Exercise 27 
*/
$(document).ready(function(){
    /*=======================
        Regular Expressions 
     =======================*/



$('#btnvalidate').click(function(){
    var numVal = $('#numeric').val();
    var pattern = /[a-z]/gi;
    var numResult = numVal.replace(pattern, '');
    var email = $('#email').val();
    var emailPattern = 	new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var emailTest = emailPattern.test(email);
    console.log(numResult);
    
    $('#numeric').val(numResult);
    if (!emailTest) {
        $('#email').addClass('is-invalid');
    } else {
        $('#email').removeClass('is-invalid');
    }
});


let originalArray = [1,2,3,4];
let newArray = originalArray.map(x => x * x);
console.log(newArray);


     /*=======================
       Array Methods 
     =======================*/




});