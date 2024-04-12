function wordOccurrences(input){

    let wordOcc = {};

    for(let word of input){

         if(!wordOcc.hasOwnProperty(word)){

            wordOcc[word] = 1;

         }else{

            wordOcc[word] += 1;              

         }

    }

    let sorted = Object.entries(wordOcc).sort((a, b) => b[1] - a[1]);

    sorted.forEach(el => console.log(`${el[0]} -> ${el[1]} times`));
    
    //console.table(sorted)

}
