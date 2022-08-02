// a function to find the avg of three numbers;

const avg=(a,b,c)=>{           //arrow fxn, use this syntax to create fxns. remeber const keyword is being used.
    return (a+b+c)/3;
}


function avg2(a,b,c){           //normal fxn, remember function keyword is being used.
    return (a+b+c)/3;
}

let a=1,b=2,c=3;
console.log("Avg of your input is", avg2(a,b,c));