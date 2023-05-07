const removeFromArray = function(array, ...toRemove) {
    let newArray = [];

    /* 
        forEach iterates through each value of the array,
        and acts upon said value with a function (a callbackFn.)

        The callbackFn in this solution is an arrow function that
        determines whether, or not the current iterated value is
        part of the toRemove rest paramter.

            If it is, do not push the value into the new array
            Else, push
    */
    array.forEach((value) => {
        if (!toRemove.includes(value)) {
            newArray.push(value);
        }
    });
    return newArray;

    /*
        Using the filter method
            Filter method removes specific values that satisfy the input arguments.
            It is also an iterative function, and also uses a callbackFn to 
            properly filter the array.

        The callbackFn here checks each value of array using the 'value' variable,
        and 
        
        Values that are falsy do not get to be part of the filtered array. Therefore,
        the callbackFn checks each val of array using var 'value' by determining 
        whether or not it is part of the rest parameter, (w/c is also an array,) 
        toRemove.

        return array.filter(value =>
            !toRemove.includes(value)  
        );
    */
};

// Do not edit below this line
module.exports = removeFromArray;
