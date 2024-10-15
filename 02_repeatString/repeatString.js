const repeatString = function(word, num) {
    if(num < 0){
        return "ERROR";
    }
    let temp = "";
    for(i = 0; i < num;i++){
        temp += word;
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
