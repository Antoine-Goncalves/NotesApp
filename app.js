import { isURL } from "validator";

import getNotes from "./notes.js";

const message = getNotes();
console.log(message);

console.log(isURL("https://coucou.fr"));
