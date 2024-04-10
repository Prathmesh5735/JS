// Determine the minimum element in the array: [9, 14, 3, 27, 6].

let arr=[9, 14, 3, 27, 6];
let min=Infinity;

for(let i=0; i<arr.length;i++){
    if(min>arr[i]){
        min=arr[i];
    }
}

console.log(min);