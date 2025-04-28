import { helloFromSub } from "./sub.js";
import isOdd from "./node_modules/is-odd/index.js";
// const { helloFromSub } = require('./sub.js');
helloFromSub();
const oddy = isOdd(3);
console.log(oddy);