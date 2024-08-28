function legendaryFarming(input){
    
let arr = input.split(" ");

let keyMat = { shards : 0, fragments : 0, dragonwrath : 0 };
let junkMat = {};

let legendaries = { shards : "Shadowmourne", fragments : "valanyr", motes : "Dragonwrath" }

for(let i = 0; i < arr.length; i+=2){

    let quantity = Number(arr[i]);
    let mat = arr[i+1].toLowerCase();

    if(mat in keyMat){

        keyMat[mat] += quantity;

        if(keyMat[mat] >= 250){
            legendaries = legendaries[mat];
            keyMat[mat] -= 250;
            console.log(`${legendaries} obtained!`);
            break;
        }
    }

    if(mat in junkMat){
        junkMat[mat] += quantity;
    }else{

        junkMat[mat] = quantity;        
    }

    //console.table(junkMat)

    let sortedKeyMat = Object.entries(keyMat).sort((a,b) => b[1] - a[1] || a.localeCompare(b));
    let sortedJunkMat = Object.entries(junkMat).sort((a,b) => a.localeCompare(b));

    console.table(sortedJunkMat)

}


}

legendaryFarming( '3 Valanyr 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'
    //'3 Valanyr 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'
    )
