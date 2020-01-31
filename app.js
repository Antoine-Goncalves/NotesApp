const yargs = require("yargs");

const command = process.argv[2];

// Customize yargs version

yargs.version("1.1.0");

// Create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "String"
    }
  },
  handler: argv => {
    console.log("Adding a new note!", argv);
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
  describe: "List your notes",
  handler: () => {
    console.log("Listing out all note!");
  }
});

// Create read command

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => {
    console.log("Reading a note!");
  }
});

// add, remove, read, list

console.log(yargs.argv);
