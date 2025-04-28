function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
// CommonJSで機能を外部に露出
module.exports = {
  plus,
  minus,
};
