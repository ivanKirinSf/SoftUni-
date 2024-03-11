function movies(input){

    let movie = {};

    let films = [];

    for(let i = 0; i < input.length; i++){

        let temp = input[i].split(" ");

        let el = temp[0];

        if(el === "addMovie"){

            let element = temp.shift();

            let movieName = temp.join(" ");

            movie.name = movieName;
            
            films.push(movie);

            movie = {};
            
            //console.log(movieName)

        }

        if(temp.includes("directedBy")){

            let index = temp.indexOf("directedBy");

            let movieName = temp.slice(0, index).join(" ");

            let movieDirector = temp.slice(index+1).join(" ");

            //let indexFilms = 0;

            let isExist = films.findIndex(k => k.name === movieName);

            if(isExist !== -1){

                films[isExist].director = movieDirector; 

            }

                        

            //for(let j = 0; j < films.length; j++){
                //let tempJ = films[j].name

                //if(tempJ === movieName){

                    //index = j

                //}
            //}
        }

        if(temp.includes("onDate")){

           let index = temp.indexOf("onDate");

           let movieName = temp.slice(0, index).join(" ");

           let movieDate = temp.slice(index+1).join(" ");

           let isExist = films.findIndex( j => j.name === movieName );

           if(isExist !== -1){

            films[isExist].date = movieDate;

           }                      

        }

        //console.log(temp)

    }

    for(let j = 0; j < films.length; j++){

        let tempJ = films[j];

        if(films[j].name && films[j].director && films[j].date){

            console.log(JSON.stringify(tempJ));

        }

    }

}
