function movies(input){

    let film = {};

    let movies = [];

    for(let i = 0; i < input.length; i++){

        let temp = input[i].split(" ");

        let el = temp[0];

        if(el === "addMovie"){

            let element = temp.shift();

            let movieName = temp.join(" ");

            film.name = movieName;

            movies.push(film);

            film = {};

            //console.log(movieName)

        }

        if(temp.includes("directedBy")){

            let index = temp.indexOf("directedBy");

            let movieName = temp.slice(0, index).join(" ");

            let directorName = temp.slice(index+1).join(" ");

            let isExist = movies.findIndex(k => k.name === movieName);

            if(isExist !== -1){
                movies[isExist].director = directorName;
            }            

        }

        if(temp.includes("onDate")){

        

            let index = temp.indexOf("onDate");

            let movieName = temp.slice(0, index).join(" ");

            let movieDate = temp.slice(index+1).join(" ");

            let isExist = movies.findIndex(k => k.name === movieName);

            if(isExist !== -1){
                movies[isExist].date = movieDate;
            }            

        }     


        //console.log(el);
    }

    for(let j = 0; j < movies.length ; j++){

        let tempJ = movies[j];

        if(movies[j].name && movies[j].director && movies[j].date){
            console.log(JSON.stringify(tempJ))
        }

                

    }




}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ])
