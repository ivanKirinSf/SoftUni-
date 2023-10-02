function movies(input){

    
    let films = {};
    let arr = [];
    
        for(let i = 0; i<input.length; i++){
        let movieInfo = input[i].split(" ");
        //console.log(movieInfo)

        if(movieInfo.indexOf("addMovie") !== -1){
            movieInfo.shift();
            let film = movieInfo.join(" ");
            arr.push(film);
            arr.push("date");
            arr.push("director")
            //console.log(film.join(" "))
        }else if(movieInfo.indexOf("directedBy") !== -1){
            let index = movieInfo.indexOf("directedBy");
            let filmName = movieInfo.slice(0, index).join(" ");
            let director = movieInfo.slice(index+1, movieInfo.length).join(" ")
            //console.log(filmName);
            if(arr.indexOf(filmName) !== -1){
                let index = arr.indexOf(filmName);
                arr.splice(index + 2, 1, director)
            }    
        }else if(movieInfo.indexOf("onDate") !== -1){
            let index = movieInfo.indexOf("onDate");
            let filmName = movieInfo.slice(0, index).join(" ");
            let date = movieInfo.slice(index+1,movieInfo.length).join(" ");
            //console.log(director);
            if(arr.indexOf(filmName) !== -1){
                let index = arr.indexOf(filmName);
                arr.splice(index + 1, 1, date);
            }

        }
    }    

    //console.log(arr)
    
    for(let i = 0; i < arr.length; i++){
        let film = arr.shift();
        let date = arr.shift();
        let director = arr.shift();

        films.name = film;
        films.date = date;
        films.director = director;

        console.log(films)
       // for(let key of Object.keys(films)){
           // console.log(`${key}:${films[key]}`)
       // }
    }
    
        //console.log(films)
    }
   




movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]    
    )
