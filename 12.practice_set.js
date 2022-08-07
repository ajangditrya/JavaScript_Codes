//1. guess the output;

//console.log("aadi\"".length);

//2. a fxn to convert a string to lowercase;

// function lower(s){
//     return s.toLowerCase();
// }
// s="AADITYA";
// console.log(lower(s));

//3. extract the amount from given string;

// let str ="please give RS. 1000";
// let amount=Number.parseInt(str.slice("please give RS. ".length));           //Number.parseInt() will convert string to an integer;
// console.log(amount);

//4. try to change i'th chracter of a string, and tell me what did u find?

// let a="ajangditrya";
// console.log(a);
// a[4]='U';
// console.log(a);     //this will also print same, because strings are immutable;

//5. try to explore include, startwith, and endwith methods in js;

let pets=["cat", "dog", "snake", "goat"];
console.log(pets.includes("cat"));
console.log(pets.includes("lion"));

let id="aaditya";
console.log(id.startsWith("aadi"));         //only string as input;
console.log(id.startsWith("aadi",0));       //string with position as input;

console.log(id.endsWith("ya"));