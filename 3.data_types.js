//Primitive data types in Js - nn bb ss u;
//null, number, boolean, bigint, string, symbol, undefined;

let a=null;
let b=34;
let c=true;
let d=BigInt(123)+BigInt(7);
let e="ajangditrya";
let f=Symbol("I am a symbol");
let g;

console.log(a,b,c,d,e,f,g);
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);

//here comes a bug, typeof "a" prints "object";

//object - Non primitive data type; //used to map key-values;
const item ={
    "name": "aadi",
    "one" : 1,
    2: "two"
}

console.log(item["name"]);