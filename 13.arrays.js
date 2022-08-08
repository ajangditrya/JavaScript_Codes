//Arrays in JavaScript;

let id=[1,2,3,"aadi","neha"];               //declaring an array; //data type can be anything;
//console.log(id);
// for(let i=0; i<id.length; i++){          //printing an array using for loop
//     console.log(id[i], typeof id[i]);
// }


// id[0]=0;
// console.log(id);        //arrays can be changed, they are mutable;

//Array methods;
//1. converts array into a string;

// let a=id.toString();
// console.log(a);

//2. joins all elements using a separator;

// let a=id.join("_");
// console.log(a);

//3. pop the last element from array and returns the value;

// let a=id.pop();
// console.log(a,id);

//4. pust an element to array and return the length;

// let a=id.push("nehaG");
// console.log(a,id);

//5. remove first elements and return it;

// let a=id.shift();
// console.log(a,id);

//6. adds element at start and return the length;

let a=id.unshift(0);
console.log(a,id);