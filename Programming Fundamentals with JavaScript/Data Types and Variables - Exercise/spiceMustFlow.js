function spiceMustFlow(yeild){

    let days = 0;
    let dailyYeild = yeild;
    let storage = 0;
    
    
    index =0;
    while(dailyYeild >= 100){
        days ++;
        storage += dailyYeild;
        storage -= 26;
        dailyYeild-=10;


        index++;

    }

    

    if(dailyYeild<100 && storage>26){
        storage = storage - 26;
    }

    console.log(days);
    console.log(storage);



}


spiceMustFlow(450)
