const yargs = require("yargs");

const command = process.argv[2];

// Customize yargs version

yargs.version("1.1.0");

// Create yargs commands

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: () => {
    console.log("Adding a new note!");
  }
});

// add, remove, read, list

console.log(yargs.argv);
