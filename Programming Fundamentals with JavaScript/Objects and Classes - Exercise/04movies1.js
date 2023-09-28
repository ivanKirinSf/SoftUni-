function movies(input){

    
    let films = {};
    
        for(let i = 0; i<input.length; i++){
        let movieInfo = input[i].split(" ");

        if(movieInfo.indexOf("addMovie") !== -1){
            let index = movieInfo.indexOf("addMovie");
            movieInfo.shift();
            let filmName = movieInfo.join(" ");
            films.name = filmName            
        }//else if(movieInfo.indexOf("directedBy") !== -1){
            //let index = movieInfo.indexOf("directedBy");
           // let director = movieInfo.slice(index+1, movieInfo.length).join(" ");
            //let film = movieInfo.slice(0, index).join(" ");

            //if(arrFilms.indexOf(film) !== -1){
            //    let indexArrFilms = arrFilms.indexOf(film);
            //    arrFilms.splice(indexArrFilms, 0, )
            //}

            //console.log(film)
        //}        
    }

    console.log(films)

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
