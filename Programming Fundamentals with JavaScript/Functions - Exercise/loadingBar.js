function loadingBar(n){

    let num = Number(n);
    let percent = 0;
    let loadingBar = "";
    let dotsBar = "";
    let dots = 100;

    index = 1;
    while(index<=n){


        if(index % 10 === 0){

            percent += 10;
            loadingBar += "%";
            dots -= 10;

        }

        index++;
    }

    

    index = 1;
    while(index <= dots){
        if(index % 10 === 0){
            dotsBar += ".";
        }

        index++;
    }


    if(percent < 100){
    console.log(`${percent}% [${loadingBar}${dotsBar}]`)
    console.log("Still loading...")
    } else {
        console.log(`${percent}% Complete!`)
    }



    


}

loadingBar(100)
