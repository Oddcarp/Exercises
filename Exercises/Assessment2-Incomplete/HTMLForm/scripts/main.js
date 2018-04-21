$(document).ready(function(){
var btn = getE('btnSubmit');
btn.addEventListener('click', submit);

var btn2 = getE('btnReset');
btn2.addEventListener('click', reset);

var inputs = ['firstName', 'lastName', 'emailAddress', 'needBlender', ];
var ERROR_CLASS = 'invalid';

function submit() {
    var elm;
    var errorList = [];

    for (var i = 0; i < inputs.length; i++) {
        elm = getE(inputs[i]);
        if (elm.value === '') {
            errorList.push(elm.placeholder + ' is required');
            elm.classList.add(ERROR_CLASS);
        } else {
            elm.classList.remove(ERROR_CLASS);
        }
    }



    var email = getE('emailAddress').value;
    let testEmail = new RegExp("@");
    let testEmail2 = new RegExp(".com");
    if (testEmail.test(email) === false || testEmail2.test(email) === false) {
        errorList.push('Enter a valid Email');
    }

    var tim = getE('findOut');
    if (tim.value === '') {
        tim.classList.add(ERROR_CLASS);
        errorList.push('Please select how you found out about us');
    } else {
        tim.classList.remove(ERROR_CLASS);
    }

    var terms = getE('terms');
    if (terms.checked === false) {

        errorList.push('Give us your soul ' + getE('firstName').value);
    }




    var html
    if (errorList.length > 0) {
        html = '<ul class="errors"><li>' + errorList.join('</li><li>') + '</li></ul>';
    } else {
        html = '<h1>Thank you for entering the Sweepstakes!</h1>';
        reset();
    }

    getE('messages').innerHTML = html;
}

function reset() {
    for (var i = 0; i < inputs.length; i++) {
        var elm = getE(inputs[i])
        elm.value = '';
        elm.classList.remove(ERROR_CLASS);
    }

    getE('messages').innerHTML = '';
    getE('findOut').selectedIndex = "0";
    getE('needBlender').value = '';
    getE('terms').checked = false;
}

function getE(id) {
    return document.getElementById(id);
}
});