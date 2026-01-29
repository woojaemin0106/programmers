const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const numbers = input[1].split(' ').map(Number);

let min = numbers[0];
let max = numbers[0];

for (let i = 0; i < n; i++ ){
    if(numbers[i] < min){
        min = numbers[i]
    }
    if(numbers[i]>max){
        max = numbers[i]
    }
}

console.log(min,max)
   