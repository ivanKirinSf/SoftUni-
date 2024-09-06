function legendaryFarming(input){

    let arr = input.split(" ");

    let keyMat = {shards : 0, fragments : 0, motes : 0};

    let junkMat = {};

    let legendaries = { shards : "Shadowmourne", fragments : "Valanyr", motes : "Dragonwrath" };

    for( let i = 0; i < arr.length; i+=2 ){

        let mat = arr[i+1].toLowerCase();

        let num = Number(arr[i]);

        

        console.log(num);

        if(mat in keyMat){

           keyMat[mat] += num;

           if(keyMat[mat] >= 250){

            keyMat[mat] -= 250;

            let legendary = legendaries;

            console.log(`${legendary[mat]} obtained!`);

            break;            

           }

        }

        if(mat in junkMat){

            junkMat[mat] += num;

        }else{

            junkMat[mat] = num;

        }

        //console.table(junkMat)

    }

    let entriesKeyMat = Object.entries(keyMat).sort((a,b) => b[1] - a[1] || a[1].localeCompare(b[1]));

    let entriesJunkMat = Object.entries(junkMat).sort((a,b) => a[1].localeCompare(b[1]));

    for(let [keyMaterials, quantity] in entriesJunkMat){

        console.log(`${keyMaterials} : ${quantity}`);

    }

    for(let [junkMaterials, quantity] in entriesJunkMat){

        console.log(`${junkMaterials} : ${quantity}`);

    }
}


legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
