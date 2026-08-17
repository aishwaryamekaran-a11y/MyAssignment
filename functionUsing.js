function userProfile(name) {
    console.log("Hello "+name)
    
}userProfile('Qeagle')

let double=(a)=>{
    console.log(a*a)}
    double(5)


    setTimeout(()=>{
        console.log("This message is delayed by 2 seconds")
    },2000)




function getUserData(callback)
 { setTimeout(function () {
     const user = { name: "John", age: 25 }; 
 callback(user); }, 3000); 
} 
getUserData(function (user) { 
    console.log("User Name:", user.name); 
 console.log("User Age:", user.age); });








/* let myPromise =new Promise((resolve,reject)=>
{
    let i=true;
    if(i){
        resolve("condition satisfied");
    }
    else{
        reject("condition not satisfied");
    }
}
)
myPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{console.log(error);}
) */