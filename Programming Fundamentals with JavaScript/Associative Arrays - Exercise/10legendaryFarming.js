function legendaryFarming(input){
    
let arr = input.split();

let keyMat = {shards : 0, fragments : 0, motes : 0 };

let junkMat = {};

let legendaries = { shards : "Shadowmourne", fragments : "Valanyr", motes : "Dragonwrath" }

for(let i = 0; i< arr.length; i+=2){

  let mat = arr[i].toLowerCase();
  
  let quantity = Number(arr[i-1]);

  if(mat in keyMat){
     
    keyMat[mat] += quantity;

    if(keyMat[mat] >= 250){

        let legendary = legendaries[mat];

        keyMat[mat] -= 250;

       console.log(`${legendary} obtained!`);
       break;
    }

  }

  if(mat in junkMat){

    junkMat[mat] += quantity;
  }else{

    junkMat[mat] = quantity;

  }

}

let keyMatEntries =Object.entries(keyMat).sort(((a,b)=> b[1] - a[1]) || (a,b) => a[0].localeCompare(b[0]));
let junkMatEntries = Object.entries(junkMat).sort((a,b)=> a[0].localeCompare(b[0]));

for(let [material, quant] in keyMatEntries){
    console.log(`${material} : ${quant}`)
}

for(let [materja, quant] in junkMatEntries){
    console.log(`${material} : ${quant}`);
}

}

legendaryFarming( '3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
