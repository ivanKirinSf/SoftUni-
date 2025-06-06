function thePianist(input){

let num = input.shift();

let musicPieces = {};

for(let i = 0; i < num; i++){
    let temp = input.shift();

    let [tempPiece, tempComposer, tempKey] = temp.split("|");

    musicPieces[tempPiece] = { composer: tempComposer, key: tempKey}
}

let commands = input.shift()

while(commands === "Stop"){

     console.log(commands)

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
