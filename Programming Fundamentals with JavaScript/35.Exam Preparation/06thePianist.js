function thePianist(input){

    let num = input.shift();

    let collection = [];

    let info = {};

    for(let i = 0; i < num; i++){

        let temp = input.shift().split("|");

        let pieceName = temp.shift();

        let compositorName = temp.shift();

        let keyType = temp.shift();

        info.piece = pieceName;

        info.compositor = compositorName;

        info.key = keyType;

        //console.log(pieceName);
        //console.log(compositorName);
        //console.log(keyType);

        collection.push(info);

        info = {};
    }

    for(let el of input){

        if(el=== "Stop"){

            break;
        }else{

            let current = el.split("|");

            let command = current.shift();

            if(command === "Add"){

               let nameOfPiece = current.shift();

               let nameOfComposer = current.shift();

               let typeOfKey = current.shift();

               for(let line of collection){

                if(Object.values(line).includes(nameOfPiece)){

                    console.log(`${nameOfPiece} is already in the collection!`)
                }else{

                    info.piece = nameOfPiece;

                    info.compositor = nameOfComposer;

                    info.key = typeOfKey;

                    console.log(`${nameOfPiece} by ${nameOfComposer} in ${typeOfKey} added to the collection!`)

                }



               }

            }else if(command === "Remove"){

                let nameOfPiece = current.shift();

                for(let j = 0; j < collection.length; j++){

                    let line = collection[j];

                    if(Object.values(line).includes(nameOfPiece)){

                        collection.splice(j, 1)

                        console.log(`Successfully removed ${nameOfPiece}!`)
                    }else{


                        console.log(`Invalid operation! ${nameOfPiece} does not exist in the collection.`)
                    }

                }                   

            }else if(command === "ChangeKey"){

                let nameOfPiece = current.shift();

                let keyOfPiece = current.shift();

                

            }
        }
    }

    for(let line of collection){

console.log(`${line[`piece`]} -> Composer: ${line[`compositor`]}, Key: ${line[`key`]}`)

    }


}

thePianist(
    [
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  //'Add|Sonata No.2|Chopin|B Minor',
  //'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  //'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  //'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'  
]
)
