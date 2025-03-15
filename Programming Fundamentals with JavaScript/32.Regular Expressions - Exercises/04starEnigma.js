function starEnigma(input) {
    let messageCount = Number(input.shift());
    let starCountPattern = /[STARstar]/g;
    let attackedPlanetsList = new Set();
    let destroyedPlanetsList = new Set();
    let planetPattern = /[^@\-!:>\s]*@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>\s]*!(?<type>[A|D])![^@\-!:>\s]*\->(?<count>\d+)/;
    
    
    for (const line of input) {
        let starCount = 0;
        let match = starCountPattern.exec(line);
 
        while (match !== null) {
            starCount ++;
            match = starCountPattern.exec(line);
        }
