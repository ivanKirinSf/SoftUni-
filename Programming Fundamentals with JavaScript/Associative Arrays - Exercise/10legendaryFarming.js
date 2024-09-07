function legendaryFarming(input){

let arr = input.split(" ");

let keyMat = { shards : 0, fragments : 0, motes : 0};

let legendaries = { shards : "Shadowmourne" , fragments : "Valanyr" , motes : "Dragonwrath" };

let junkMat = {};

for(let i = 0; i < arr.length; i+=2){

    let materials = arr[i+1].toLowerCase();

    let quantity = Number(arr[i]);

    if(materials in keyMat){

        keyMat[materials] += quantity;

        if(keyMat[materials] >= 250){


            let legendary = legendaries[materials];

            keyMat[materials] -= 250;

            console.log(`${legendary} obtained!`);

            break;
            
        }        
        
    }else {

        if(materials in junkMat){

            junkMat[materials] += quantity;
    
        }else{
    
            junkMat[materials] = quantity;
    
        }
    }    

}

let entriesKeyMat = Object.entries(keyMat).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));

let entriesJunkMat = Object.entries(junkMat).sort((a,b) => a[0].localeCompare(b[0]));

for( let [matKey, quant] of entriesKeyMat){

    console.log(`${matKey}: ${quant}`)
}

//console.table(entriesJunkMat)

for( let [matJunk, quant] of entriesJunkMat){

    console.log(`${matJunk}: ${quant}`)
}

}


legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')
