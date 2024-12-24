function solve(input){

    let regex = />>(?<product>[A-Z]+[A-Z][a-z]+)<<(?<price>\d+)!(?<quantity>d\+)/g;

    for(let line of input){

        if(line === "Purchase"){
            break;
        }

        if(regex.test(line)){

            
        }
    }


}

solve(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])
