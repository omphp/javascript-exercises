const palindromes = function (words) {
    const reverse = words.split("").reverse().join("").replace(/[^a-zA-Z]+/g, "").toLowerCase();
    console.log(reverse)
    return reverse === words.replace(/[^a-zA-Z]+/g, "").toLowerCase();

};
//console.log(palindromes("racecar!"))
// Do not edit below this line
module.exports = palindromes;
