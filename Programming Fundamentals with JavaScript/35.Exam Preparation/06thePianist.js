function thePianist(input){

let num = Number(input.shift());

let pieces = {};

for(let i = 0; i < num; i++){

  let temp = input.shift().split("|");

  let pieceName = temp.shift();

  let pieceComposer = temp.shift();

  let pieceKey = temp.shift();

  pieces[pieceName] = { composer: pieceComposer, key: pieceKey };
  
}

let commands = input.shift()

while(commands !== 'Stop'){

  let tempCom = commands.split("|");

  let command = tempCom.shift();

  if(command === "Add"){

    let pName = tempCom.shift();

    let pComp = tempCom.shift();
    
    let pKey = tempCom.shift();

    if( pName in pieces){

       console.log(`${pName} is already in the collection!`)

    }else{

      pieces[pName] = {composer: pComp, key: pKey};

      console.log(`${pName} by ${pComp} in ${pKey} added to the collection!`)

    }

  }else if(command === "Remove"){

     let pName = tempCom.shift();

     if(pName in pieces){

       delete pieces[pName];

       console.log(`Successfully removed ${pName}!`)

     }else {

       console.log(`Invalid operation! ${pName} does not exist in the collection.`)

     }

  }else if(command === "ChangeKey"){

    let pName = tempCom.shift();

    let pKey = tempCom.shift();

    if(pName in pieces){

      pieces[pName].key = pKey; 

      console.log(`Changed the key of ${pName} to ${pKey}!`);

    } else {

      console.log(`Invalid operation! ${pName} does not exist in the collection.`)

    }       

  }
  //console.log(command)
  commands = input.shift();

}

let entries = Object.entries(pieces);

for(let [piece, info] of entries){

  console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`)
}

}

thePianist(
   [
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'  
]

)
