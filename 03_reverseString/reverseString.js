const reverseString = function(phrase) {

    if(typeof(phrase) != 'string'){
        return 'ERROR';
    }

    stringArr = phrase.split("");
    let swap = '';

    let j = stringArr.length-1;
    for(let i = 0; i < stringArr.length; i++){
    
        if(i === j) break;

        swap = stringArr[i];
        stringArr[i] = stringArr[j];
        stringArr[j] = swap;

        j--;

    }

    let reversed = '';
    
    for(let i = 0; i < stringArr.length; i++){
        reversed += stringArr[i];
    }

    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
