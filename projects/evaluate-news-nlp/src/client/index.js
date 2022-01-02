import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

console.log(checkForName);

// const dotenv = require("dotenv");
// dotenv.config();
console.log(`YOUR API KEY IS    ${process.env.API_KEY}`);

console.log("CHANGE!!");

export { checkForName, handleSubmit };
