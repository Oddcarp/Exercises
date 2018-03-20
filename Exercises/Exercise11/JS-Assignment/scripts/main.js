var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    getElm(p1_fulname).innerHTML = firstName + " " + lastName;
    getElm(p1_valid).innerHTML = (firstName !== "" && lastName !== "");
    getElm(p1_fullNameLenth).innerHTML = firstName.length + lastName.length;
    console.log(firstName);
    console.log(lastName);




    // Part 2
    var emailAddress = getValue('emailAddress');
    var emailPattern = "@";
    getElm(p2_email).innerHTML = emailAddress;
    getElm(p2_valid).innerHTML = emailPattern.test(emailAddress);
    getElm(p2_emailLength).innerHTML = emailAddress.length;
    console.log(emailAddress);


    // Part 3
    var randomNumber = getValue('randomNumber');
    getElm(p3_number).innerHTML = randomNumber.value;
    getElm(p3_valid).innerHTML = Number.isNumber(randomNumber);
    console.log(randomNumber);




    // Part 4
    var arrayInput = getValue('arrayValue');
    arrayItems.push(arrayValue);
    getElm(p4_arraylength).innerHTML = arrayItems.length;
    getElm(p4_valid).innerHTML = arrayItems.value;
    console.log(arrayInput);











    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
