function wordsTracker(input){

    let res = {};

    let words = input.shift().split(" ");

    let str = input//.split(" ");

    for(let word of words){

        for(let i = 0; i< str.length; i++){

            let temp = str[i];

            if(temp === word){

                res.word = word;

                if(res[word] > 1){

                    res[word] += 1;
                }else{

                    res[word] = 1;

                }                
            }
        }

    }

    

    //console.log(str);

}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])
