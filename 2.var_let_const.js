// Understanding about var, let, const;

var a=5;
console.log(a);

var a="ajangditrya";  //also u do not need to rewrite var here, it will do the same without it;
console.log(a);

let c=6;
console.log(c);

{
    let c=7;    //in a block, u can write let again to reinitialize c, but u can not do it, outside of a block;
    console.log(c);
}

//let c=8;      //This line will throw an error.
console.log(c);

let d;
d=5;
console.log(d);

const e="ajangditrya";  //u can not left const without initialization;
console.log(e);