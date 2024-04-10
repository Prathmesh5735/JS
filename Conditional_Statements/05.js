// Description: Develop a JavaScript program that calculates the sum of digits of a given integer.

let num=12345;
let str=num.toString();

let sum=0;
for(let i=0;i<str.length;i++){
    sum=sum+Number(str[i]);
}
console.log(sum);