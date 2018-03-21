var arrayItems = [];



function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    getElm('p1_fullName').innerHTML = firstName + " " + lastName;
    getElm('p1_valid').innerHTML = (firstName !== "" && lastName !== "");
    getElm('p1_fullNameLength').innerHTML = firstName.length + lastName.length;





    // Part 2
    var emailAddress = getValue('emailAddress');
    var emailPattern = new RegExp("@");
    getElm('p2_email').innerHTML = emailAddress;
    getElm('p2_valid').innerHTML = emailPattern.test(emailAddress);
    getElm('p2_emailLength').innerHTML = emailAddress.length;


    // Part 3
    var randomNumber = getValue('randomNumber');
    getElm('p3_number').innerHTML = randomNumber.value;
    getElm('p3_valid').innerHTML = isNumeric(randomNumber);




    // Part 4
    var arrayInput = getValue('arrayValue');
    arrayItems.push(arrayInput);
    getElm('p4_arraylength').innerHTML = arrayItems.length;
    getElm('p4_valid').innerHTML = arrayItems;

    var fruits = ["Orange", "Orange", "Apple", "Apple"];
    var fruits2 = [];
    var currentFruit = "";
    ////////////////////////Your code ends here.
    for (var x=0;x<fruits.length;++x) {
      debugger;
      if (currentFruit !== fruits[x]) {
        fruits2.push(fruits[x]);
      }
      currentFruit = fruits[x];
    }
    console.log(fruits2);
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

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
