import { renderContact } from "./src/contact.js";
import { renderAbout } from "./src/about.js";

console.log("works");

const app = () => {
  renderAbout();
  renderContact();
};

app();
