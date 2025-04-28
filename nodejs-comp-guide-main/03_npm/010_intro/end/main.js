// import cloneDeep from "lodash/cloneDeep.js";
const cloneDeep = require("lodash/cloneDeep");

const original = { prop: { nested: "value" } };
// オブジェクトの複製
const cloned = cloneDeep(original);

cloned.prop.nested = "new value";

console.log(original, cloned);