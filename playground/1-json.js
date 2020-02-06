const fs = require("fs");
const book = {
    title: "Hello World",
    author: "Antoine Goncalves"
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)
