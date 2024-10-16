const removeFromArray = function(arr, ...rest) {
    let args = rest;
    let finalArr = arr;
    let arrLen = finalArr.length;
    for(let i = 0; i < rest.length;i++){
        let temp = arrLen;
        while(temp > 0){
            if(finalArr.includes(rest[i])){
                let index = finalArr.findLastIndex(x => x === rest[i]);
                finalArr.splice(index,1);
            }
            temp--;
        }
    }
    return finalArr;
}; 

// Do not edit below this line
module.exports = removeFromArray;
