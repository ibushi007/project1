import cloneDeep from "lodash/cloneDeep.js";

const original = { prop: { nested: "value" } };
// オブジェクトの複製
const cloned = cloneDeep(original);
console.log(original,cloned);