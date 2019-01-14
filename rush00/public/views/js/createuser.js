
function createuser() {

  var passA = document.getElementById("password").value;
  var passB = document.getElementById("re-password").value;

  if (passA === passB)
    console.log("Passwords are equal");
/*
  const xhr = new XMLHttpRequest();
  xhr.onload = function (){
    const serverResponse = document.getElementById("submit");
    serverResponse.innerHTML = this.responseText;
  }

  xhr.open("POST", "server.js");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  var toSend = "pass=" + passA + "passb=" + passB;
  xhr.send(toSend, filename);
  */
  console.log("pass a: " + passA + "\npass b: " + passB);

}
