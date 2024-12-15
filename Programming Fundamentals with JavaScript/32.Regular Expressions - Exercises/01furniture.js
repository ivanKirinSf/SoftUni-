function furniture(input){

 let pattern = /(?<product>[A-Za-z])<<(?<price>[0-9.]+)!(?<quantity>\d+)/g;

 for(let line of input){
    if(input[line] === 'Purchase'){
        break;
    }

    if(pattern.test(line)){

        let product = pattern.exec(line);
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
