function wordOcc(input){

    let words =  {};
    
    for(let el of input){

        let word = el;

        if(!words.hasOwnProperty(word)){

            words[word] = 1;

        }else{

            words[word] += 1;

        }
    }

    let entriesWords = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for(let el of entriesWords){

       console.log(`${el[0]} -> ${el[1]} times`);         

    }

}

wordOcc([

    "Here", "is", "the", "first",
    "sentence", "Here", "is", "another",
    "sentence", "And", "finally", "the",
    "third", "sentence"

])
