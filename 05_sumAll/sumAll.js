const sumAll = function() {
    let sum=0;
    if (typeof(arguments[0])!="number" || typeof(arguments[1])!="number" || arguments[0]<0 || arguments[1]<0 || arguments[0]%1!=0 || arguments[1]%1!=0){
        return "ERROR";
    }
    else if(arguments[0]<arguments[1]){
        for(let num=arguments[0]; num<=arguments[1]; num++){
            sum+=num;
        }
        return sum;
    }
    else if(arguments[0]===arguments[1]){
        return arguments[0];
    }
    else{
        for(let num=arguments[0]; num>=arguments[1]; num--){
            sum+=num;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
