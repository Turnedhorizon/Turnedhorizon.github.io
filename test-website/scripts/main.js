var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/th.jfif') {
        myImage.setAttribute ('src','images/family.jpg');
        
    }else{
        myImage.setAttribute ('src','images/th.jfif');
    }
}
 var myButton = document.querySelector('button');
 var myHeading = document.querySelector('h1');
 function setUserName() {
     var myName = prompt('Please enter your name.');
     localStorage.setItem('name', myName);
     myHeading.textContent = 'My Family is cool, ' + myName;
 }
 if(!localStorage.getItem('name')) {
     setUserName();
 } else{
     var storedName = localStorage.getItem('name');
     myHeading.textContent = 'My Family is cool, ' + storedName;
 }
 myButton.onclick = function() {
     setUserName();
 }