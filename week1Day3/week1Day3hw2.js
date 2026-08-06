function launchBrowser(browserName)
{
    if(browserName=="chrome")
        {
        console.log("Its a chrome browser");
        
    }
    else{
        console.log("Its not a chrome browser")
    }
}
 function runTests(test){  //  need to ask whtr it is crt?
    switch(test)
    {
            case "sanity":
console.log("It is a sanity testing")
                break
                case "regression":
console.log("It is a regression testing")
                break
                default:
                    console.log("It is a smoke testing")

    }
} 
launchBrowser("Firefox");
runTests("regression");
