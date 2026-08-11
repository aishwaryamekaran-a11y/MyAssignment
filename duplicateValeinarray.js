let arr = [1,2,3,2,4,5,1,4,9,7];
let arr1=[];
for(i=0;i<=arr.length;i++){
    for (j=i+1;j<=arr.length;j++){
        if (arr[i]==arr[j]){
            arr1.push(arr[j])
            }
    }
}
console.log(arr1);
//11.08.26 class assignment