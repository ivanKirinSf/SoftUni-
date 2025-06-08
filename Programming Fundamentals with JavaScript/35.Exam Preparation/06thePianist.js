function thePianist(input){

let num = Number(input.shift());

let pieces = {};

for(let i = 0; i < num; i++){

    let [ musicPiece, musicComposer, musicKey ] = input.shift().split("|");
    
    pieces[musicPiece] = { composer: musicComposer, key: musicKey }

}

let commands = input.shift();

while(commands !== "Stop"){

    let commands = input.shift().split("|");

    let command = commands.shift();

    if(command === "Add"){

       console.log("yes");

    }

    let [ musicPiece, musicComposer, musicKey ] = input.shift().split("|");

    if(musicPiece in pieces){

       console.log(`${musicPiece} is already in the collection!`);

    }else{

        pieces[musicPiece] = { composer: musicComposer, key: musicKey };

        console.log(`${musicPiece} by ${musicComposer} in ${musicKey} added to the collection!`)

    }
    
    commands = input.shift();
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
