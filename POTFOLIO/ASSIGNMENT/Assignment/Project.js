

function Display() {
    var yourName = prompt("What is your name?");
    // var ageinDays = (2023 - birthYear) * 365;
    var h2 = document.createElement('h2');
    var textAnswer = document.createTextNode('You are so beautiful ' + yourName +' ');
    h2.setAttribute('id', 'Display');
    h2.appendChild(textAnswer);
    document.getElementById("screen").appendChild(h2);
}

 function Delete() {
   document.getElementById('Display').remove()
 }   
