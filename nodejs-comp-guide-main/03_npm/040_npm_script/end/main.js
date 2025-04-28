import isOdd from "is-odd";

function isOddJa() {
    const oddy = isOdd(3);
    return oddy ? "奇数" : "偶数";
}

const result = isOddJa();

console.log(result);