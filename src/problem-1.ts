// problem-1
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray(numbers: number[]): number {

    return numbers.reduce((value, curr) => value + curr, 0)
}

sumArray([1, 2, 3, 4, 5])
// const totalNumber = sumArray([1, 2, 3, 4, 5])
// console.log(totalNumber);