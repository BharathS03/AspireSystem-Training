// Title : string.js
// Author : Bharath S
// Created Date : 21-03-2024
// Modified Date : 02-04-2024
// Revieweb By :
// Reviewed Date :


let first_name="Bharath";
let last_name="Javascript";

//Concatenation
let c=first_name+" "+last_name;
console.log("Concatenation : "+c);

//concat
c=first_name.concat(' ',last_name);
console.log("Concat : "+c);

//append
c="Bharath ";
c+="Aspire";
console.log("Append : "+c);


//Length
c=first_name.length;
console.log("Length : "+c);

//Change Case
c=first_name.toUpperCase();
console.log("Uppercase : "+c);
c=first_name.toLowerCase();
console.log("Lowercase : "+c);

c=first_name.indexOf('a');
console.log("indexOf a : "+c);

c=first_name.lastIndexOf('a');
console.log("lastIndexOf a : "+c);

c=first_name.charAt(1); // character at position 1
console.log("charAt 1 : "+c);

c=first_name.charCodeAt(1); // ASCII value of the character at position 1 
console.log("charCodeAt 1 : "+c);

c=first_name.substr(0,3);
console.log("substr : "+c);




//Substring
let text = "Aspire systems";

c=text.substring(0,4)
console.log("Substring : "+c);
c=text.substring(4);
console.log("Substring : "+c);
c=text.substring(4,0);  //It changes default of the highest(start) and lowest(end) valus 
console.log("Substring : "+c);


//Slice
c=text.slice(2,4);
console.log("slice : "+c);
c=text.slice(4,2); //slicing is not interchange itself
console.log("slice : "+c);
c=text.slice(-5)
console.log("slice -5: "+c);

//Split concept
let a="Aspire System";
c=a.split(" ");
console.log("Split : "+c);
console.table(c);

//replace concept
a="Aspires located in Chennai";
console.log("Before Replace : "+a);
c=a.replace('Chennai','Villupuram');
console.log("After Replace : "+c);

//includes (Its finds true or false )
const employee = ['employee_name', 'employee_id', 'phone','salary'];
console.log(employee.includes('employee_name'));
console.log(employee.includes('email'));

//trim (remove unwanted spaces)
a=" Aspire     ";
console.log("Before Trim : "+a.length);
a=a.trim();
console.log("After Trim : "+a.length);

//padStart (adding zeros and symbols)
a="5";
a=a.padStart(4,0);
console.log(a);

a="5";
a=a.padEnd(4,0);
console.log(a);

a="5";
a=a.padEnd(4,'$');
console.log(a);