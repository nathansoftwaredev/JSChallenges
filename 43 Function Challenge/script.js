// Function Challenges

// Challenge 1
const getCelsius = (f) => {
    return (f - 32) * 5 / 9
}
// (f - 32) * 5 / 9

console.log(`The temperature is ${getCelsius(32)} \xB0C`);



// Challenge 2
const arr1 = [1,2,3,4,5]

const minMax = function (arr) {
    const min = Math.min(...arr) //Spread operator takes just the values of the array.
    const max = Math.max(...arr)

    return {min: min, max: max}
}

console.log(minMax(arr1));


// Challenge 3 IIFE
(function (length, width) {
    const area = length * width

    const output = `The area of rectangle with a length of ${length} and a width of ${width} is ${area}.`

    console.log(output);
})(20, 10)
// ()()