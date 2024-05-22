console.log("hi");

// declaring variables

let myName = "ayman" ;

const myRollnumber = 90 ;
var myId = 910 ;

//console.log(myId);

// string literals

//console.log(`My full name is ${myName} Quadri`);


//DataTypes
let myFirstName = "ayman" ; //string
var mynewId = 910 ; //integer

let myArray = [1 , 2, 3, 4 , 5 , "hi"];
// .push 
// .pop 
//console.log(myArray.indexOf(2));

let myObject = { stuff1 : 100 , stuff2 : 200 , stuff3 : "hello there" };

//console.log(myObject['stuff3']);



//arithmetic operators (+ , - , * , / , %)

let sum = 15 % 10 ; 
//console.log(sum);

// == , === 


//console.log(a===b);



//Logical operators ( &&  , || )
let a = true ;
let b = false ;

//console.log(a || b);


//conditional statements ( if , else , else if , switch )
let myage = 14;
let graduated = true;

// let week = ["sunday" , ... , "saturday"];

// if(myage > 18){
//     console.log("you are eligible to vote ! ");
// }
// else if (graduated){
//     console.log("you have graduated !");
// }
// else{

// }


//Dom Manipulation 

const mainHeader = document.querySelector('h1');
const header2 = document.getElementById('myheader2');

// console.log(mainHeader);
mainHeader.textContent  = "WELCOME";

console.log(header2);
header2.textContent  = "WELCOME BACK";

