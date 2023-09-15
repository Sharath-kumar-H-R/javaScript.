// primitve data types
// we need not to specify the type of data in js
let myName="Anushree";
console.log(myName + " type of data "+ typeof myName); // typeof is a operator.

// numbers
let num=777;
console.log(num + " "+typeof num);

// boolean
let committed=true;
let notComitted=false;
console.log(committed+" "+ typeof committed + notComitted + " "+typeof notComitted) // returns boolean

// null   a special value that represents an empty or unknown value. 
let isit = null;
console.log(isit+" "+typeof isit); // it returns object*

// undefined
let herName=undefined;
console.log(herName+" "+ typeof herName); 

// ******** Refference data types *********  all are returns object
// arrays
let arr=[9,8,7, 'anu' , 'sharath']
console.log(arr+" "+ typeof arr); // object

// object literals
let studentMarks={
    tom:85,
    jery:90,
    sk:97
}
console.log(studentMarks+" "+ typeof studentMarks); // [object object] bcz multiple objects are there.

// functions
function fun(){
    // currenty we dint provide anything..
}
console.log(fun+" "+ typeof fun); 

// date
let date = new Date;
console.log(date + " "+ typeof date);// prints current date and type is object

    