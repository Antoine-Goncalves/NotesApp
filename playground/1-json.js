const fs = require("fs");
const book = {
    title: "Hello World",
    author: "Antoine Goncalves"
}

const bookJSON = JSON.stringify(book)

fs.writeFileSync("1-json.json", bookJSON)
