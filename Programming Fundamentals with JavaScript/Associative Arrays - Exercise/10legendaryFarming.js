function legendaryFarming(input){
    
let arr = input.split(" ");

let keyMat = { shadowmourne : 0 , valanyr : 0 , dragonwrath : 0 };

let junkMat = {};

for(let i = 0 ; i < arr.length; i += 2){
    
    let material = arr[i + 1].toLowerCase();

    let quantity = Number(arr[i]);
    
    //console.log(material);
    //console.log(quantity);

    if(material in keyMat){

        keyMat[material] += quantity;

        console.table(keyMat)
    }

}

}

legendaryFarming('3 Valanyr 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
