// Consider the array: [2, 4, 6, 8, 10]. Find the average (mean) of its elements.

let arr=[2, 4, 6, 8, 10];
let sum=0;

for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}

let avg=sum/5;
console.log(avg);