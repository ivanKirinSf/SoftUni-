function songs(input){

    class Song{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time
        }
    }

    let songs = [];
    let songsNum = Number(input.shift());
    let songsType = input.pop();

    for(let i = 0; i < songsNum; i++){
        let [type, name, time] = input[i].split("_");
        let newSong = new Song (type, name, time);
        songs.push(newSong);
       

}

if(songsType === "all"){
    songs.forEach((i) => console.log(i.name))
}else {
    let filtered = songs.filter((i) => i.type === songsType);
    filtered.forEach((i) => console.log(i.name))
}

}

songs(
    [3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )
