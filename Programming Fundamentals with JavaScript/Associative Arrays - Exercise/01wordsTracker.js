function wordsTracker(input){

  let words = input.shift().split(" ");

  let list = {};

  for(let word of words){

    let el = word;

    list[el] = 0;

       for(let i = 0; i< input.length; i++){

            let temp = input[i];

            if(word === temp){

                list[el] += 1              

            }
       }
  }

  let sorted = Object.entries(list)

  sorted.sorted((a,b) => a[key] - b[key])

  //console.table(sorted)

  for(let item in sorted){

    //let entries = Object.entries(item)

    console.log(`${item} - ${sorted[item]}`)

  }

}

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])
