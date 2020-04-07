var data = [
    {principal: 2500, time: 1.8},
    {principal: 1000, time: 5},
    {principal: 3000, time: 1},
    {principal: 2000, time: 3},
]

function interestCalculator(array){
    var interestData = [];
    for(value of array){
        interestData.principal = value.principal;
        interestData.time = value.time;
        if((value.principal >= 2500) && (value.time > 1 && value.time < 3)){
            interestData.rate = 3;
            interestData.interest = (interestData.principal * interestData.rate * interestData.time)/100;
        } else if((value.principal >= 2500) && (value.time >= 3)){
            interestData.rate = 4;
            interestData.interest = (interestData.principal * interestData.rate * interestData.time)/100;
        } else if((value.principal < 2500) || (value.time <= 1)){
            interestData.rate = 2;
            interestData.interest = (interestData.principal * interestData.rate * interestData.time)/100;
        } else{
            interestData.rate = 1;
            interestData.interest = (interestData.principal * interestData.rate * interestData.time)/100;
        }
        interestData.push({principal:interestData.principal, time:interestData.time, rate:interestData.rate, interest:interestData.interest});
    }

    console.log(interestData);
    return interestData;
}


interestCalculator(data);
