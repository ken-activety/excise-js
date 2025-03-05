// function calculateSum(a, b) {
//     return a + b;
// }
// console.log(calculateSum(15, 25)); // Outputs: 40
// console.log(calculateSum(2.5, 3.7));

// function calculateAverage(numbers) {
//     let total = 0; 
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i]; 
//     }
//     return total / numbers.length;
// }

// let exampleGrades = [15, 18, 12, 20]; 
// let average = calculateAverage(exampleGrades); 
// console.log("The average of the grades is: " + average); 

function calculateAverage(numbers) {
    let total = 0; 
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]; 
    }
    return total / numbers.length; 
}

let exampleGrades = [15, 18, 12, 20]; 
let average = calculateAverage(exampleGrades); 
console.log("The average of the grades is: " + average);

