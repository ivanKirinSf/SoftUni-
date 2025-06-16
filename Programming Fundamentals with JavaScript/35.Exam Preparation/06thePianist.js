function thePianist(input){

let num = Number(input.shift());

let pieces = {};

for(let i = 0; i < num; i++){

  let temp = input.shift().split("|");
  
  let [musicPiece, musicComp, musicKey] = temp;

  pieces[musicPiece] = { composer: musicComp, key: musicKey };
  
}

let commands = input.shift();

while(commands !== "Stop"){

 let allCom = commands.split("|");

 let command = allCom.shift();

 if(command === "Add"){

  let [musicPiece, musicComp, musicKey] = allCom;

  if(musicPiece in pieces){

     console.log(`${musicPiece} is already in the collection!`);

  }else {

     pieces[musicPiece] = { composer: musicComp, key: musicKey };

     console.log(`${musicPiece} by ${musicComp} in ${musicKey} added to the collection!`);

  }  

 }else if(command === "Remove"){

  let musicPiece = allCom.shift();

  if(musicPiece in pieces){    

    delete pieces[musicPiece];

    console.log(`Successfully removed ${musicPiece}!`)
  }else {

    console.log(`Invalid operation! ${musicPiece} does not exist in the collection.`)

  }

 }else {

  let [musicPiece, musicKey] = allCom;

  if(musicPiece in pieces){

    pieces[musicPiece].key = musicKey;

    console.log(`Changed the key of ${musicPiece} to ${musicKey}!`);

  }else {

    console.log(`Invalid operation! ${musicPiece} does not exist in the collection.`);

  }

 }

 commands = input.shift();

}

let entries = Object.entries(pieces);

for(let [pieceName, pieceInfo] of entries){

  console.log(`${pieceName} -> Composer: ${pieceInfo.composer}, Key: ${pieceInfo.key}`)

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
