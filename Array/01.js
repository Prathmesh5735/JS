// Given an array of integers: [3, 7, 12, 5, 9], calculate the sum of all elements.

let arr=[3, 7, 12, 5, 9];
let sum=0;

for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}

console.log(sum);