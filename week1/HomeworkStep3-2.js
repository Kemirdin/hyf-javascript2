// 2- 3
// Make a function (or functions) that generate a ul with li elements for each book ID in the array
// using a for loop.
'use strict';
// Step 1  new js file and start by declaring an array that contains 10 strings.
const myArry = [
  'Learning Web Design',
  "Don't Make Me Think! ",
  'HTML and CSS: Design and Build Websites',
  'JavaScript & Jquery',
  'The Principles of Beautiful Web Design 3e',
  'Content Strategy for the Web',
  'Design for Hackers',
  'Bulletproof Web Design',
  'A Practical Guide to Designing for the Web',
  'Web Standards Solutions',
];
console.log (myArry);


let myDiv = document.getElementById ('div');

function myBooks() {
    for (let i = 0; i < myArry.length; i++) {
         
        let MyUl = document.createElement('ul');
        let MyLi = document.createElement('li');
        let MyP = document.createElement('p');
        MyUl.appendChild(MyLi);
        MyLi.appendChild(MyP);    
        myDiv.appendChild(MyUl);
        MyP.innerHTML = myArry[i];
    }  

}
myBooks();