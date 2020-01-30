const yargs = require("yargs");

const command = process.argv[2];

// Customize yargs version

yargs.version("1.1.0");

// Create yargs commands

yargs.command({});

// add, remove, read, list

console.log(process.argv);
console.log(yargs.argv);
