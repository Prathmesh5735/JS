// If you have an array with elements [5, 10, 15, 20, 25], calculate the product of all elements.

let array = [5, 10, 15, 20, 25];
let product = 1;

for (let i = 0; i < array.length; i++) {
    product *= array[i];
}

console.log("Product of all elements:", product);