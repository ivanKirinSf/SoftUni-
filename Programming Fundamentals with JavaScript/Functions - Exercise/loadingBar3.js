function loadingBar(n){

    //1. divide n
    //2. find the amount of percents and dots
    //3. loading bar

    let num = divide(n);
    let symbols = char(num);
    let res = print(symbols, num);

    console.log(res) 

    function divide(a){
        let temp = a/10;

        //console.log(temp)
        return temp;
    }

    function char(a){
        let bar = "";
        let dots = 10-a;

        index = 1;
        while(index <= a){

            bar+= "%";

            index++;

        }

        index = 1;
        while(index<=dots){

            bar+= ".";

            index++;

        }

        //console.log(bar)
        return bar
    }

    function print(string, n){

        if(n < 10){
            return(`${n}0% [${string}]` + "\n" + "Still loading...")
        }else {
            return("100% Complete!" + "\n" + "[%%%%%%%%%%]")
        }

        

    }

    


}

loadingBar(100)
