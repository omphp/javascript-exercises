const reverseString = function(str) {
    const strArr = str.split("");
    let rStr = "";
    for (let i = (strArr.length - 1); i >= 0; i--)
    {
        rStr += strArr[i]
    }
    return rStr
};

// Do not edit below this line
module.exports = reverseString;
