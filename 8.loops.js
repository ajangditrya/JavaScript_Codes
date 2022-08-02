// printing digits using for loop in JavaScript
// for(let i=0; i<10; i++){
//     console.log(i);
// }
// console.log(i);         //prints undefined because "i" is declared as let, which has scope limit to the for block.

// for(var i=0; i<10; i++){
//     console.log(i);
// }
// console.log(i);         //prints value of i, because it is declared as global scope by var;

// const marks ={
//     Aaditya: 45,
//     Gaurav: 46,
//     Sandeep: 47,
//     Devraj: 49
// }

//console.log(marks);

// for(let i in marks){                                    //for in, loop;
//     console.log("Marks of", i ,"is", marks[i]);
// }

// for(let i of "ajangditrya"){                            //for of, loop, target should be iterative;
//     console.log(i);
// }

// Sum of first n natural numbers using for loop;

// let n=10;
// let sum=0;
// for(let i=1; i<=n; i++){
//     sum+=i;
// }
// console.log(sum);


// printing digits using while loop in JavaScript;

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }
// console.log(i);

// let i=10;
// do{
//     console.log(i);
//     i++;
// }while(i<20)

// let j=10;
// do{
//     console.log(j);
//     j++;
// }while(j<10)


// find factorial of a number;
let num=10;
let ans=1;
for(let i=1; i<=num; i++){
    ans*=i;
}
console.log("Factorial of", num, "is", ans);