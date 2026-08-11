function palindrome()
{
    let value="malayalam"
    let reverse=""
    let character =value.split("")
    for(i=character.length-1;i>=0;i--){
        reverse=reverse.concat(character[i])
    }
if (reverse==value){
    console.log("The given value "+value+" is a palindrome")
}
else
    console.log("The given value "+value+" is not a palindrome")
    }
palindrome()
//10.08.26 home assignment