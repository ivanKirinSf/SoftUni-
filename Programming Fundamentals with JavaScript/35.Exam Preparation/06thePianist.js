function thePianist(input){

let num = Number(input.shift());

let pieces = {};

for(let i = 0; i < num; i++){

    let temp = input.shift();

    let [pieceName, pieceComposer, pieceKey] = temp.split("|");

    pieces[pieceName] = {composer: pieceComposer, key: pieceKey};

}

let commands = input.shift();

while(commands !== "Stop"){

    let temp = commands.split("|");

    let command = temp.shift();

    //console.log(temp)

    if(command === "Add"){

      let [pName, pComposer, pKey] = temp;

      if(pName in pieces){

        console.log(`${pName} is already in the collection!`);

      }else{

        pieces[pName] = {composer: pComposer, key: pKey}

        console.log(`${pName} by ${pComposer} in ${pKey} added to the collection!`)

      }

    }else if(command === "Remove"){

       let pName = temp.shift();

       //console.log(pName)

       if(pName in pieces){

        delete pieces[pName]

        console.log(`Successfully removed ${pName}!`);

       }else{

        console.log(`Invalid operation! ${pName} does not exist in the collection.`);
        
       }

    }else if(command === "ChangeKey"){

        let [ pName, pKey] = temp;

        if(pName in pieces){

            pieces[pName].key = pKey;

            console.log(`Changed the key of ${pName} to ${pKey}!`)
        }

        

    }

    commands = input.shift()
}

let list = Object.entries(pieces);

//console.table(list)

for(let [pieceName, pieceInfo] of list ){

    console.log(`${pieceName} -> Composer: ${pieceInfo.composer}, Key: ${pieceInfo.key}`)
}

}

thePianist(
   [
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop'
]
)
