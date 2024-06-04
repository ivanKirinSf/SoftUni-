function partyTime(input){

    let visits = {};    

    let lists = input;

    let index = lists.indexOf("PARTY");

    let guestsList = lists.splice(0, index);

    let guestsListQuantity = Number(guestsList.length);

    let party = lists.shift();

    let comingList = lists;

    let notComingNum = 0;
    
    for(let guest of comingList){

         let indexGuest = guestsList.indexOf(guest);

         if(indexGuest > -1){

            guestsList.splice(indexGuest, 1);

            //comingGuestsNum += 1;           

           //console.log(code)

         }

    }

    notComingNum = guestsList.length;

    console.log(notComingNum);

    //console.log(guestsList);



    for(let el of guestsList){

        let char = el[0];

           let code = char.charCodeAt(0);

           if(code >= 48 && code <= 57){

            visits[el] = "VIP";                       

           }else{

            visits[el] = "regular";

           }

            //console.log(el);

    }

    let entries = Object.entries(visits).sort((keyA, keyB) => keyB[1].localeCompare(keyA[1]))

    //console.table(entries);

    for(let name of entries){

        console.log(name[0])
    }

}

partyTime([
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
])
