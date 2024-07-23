const repeatString = function(string, num) {

    if(typeof(string) != 'string' || typeof(num) != 'number' || num < 0){
        return 'ERROR';
    }

    let result = '';
    
    for(let i = 0; i < num; i++){
        result += string;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
