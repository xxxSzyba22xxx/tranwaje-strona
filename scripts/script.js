function hideCookies() {
var button1 = document.getElementById("confirmButton");


var button2 = document.getElementById("declineButton");

var blockdown1 = document.getElementById("container");
var blockdown2 = document.getElementByClassName("cookies");

button1.addEventListener('click', () => {
   
    blockdown1.style.display = 'none'; 
    blockdown2.style.display = 'none'; 
  });

}