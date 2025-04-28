const arry = ["配列1", "配列2", "配列3"];
console.log(arry[0]);
console.log(arry[2]);

const obj = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
console.log(obj.x);
console.log(obj.y);

const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

const fnArr = (arry) => {
  console.log("---配列---");
  console.log(`country: ${arry[0]}`);
  console.log(`state: ${arry[1]}`);
  console.log(`city: ${arry[2]}`);
};

const fnObj = (objAddr) => {
  console.log("---オブジェクト---");
  console.log(`country: ${objAddr.country}`);
  console.log(`state: ${objAddr.state}`);
  console.log(`city: ${objAddr.city}`);
};

fnArr(arr);
fnObj(objAddress);
