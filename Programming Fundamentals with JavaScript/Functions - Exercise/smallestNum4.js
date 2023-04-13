function smallestNum(n1,n2,n3){

    let min = smallNum(n1,n2,n3);
    let res = print(min);

    return res

    function smallNum(a,b,c){

        let abc = [];
        

        abc.push(a);
        abc.push(b);
        abc.push(c);

        let minNum = abc[0];


        for(let i = 0; i< abc.length; i++){
            let temp = Number(abc[i]);
            let num = 0;
            

            

            for(let k = i; k< abc.length; k++){
                let tempK = Number(abc[k]);
                
                if(temp > tempK){
                    num = tempK
                }else {
                    num = temp
                }

                if(minNum > num){
                    minNum = num
                } else{
                    minNum = minNum
                }
            }

            
        }

       
        return minNum
    } 

    function print(n){

        return console.log(n)
    }

    //1.find the smallest num
    //2. print the smallest num

}
