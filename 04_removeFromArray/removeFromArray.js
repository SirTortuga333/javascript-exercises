const removeFromArray = function(array) {

    if(!Array.isArray(array)) return 'ERROR';

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < arguments.length; j++){

            if(array[i] === arguments[j]){
                if(i < array.length-1){
                    array = array.copyWithin(i, i+1);
                }
                array.pop();

                i--;
            }

        }
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
