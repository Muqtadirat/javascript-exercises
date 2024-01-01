const repeatString = function (string, num) {
  // let repeat = string.repeat(num);
  // const number = Math.floor(Math.random() * 1000)
  if (num >= 0) {
    return (repeat = string.repeat(num));
  } else if (string === "") {
    return ""
  }
  else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
