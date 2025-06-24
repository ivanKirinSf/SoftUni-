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

  console.log(commands);

  commands = input.shift();

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
