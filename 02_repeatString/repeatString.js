const repeatString = function(word, rep) {
    let finalWord=word;
    if(rep===0){
        return "";
    }
    else if(rep<0){
        return "ERROR";
    }
    for(let i=1; i<rep; i++){
        finalWord+=word;
    }
    return finalWord;

};

// Do not edit below this line
module.exports = repeatString;
