function loadingBar(n){


    let symbolsNum = check(n);
    let bars = symbols(symbolsNum);
    let dots = loadingBarDots(bars);
    let res = loadingBar(symbolsNum ,bars, dots);

    return res;


    function check(a){
        let temp = Number(a)
        let num = 0;
        if(temp % 10 === 0){
            num = temp / 10;
        }

        return num
    }

    function symbols(n){
        let symbols = [];
        
        
        index = 1;
        while(index <= n){

            symbols.push("%") ;
            
        index ++
        }

        
        return symbols;
    }

    function loadingBarDots(text){
        let num = text.length;
        let dotsNum = 10 - num;
        let dots = ""

        for(let i = 0; i< dotsNum; i++){

            dots += "."

        }

        return dots;
    }

    function loadingBar(a,b,c){
        
        let text = `${a}0% [${b.join("")}${c}]`;
        let text2 = "Still loading...";
        let text3 = "100% Complete!";
        let text4 = `[${b.join("")}]`;

        if(a === 10){
            return console.log(text3 + "\n" + text4);
        }else{
            return console.log(text + "\n" + text2);
            

        }

    }



    //1. check how many symbols will have
    //2. create a loadingBar with the symbols 

}

loadingBar(100)
