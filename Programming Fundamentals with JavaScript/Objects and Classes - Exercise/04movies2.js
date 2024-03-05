function movies(arr){

    let movie = {};

    for(let i = 0; i < arr.length; i++){
        let temp = arr[i].split(" ");

        if(temp.includes(`addMovie`)){

            let movieName = temp.slice(1);

            movie.name = movieName;
            
        }else if(temp.includes(`directedBy`)){

            let index = temp.indexOf(`directedBy`);

            let movieName = temp.slice(0, index);            

            let movieDirector = temp.slice((index + 1)).join(" "); 

            for(let el of Object.values(movie)){
                
                if(movieName === el){

                    movie.director = movie

                }
            }

            //console.log(movieDirector)
            

            

        }

        //console.log(temp)
    }

    console.log(movie)

}

movies([
    'addMovie Inception',
    //'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    //'Godfather directedBy Francis Ford Coppola',
    //'Godfather onDate 29.07.2018',
    //'Fast and Furious onDate 30.07.2018',
    //'Batman onDate 01.08.2018',
    //'Fast and Furious directedBy Rob Cohen'
    ])
