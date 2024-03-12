function movies(input){

    let movie = {};

    let films = [];

    for(let i = 0; i<input.length; i++){

        let temp = input[i].split(" ");

        let el = temp[0];

        if(el === "addMovie"){

            let element = temp.shift();

            let movieName = temp.join(" ");

            movie.name = movieName;

            films.push(movie);
            
            movie = {};           

        }

        if(temp.includes("directedBy")){

            let index = temp.indexOf("directedBy");

            let movieName = temp.slice(0, index).join(" ");

            let movieDirector = temp.slice(index + 1).join(" ");

            let isExist = films.findIndex(k => k.name === movieName);

            if(isExist !== -1){

                films[isExist].director = movieDirector;

            }           

        }

        if(temp.includes("onDate")){

            let index = temp.indexOf("onDate");

            let movieName = temp.slice(0, index).join(" ");

            let movieDate = temp.slice(index + 1).join(" ");

            let isExist = films.findIndex(j => j.name === movieName);

            if(isExist !== -1){

                films[isExist].date = movieDate;

            }           

        }        

        //console.log(temp);

    }

    for(let a = 0; a < films.length; a++){

        let tempA = films[a];

        if(films[a].name && films[a].director && films[a].date){

           console.log(JSON.stringify(tempA))

        }

    }

        
        //nsole.log(JSON.parse(el))
   

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
    ])
