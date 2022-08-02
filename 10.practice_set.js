//1. write a program to print marks of students in an object;

const obj={
    "Harry": 80,
    "Aaditya": 100,
    "Sumati": 105               //she is cute, out of my scope. lol
}

// for(let i=0; i<Object.keys(obj).length; i++)                            //without for in loop.
// {
//     console.log("Marks of", Object.keys(obj)[i], "is", obj[Object.keys(obj)[i]]);
// }

// for(let i in obj){                                                       //with for in loop.                 
//     console.log("Marks of", i, "is", obj[i]);
// }


//2. write a program to print "Try again!", until the user input a correct number.

// let a=123;
// while(a!=123)
// {
//     console.log("Try again!");
// }


//3. write a function to find the mean of five numbers.

// const mean=(a,b,c,d,e)=>{
//     return (a+b+c+d+e)/5;
// }

// let ans=mean(1,2,3,4,5);            //prompt isn't working, so i'm defining the values;
// console.log(ans);