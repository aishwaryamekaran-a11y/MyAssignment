//let score=30;
function studentScore(score)
{
    console.log(score)
switch(score!=0) // need to ask this too
{
    case (score>=80):
    console.log("distiction")
    break
    case (score<80||score>=60):
    console.log("First class")
    break 
    default:
    console.log("second class")
}
}
studentScore(55);