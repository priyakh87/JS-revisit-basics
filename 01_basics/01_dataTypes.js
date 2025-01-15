"use strict";//treat all JS code as newer version


let nbr=2;//if this value is converted to Number then its value is not a number (NaN)
console.log(nbr);
let binaryNbr=0B11111;

console.log(binaryNbr);
let userName="priya";
console.log(userName);

let userDob;
console.log(userDob);

let userAddress=null;
console.log(userAddress);

console.log(typeof nbr, typeof userAddress, typeof userDob);

// type conversions

let valueInNumber=Number(nbr);
console.log(valueInNumber, typeof valueInNumber);

let valueInString=String(nbr);
console.log(valueInString , typeof valueInString);

let valueInSymbol=Symbol(nbr);
console.log(valueInSymbol , typeof valueInSymbol);


let valueInObject=Object(nbr);
console.log(valueInObject , typeof valueInObject);


