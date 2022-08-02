// Strings in JavaScript;

// let id="Aaditya";           // u can use single quote also, both act same.
// console.log(id);

//Template literal;

// let id1="Aaditya";
// let id2="ajangditrya";

// //let identity=`id1 is id2`;
// //let identity=`id1 "is" id2`;        //you can use double or single quote in template literal;
// let identity=`${id1} "is" ${id2}`;    //you can access variables directly in a string, by using ${variable_name}

// console.log(identity);


//Escape sequence character;

// let id="aadi\rtya";             //{\', \", \n, \t, \r} try these and see what happens;
// console.log(id);

let a="aaditya";
console.log(a.toUpperCase());       //makea all the letters to uppercase,

console.log(a.toLowerCase());       //you know what it prints, haha;

console.log(a.length);

let b="Neha";
//a+=b;             //concatenate two strings;

//console.log(a.trim());              // "  aaditya   " will print as "aaditya";


console.log(b.replace("Neha","NehaG"));     //replace;