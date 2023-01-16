const removeFromArray = function(arr, ...args) {
    let ind;
    for (const arg of args)
    {
        ind = arr.indexOf(arg);
        if (ind <0) continue;
        arr.splice(ind,1);
    }
    return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
