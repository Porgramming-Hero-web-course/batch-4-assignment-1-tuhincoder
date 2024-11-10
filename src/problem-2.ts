// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

{
    //


    const removeDuplicates = (numbers: number[]): number[] => {

        const removeDuplicatesNewArray = numbers.filter((value, index) => numbers.indexOf(value) === index);
        return removeDuplicatesNewArray;

    }

    // removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    const arrayOutput = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log(arrayOutput);





    //
}