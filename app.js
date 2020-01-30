const yargs = require("yargs");

const command = process.argv[2];

// Customize yargs version

yargs.version("1.1.0");

// Create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: () => {
    console.log("Adding a new note!");
  }
});

// Create remove command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing the note!");
  }
});

// Create list command

yargs.command({
  command: "list",
  describe: "List note",
  handler: () => {
    console.log("List the notes!");
  }
});

// add, remove, read, list

console.log(yargs.argv);
