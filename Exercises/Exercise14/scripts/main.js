function reset() {
  getElm('userName').value = "";
  getElm('password').value = "";
  getElm('emailAddress').value = "";
  getElm('timeZone').selectedIndex = "0"
  getElm('error-list').innerHTML = "";



  if (getElm('userName').classList.contains('invalid')) {
    getElm('userName').classList.remove('invalid');
  }
  if (getElm('password').classList.contains('invalid')) {
    getElm('password').classList.remove('invalid');
  }
  if (getElm('emailAddress').classList.contains('invalid')) {
    getElm('emailAddress').classList.remove('invalid');
  }
  if (getElm('timeZone').classList.contains('invalid')) {
    getElm('timeZone').classList.remove('invalid');
  }
  if (getElm('terms').checked) {
    getElm('terms').checked = false;
  }

  getElm('userName').removeEventListener('keyup',update);
  getElm('emailAddress').removeEventListener("keyup", update);
  getElm('password').removeEventListener("keyup",update);
  getElm('timeZone').removeEventListener("change",update);
  getElm('terms').removeEventListener("change",update);

}


function update() {
  //////////////////////Your Code Starts here
  if (getElm('userName').classList.contains('invalid')) {
    getElm('userName').classList.remove('invalid');
  }
  if (getElm('password').classList.contains('invalid')) {
    getElm('password').classList.remove('invalid');
  }
  if (getElm('emailAddress').classList.contains('invalid')) {
    getElm('emailAddress').classList.remove('invalid');
  }
  if (getElm('timeZone').classList.contains('invalid')) {
    getElm('timeZone').classList.remove('invalid');
  }


  getElm('error-list').innerHTML = "";
  var userName = getValue('userName');
  var emailAddress = getValue('emailAddress');
  var password = getValue('password');
  var timeZone = getValue('timeZone');
  var messages = [];
  console.log(timeZone);

  //User Name
  if (userName === "") {
    getElm('userName').classList.add('invalid');
    messages.push("Last Name is required");
  }

  // Email
  var emailPattern = new RegExp("@");
  if (!emailPattern.test(emailAddress)) {
    getElm('emailAddress').classList.add('invalid');
    messages.push("A valid email address is required");
  }

  // Password
  if (password === "") {
    getElm('password').classList.add('invalid');
    messages.push("Password is required");
  }

  // Timezone
  if (timeZone === "0") {
    getElm('timeZone').classList.add('invalid');
    messages.push("Please select a time zone");
  }

  // Terms
  if (!getElm('terms').checked) {
    messages.push("You must accept the terms and conditions");
  }


  if (messages == "") {
    alert('Success, was that so hard?!')
  }

  for (i = 0; i < messages.length; i++) {
    getElm('error-list').innerHTML += messages[i] + "<br>";
  }

  getElm('userName').addEventListener('keyup',update);
  getElm('emailAddress').addEventListener("keyup", update);
  getElm('password').addEventListener("keyup",update);
  getElm('timeZone').addEventListener("change",update);
  getElm('terms').addEventListener("change",update);
}


////
var btn = document.getElementById('btnUpdate');
var btnReset = document.getElementById('btnReset');
btn.addEventListener('click', update);
btnReset.addEventListener('click', reset);


function getValue(id) {
  return getElm(id).value;
}

function getElm(id) {
  return document.getElementById(id);
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
