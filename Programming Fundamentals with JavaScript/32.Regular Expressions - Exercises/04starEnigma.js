function starEnigma(input){

let num = input.shift();

let starCode = /[STARstar]/g;

let pattern = /[^@\-!:>\s]*@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>\s]*!(?<type>[A|D])![^@\-!:>\s]*\->(?<count>\d+)/;

let counter = 0;

let newMess = "";

for(let line of input){

      let match = starCode.exec(line);

      while(match !== null){

        counter ++;

        match = starCode.exec(line);

      }

      //console.log(counter)

      for(let ch of line){

        let value = ch.charCodeAt();

        let res = value - counter;

        let char = String.fromCharCode(res);

        newMess += char;

        //console.log(char)

      }

      console.log(newMess)

}

}





starEnigma(
    ['3',
        "tt(''DGsvywgerx>6444444444%H%1B9444",
        //'GQhrr|A977777(H(TTTT',
        //'EHfsytsnhf?8555&I&2C9555SR'
        ]
        
    )
