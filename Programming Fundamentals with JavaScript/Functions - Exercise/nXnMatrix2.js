function nXnMatrix(n){

    let num = line(n);
    let numRow = row(num, n);

    function line(num){

        let line = "";

        for(let i = 0; i<num; i++){
            
            line += num + " ";

        }

        return line
    }


    function row(num, n){

        let row = "";

        for(let i = 0; i<n; i++){

            console.log(num);

        }

    }


    //1 writes num n times on a line
    //2 writes the line n times in a row

}

nXnMatrix(3)
