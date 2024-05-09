function wordsTracker(input){

    let list = {};

    let startingWords = input.shift().split(" ");
    
    //console.log(startingWords)

    for(let word of startingWords){

        list[word] = 0;

        for(let text of input){

            if(word === text){

                list[word] += 1;                               

            }

        }
    }

    //console.table(list)

    let entries = Object.entries(list);

    let sorted = entries.sort((a, b) => b[1] - a[1]);

    for(let [key, value] of sorted){

        console.log(`${key} - ${value}`);

    }

    ///console.table(`${}`)

}

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )
