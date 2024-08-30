function legendaryFarming(input){
    
let arr = input.split(" ");

let keyMat = { Shards : 0, Fragments : 0, Motes : 0};

let junkMat = {};

let legendaries =  {shards : "Shadowmourne", fragments : "Valanyr", Motes : "Dragonwrath" };

for (let i = 0 ; i < arr.length; i+=2){

    let mat = arr[i].toLowerCase();

    let quantity = Number(arr[i-1]);

    if(mat in keyMat){

        keyMat[mat] += quantity;

        if(keyMat[mat] >= 250){

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

}

Object.entries(keyMat).sort(((a,b)=> b[1] - a[1]) || ((a,b)=> a.localeCompare(b)) );

Object.entries(junkMat).sort((a,b) => a.localeCompare(b));

for(let mat in keyMat){

    console.log(`${mat} : ${keyMat[mat]}`)
}

for(let mat in junkMat){

    console.log(`${mat} : ${junkMat[mat]}`)

}

}

legendaryFarming( '3 Valanyr 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'
    //'3 Valanyr 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'
    )
