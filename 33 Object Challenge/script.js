// Object Challenge

// Step 1
const library = [
    {
        title: 'Dragon Rider',
        author: 'Nathan',
        status: {own: true, reading: false, read: false}
    },
    {
        title: 'Dragon Rider',
        author: 'Nathan',
        status: {own: true, reading: false, read: false}
    },
    {
        title: 'Dragon Rider',
        author: 'Nathan',
        status: {own: true, reading: false, read: false}
    }
]

// Step 2
library[0].status.read = true
library[1].status.read = true
library[2].status.read = true


// Step 3
// Destructure the title from the first book and rename the variable to firstBook.
const { title: firstBook } = library[0]
console.log(firstBook);


// Step 4
const libraryJSON = JSON.stringify(library)

console.log(libraryJSON);