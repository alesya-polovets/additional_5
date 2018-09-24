module.exports = function check(str, bracketsConfig) {
  // your solution
    const openBrackets = [];
    const closeBrackets = [];
    const arr = [];
    for (let i = 0, length = str.length; i < length; i++) {
        arr.push(str[i]);
    }
    if (arr.length % 2 !== 0) {
        return false;
    }
    for (let i = 0, length = bracketsConfig.length; i < length; i++) {
        openBrackets.push(bracketsConfig[i][0]);
        closeBrackets.push(bracketsConfig[i][1]);
    }
    for (let i = arr.length - 1; i >= 0; i--) {
            for (let j = 0, length = openBrackets.length; j < length; j++) {
                if (arr[i] === openBrackets[j] && arr[i + 1] === closeBrackets[j]) {
                    arr.splice(i, 2);
                }
            }
    }
    return (arr.length === 0);
};