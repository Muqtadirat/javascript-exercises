const sumAll = function (x, y) {
  let total = 0;
  
  if (x < 0 || y < 0) {
    total = "ERROR";
  } else if (typeof x != "number" || typeof y != "number") {
    total = "ERROR";
  } else if (y > x) {
    for (let i = x; i <= y; i++) {
      total += i;
    }
  } else if (x > y) {
    for (let i = y; i <= x; i++) {
      total += i;
    }
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
