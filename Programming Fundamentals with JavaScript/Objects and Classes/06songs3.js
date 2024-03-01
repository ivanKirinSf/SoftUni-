function songs(input){

    class Song{

        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songsNum = Number(input.shift());
    let songsType = input.pop();

    //console.log(songsType)

    let songs = [];

    for(let i = 0; i < songsNum; i++){

        let temp = input[i].split("_");

        let type = temp.shift();
        let name = temp.shift();
        let time = temp.shift();

        let songInfo = new Song(type, name, time);
        songs.push(songInfo)

    }

    for(let k = 0 ; k < songs.length; k++){
        let temp = songs[k];

        if(songsType === "all"){

            console.log(songs[k].name);

        }else if(songs[k].type === songsType){

            console.log(songs[k].name);

        }
    }



}

songs([
     2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
])
