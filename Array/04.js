// Find the maximum element in the array: [17, 42, 8, 35, 21].

let arr=[17, 42, 8, 35, 21];
let max=-Infinity;

for(let i=0; i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}

console.log(max);