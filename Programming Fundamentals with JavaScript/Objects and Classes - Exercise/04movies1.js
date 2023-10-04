function movies(input){

    let arr = [];
    let films = {}

    for(let i = 0; i<input.length; i++){
        let movieInfo = input[i].split(" ");
        if(movieInfo.indexOf("addMovie") !== -1){
            movieInfo.shift();
            let filmName = movieInfo.join(" ");
            films.name = filmName;
            arr.push(films);
            films = {};
        }else if(movieInfo.indexOf("directedBy") !== -1){
            let index = movieInfo.indexOf("directedBy");
            let filmName = movieInfo.slice(0,index).join(" ");
            let directorName = movieInfo.slice(index+1,movieInfo.length).join(" ");
            //console.log(director)
            let isExist = arr.findIndex(k=>k.name === filmName)
            if(isExist !== -1){
                arr[isExist].director = directorName;                
            }
            //console.log(filmName)
        }else if(movieInfo.indexOf("onDate") !== -1){
            let index = movieInfo.indexOf("onDate");
            let filmName = movieInfo.slice(0,index).join(" ");
            let filmDate = movieInfo.slice(index+1, movieInfo.length).join(" ");
            let isExist = arr.findIndex(j=>j.name === filmName);
            if(isExist !== -1){
                arr[isExist].date = filmDate;
            }

            //console.log(isExist)
        }
        
    }

    for(let k = 0; k<arr.length; k++){
        let temp = arr[k];
        let directorCheck = temp.director;
        let dateCheck = temp.date;

        if(directorCheck && dateCheck){
            console.log(JSON.stringify(temp))
        }
    }

    //console.log(arr)
}

movies(
    [
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]    
    )
