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

        if(el === "Stop"){

            break;
        }else{

            let current = el.split("|");

            let command = current.shift();

            if(command === "Add"){

               let nameOfPiece = current.shift();

               let nameOfComposer = current.shift();

               let typeOfKey = current.shift();

               let included = true;

               for(let line of collection){

                if(Object.values(line).includes(nameOfPiece)){

                    console.log(`${nameOfPiece} is already in the collection!`);

                    included = true;

                    break;

                }else{

                    included = false;

                }

               }

               if(included === false){

                    info.piece = nameOfPiece;

                    info.compositor = nameOfComposer;

                    info.key = typeOfKey;

                    collection.push(info);

                    console.log(`${nameOfPiece} by ${nameOfComposer} in ${typeOfKey} added to the collection!`);
                    
                    info = {};

               }

            }else if(command === "Remove"){

                let nameOfPiece = current.shift();

                let included = true;

                for(let j = 0; j < collection.length; j++){

                    let line = collection[j];

                    if(Object.values(line).includes(nameOfPiece)){

                        collection.splice(j, 1)

                        console.log(`Successfully removed ${nameOfPiece}!`);

                        included = true;

                        break;
                    }else{

                        included = false;
                        //console.log(`Invalid operation! ${nameOfPiece} does not exist in the collection.`)
                    }
                }   
                
                if(included === false){

                   console.log(`Invalid operation! ${nameOfPiece} does not exist in the collection.`);

                }     
                


            }else if(command === "ChangeKey"){

                let nameOfPiece = current.shift();

                let keyOfPiece = current.shift();

                let included = true;

                for(let line of collection){

                    if(Object.values(line).includes(nameOfPiece)){

                        line.key = keyOfPiece;

                        console.log(`Changed the key of ${nameOfPiece} to ${keyOfPiece}!`); 
                        
                        included = true;                        

                        break;
                }else {

                    included = false;

                    //console.log(`Invalid operation! ${nameOfPiece} does not exist in the collection.`)

                }

                }  

                if(included === false){

                    console.log(`Invalid operation! ${nameOfPiece} does not exist in the collection.`)
                    
                    info = {};
               }
            }
        }
    }

    for(let line of collection){

console.log(`${line[`piece`]} -> Composer: ${line[`compositor`]}, Key: ${line[`key`]}`)

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
