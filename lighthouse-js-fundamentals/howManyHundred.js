function howManyHundreds(num){
    if (num < 100){
        return 0;
    }
    // else if (num === 123456){
    //     return 1235;
    // }
    else {
        const howMany = num / 100;
        return howMany; 
    }
}

console.log(howManyHundreds(123456));