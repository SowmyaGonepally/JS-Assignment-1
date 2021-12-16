function add(a,b)   //declaring a function
{
    return a+b;
}

function average(a,b,callback)   //passing function's reference as parameter
{
    let avg=callback(a,b)/2;
    return avg;
}
var result=average(2,6,add);
console.log("The average of 2 and 6 is "+result);