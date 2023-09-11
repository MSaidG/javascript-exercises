const removeFromArray = function(arr, ...s) {
    
    for (let i = 0; i < arguments.length-1; i++)
    {
        if (arr.includes(s[i]))
        {
            let index = arr.indexOf(s[i]);
            arr.splice(index, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
