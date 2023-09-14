const fibonacci = function(num) {

    if (typeof num === "string") +num;

    if (num < 0) return "OOPS";

    if (num === 1 || num === 2) return 1;

    let oldResult = 1;
    let result = 1;
    let temp = 0
    for (let i = 2; i < num; i++)
    {
        temp = result;
        result += oldResult; 
        oldResult = temp;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
