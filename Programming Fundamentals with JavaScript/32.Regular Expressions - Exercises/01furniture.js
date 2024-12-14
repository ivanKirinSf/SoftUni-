function furniture(input){

    for(let i = 0; i < input.length; i++){

        let str = input[i];

        let pettern = /([>>])(?<name>[A-Z][a-z]+)([<<])(?<price>\d+)([!])(?<quantity>\d+)/g;
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
