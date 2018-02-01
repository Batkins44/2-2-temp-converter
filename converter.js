function toCelsius (f) {
c = +(((f-32)/1.8).toFixed(2));
console.log(c);
}

function toFahrenheit (c) {
f = +(((c*1.8)+32).toFixed(2));
console.log(f);
}

function clearText (){
  userInput();
  placement.innerHTML = "";
  temp = 0;
  document.getElementById("temp-input").value = '';

  
}
function userInput (){
  return document.getElementById("temp-input").value
}

function enterFunc(){
  if (event.which == 13 || event.keyCode == 13){
    determineConverter();
  }
}
// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

var placement = document.getElementById("new-temp")
var clear = document.getElementById("clear-btn")

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
    if(document.getElementById('cel-to-fahr').checked) {
        var temp = userInput();
        console.log(temp);
        toFahrenheit(temp);
        placement.innerHTML = `<font color="green"><b>${f}</b></font> fahrenheit`;
        if(f > 90){
          placement.innerHTML = `<font color="red"><b>${f}</b></font> fahrenheit`;
        }
        if(f < 32){
          placement.innerHTML = `<font color="blue"><b>${f}</b></font> fahrenheit`;
        }
      }


      else if(document.getElementById('fahr-to-cel').checked) {
        var temp = userInput();
        toCelsius(temp);
        placement.innerHTML = `<font color="green"><b>${c}</b></font> celsius`;
        if(c > 32){
          placement.innerHTML = `<font color="red"><b>${c}</b></font> celsius`;
        }
        if(c < 0){
          placement.innerHTML = `<font color="blue"><b>${c}</b></font> celsius`;
        };
  console.log("event", clickEvent);
}
}
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
clear.addEventListener("click", clearText);
addEventListener("keypress", enterFunc);
