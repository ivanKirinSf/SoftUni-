function wordOccurrences(input){

    let map = new Map();
    //let updated = [];

    for(let el of input){
        let temp = el;
        //console.log(el);
        let key = el;

        if(map.hasOwnProperty(key)){
            let count = Number(map[key]);
            count += 1;
            map[key] = count;

        }else{
            map[key] = 1;
        }
        
    }

    let sorted = Object.values(map).sort((a, b) => a.localeCompare(b))//.reversed();

    console.table(sorted)

}

wordOccurrences(["Here", 
"is", "the", "first",
 "sentence", "Here", "is",
"another", "sentence", 
"And", "finally", "the",
"third", "sentence"
])
