function addAndSubtract(n1,n2,n3){

    let number = sum(n1,n2);

    let res = sub(number, n3);

    console.log(res) 




    function sum(a,b){
        let sum = a + b;
        return sum;
    }

    function sub(a,b){
        let subtract = a-b;
        return subtract;
    }

}
