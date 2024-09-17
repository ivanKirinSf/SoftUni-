function countStringOccurrences(txt, word){

let arr = txt.split(" ");

let times = 0;

for(let i = 0; i < arr.length; i++){

    if(arr[i] === word){
        times ++;
    }
}

console.log(times)

}

countStringOccurrences('This is a word and it also is a sentence',
'is')
