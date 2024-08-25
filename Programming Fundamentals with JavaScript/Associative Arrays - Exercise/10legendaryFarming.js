function legendaryFarming(input){
    
let arr = input.split(" ");

let keyMat = { shards : 0, fragments : 0, motes : 0 }

let legendaries = { shards : "Shadowmourne", fragments : "Valanyr", motes : "Dragonwrath" }

for(let i = 0; i < arr.length; i+=2){

    let mat = arr[i+1].toLowerCase();

    let quantity = Number(arr[i]);

    if(mat in keyMat){

        keyMat[mat] += quantity;

        if(keyMat[mat] >= 250){

            let legendary = legendaries[mat];
            console.log(`${legendary} obtained!`);
            keyMat[mat] -= 250;
            break;
        }
    }

    console.log(quantity);

}

}

legendaryFarming('3 Valanyr 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
