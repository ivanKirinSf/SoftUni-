function smallestNum(a, b, c){

    let smallest = comparison(a,b,c);
    let res = print(smallest)

    function comparison(n1,n2,n3){
        let minNum = n1;
        
        if(minNum > n2){
            minNum = n2;
        }

        if(minNum > n3){
            minNum = n3;
        }

        return (minNum) 
    }

    function print(a){
        console.log(a)
    }

    

}
