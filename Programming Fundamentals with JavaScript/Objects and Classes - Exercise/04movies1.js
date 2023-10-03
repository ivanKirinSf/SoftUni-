function movies(input){

    let arr = [];
    let films = {};
    
    
        for(let i = 0; i<input.length; i++){
        let movieInfo = input[i].split(" ");
        //console.log(movieInfo)

        if(movieInfo.indexOf("addMovie") !== -1){
            movieInfo.shift();
            let film = movieInfo.join(" ");
            films.name = film;
            arr.push(films);
            films = {};
            //console.log(film.join(" "))
        }else if(movieInfo.indexOf("directedBy") !== -1){
            let index = movieInfo.indexOf("directedBy");
            let filmName = movieInfo.slice(0, index).join(" ");
            let director = movieInfo.slice(index+1, movieInfo.length).join(" ")
            //console.log(filmName);
            let isExist = arr.findIndex(e=>e.name===filmName);
            if(isExist !== -1){                
                arr[isExist].director = director;
            }    
        }else if(movieInfo.indexOf("onDate") !== -1){
            let index = movieInfo.indexOf("onDate");
            let filmName = movieInfo.slice(0, index).join(" ");
            let date = movieInfo.slice(index+1,movieInfo.length).join(" ");
            //console.log(director);
            let isExist = arr.findIndex(e=>e.name === filmName)
            if(isExist !== -1){
                arr[isExist].date = date;
            }
        }

        //console.log(JSON.stringify(films))
    }   
    
    

    for(let k = 0; k<arr.length; k++){
        let temp = arr[k];
        let dateCheck = temp.date;
        let directorCheck = temp.director;
        

        if(dateCheck.length !== 0 && directorCheck.length !== 0){
            console.log(JSON.stringify(temp))
        }
        
    }

    //console.log(arr)
    
    //console.log(JSON.stringify(films))

    //console.log(arr)
    
    //for(let i = 0; i < arr.length; i++){
        //let film = arr.shift();
        //let date = arr.shift();
        ///let director = arr.shift();

        //films.name = film;
        //films.date = date;
        //films.director = director;

        //console.log(JSON.stringify(films))
       // for(let key of Object.keys(films)){
           // console.log(`${key}:${films[key]}`)
       // }
    }

    
    
        //console.log(films)
    
    




movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]    
    )
