function furniture(input){

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<num>[0-9.]+)!(?<quantity>\d+)/;

    for(let line of input){
        if(line === "Purchase"){
            break;
        }

        if(pattern.test(line)){
            
        }
    }

}

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
)
