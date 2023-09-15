function songs(input){

    class Songs {
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let songsNum = input.shift();
    let songsType = input.pop();

    for(let i = 0; i<songsNum; i++){
        let [type, name, time] = input[i].split("_");
        let song = new Songs(type, name, time);
        songs.push(song);
    }

    if(songsType === "all"){

        songs.forEach((i) => console.log(i.name));

    }else {
        let filter = songs.filter((i) => songsType === i.type);
        filter.forEach((i) => console.log(i.name))
    }
}
