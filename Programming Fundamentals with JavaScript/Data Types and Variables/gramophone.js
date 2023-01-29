function solve(band, album, song){
    let bandLength = 0;
    let albumLength = 0;
    let songLength = 0;
    let songDuration = 0;
    let rotations = 0;

    


    for(let i = 0; i < band.length; i++){
         bandLength ++;
    }

    for(let k = 0; k< album.length; k++){
        albumLength ++;
    }

    for(let j = 0; j< song.length; j++){
        songLength ++;
    }

    songDuration = (albumLength*bandLength) * songLength /2;
    rotations = songDuration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)

    

}
