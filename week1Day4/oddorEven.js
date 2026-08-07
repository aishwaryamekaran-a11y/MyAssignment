function isOddOrEven(i)
{
    i=i%2;
if(i==1)
{
    console.log("it is an odd number");
}
else if (i==0){
console.log("it is an even number");
}
else
{
console.log("the given number is neither odd nor even number it is a negative number");
}



/* if(i>0)
    {
if(i%2==0)
{
    console.log("the given number "+ i +" is a even number");
}
else //if(i%2!=0)
{
    console.log("the given number "+ i +" is a odd number");
}
}
else{
    console.log("the given number is neither odd nor even number");
} */



/* 
switch (i>0) {
    case (i%2==0):
        console.log("the given number "+ i +" is a even number");
        break;
        case (i%2!=0):
        console.log("the given number "+ i +" is a odd number");
        break;

    default:
        console.log("the given number"+ i +"is zero");
        break;
} */

}
isOddOrEven(-1);