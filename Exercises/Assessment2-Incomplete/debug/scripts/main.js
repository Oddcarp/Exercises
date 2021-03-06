/*
    Read the comments and follow the instructions
    Total Points available -> 80
    Part 1 - 30 points
    Part 2 - 40 points
    Clean Code and Comments - 10 points
    Total Challenge/Bonus points -> 10
*/


/*========================
    Part 1 Fixing Code - 30
====================================*/


/*
    The code below is broken and not doing what it should.  
    
    Do your best to fix it.
    Look for:
    Wrong selectors
    Misspelling
    Variables used at the wrong time
    Wrong operators
    It uses the HTML in /debugging/index.html  
    Points Available: 30points
*/
$(document).ready(function () {


    //This is supposed to add an event listener but it's causing an error
    //Fix it please.
    //document.getElementById('btnMake').addEventListener('click', build);
    $('#btnMake').on('click', build);

    function build() {
		
        var firstName = $('#firstName');
        var firstNameValue = firstName.val();


        var lastName = $('#lastName');
        var lastNameValue = lastName.val();

        /*invalid should add a red border around the respective input
            It will also show a hidden error message */
        if (firstNameValue === '') {
            firstName.addClass('invalid');

            var parentDiv = firstName.closest('.input-group');
            var errorSpan = parentDiv.find('.errors');
            errorSpan.show();
        }

        if (lastNameValue === '') {
            lastName.addClass('invalid');

            var parentDiv = lastName.closest('.input-group');
            var errorSpan = parentDiv.find('.errors');
            errorSpan.show();
        }


        /*====================================
            I need to create an object, but it's not working
            so I just commented it out.
            Please fix it
        ======================================*/

		
        var userObject = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            fullName: function () {
                return this.firstName + ' ' + this.lastName;
            },
            state: $('#state').get()
        };
		
		console.log(userObject.fullName());
        console.log(userObject);
		

        


    }





});



/*========================
    Part 2 Writing Functions -  10 points each
====================================*/


/*
    Write a JavaScript function that accepts 
    one input parameter and returns the number 
    of characters in the string.
    //Sample
    var foo = getLength('hello world');
    console.log(foo) // Outputs 11
*/
let input = 'Hello';
function getLength(input) {
    return input.length;
};


console.log('-------------Get Length----------------'); 
var foo = getLength('hello world');
console.log(foo); // Outputs 11
var foo2 = getLength('lorem lorem asldkf asldfkja sdf');
console.log(foo2); // Outputs 31
console.log('-----------------------------'); 



function sumArray(array) {
    let total = 0;
    for (i=0;i<array.length;i++) {
        total += parseInt(array[i]);
    };
    return total;
};

/*
    Write a JavaScript function that computes the sum
    all of the numbers in an array.
    //Sample
    var foo = sumArray([2,5,6]);
    console.log(foo) // Outputs 13
*/


console.log('-------------  SUM ARRAY ----------------'); 
foo = sumArray([2, 5, 6]);
console.log(foo); // Outputs 13

foo = sumArray([2, 5, 6, 2, 5, 6]);
console.log(foo); // Outputs 26

console.log('-----------------------------');



/*
    Write a JavaScript function that converts a decimal
    into a percentage.
    //Sample
    var foo = percentage(.23);
    console.log(foo) //Outputs "23%"
    var foo2 = percentage(.5);
    console.log(foo2) //Outputs "50%"
*/


function percentage(input) {
    return parseFloat(input) * 100 + '%';
};


console.log('------------ Percentage-----------------');

foo = percentage(.23);
console.log(foo) //Outputs "23%"

foo2 = percentage(.5);
console.log(foo2) //Outputs "50%"

console.log('-----------------------------');


/*
    Write a JavaScript function that takes a date and adds a 
    number of days to it.
    //Sample
    var d = new Date('1/1/2001');
    var newD = addDays(d, 10);
    console.log(newD);  //outputs Thu Jan 11 2001 00:00:00 GMT-0600 (Central Standard Time)
*/


function addDays(d,days) {
    var days = parseInt(days);
    d.setDate(d.getDate() + days);
    return d;
};



var d = new Date('1/1/2001');
var newD = addDays(d, 10);
console.log(newD); //outputs Thu Jan 11 2001 00:00:00 GMT-0600 (Central Standard Time)
d = new Date('9/10/2001');
newD = addDays(d, 1000);
console.log(newD); //outputs Thu Jan 11 2001 00:00:00 GMT-0600 (Central Standard Time)



/*
    Challenge - 
    Write a javascript function to take an array of numbers
    and sorts them in ascending order.
    //Sample
    var array1 = [3, 5, 1, 10];
    console.log(sortArray(array1); //outputs [1,3,5,10]
*/

function sortArray(array) {
    return array.sort(function(a, b){return a - b});
};


var array1 = [3, 5, 1, 10];
console.log(sortArray(array1)); //outputs [1,3,5,10]
console.log('I copied this straight from w3, sooo not sure if I deserve any props for this challenge')










































































/*
=====================================================================
    Nothing is broken here... here be dragons
    Go away :)
*/
$(function () {
    $('#btnReset').on('click', function () {
        $('#firstName').val('John');
        $('#lastName').val('Doe');
        $('#state').val('OK');
        $('.errors').hide();
        $('.invalid').removeClass('invalid');
    });
});