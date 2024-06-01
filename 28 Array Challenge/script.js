// Array Challenges

// Challenge 1 
const arr = [1,2,3,4,5]

arr.push(6)
arr.unshift(0)
arr.reverse()

// Can't chain these methods because .push returns a number and unshift can't be ran on that.
// arr.push(6).unshift(0).reverse() 

console.log(arr);


// Challenge 2
const arr1 = [1,2,3,4,5]
const arr2 = [5,6,7,8,9,10]

// Solution 1 
const arr3 = arr1.slice(0, 4).concat(arr2)

console.log(arr3);

// Solution 2
arr1.pop(4)
const arr4 = [...arr1, ...arr2]

console.log(arr4);