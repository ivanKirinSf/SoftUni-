function login(input) {
    let username = input[0];
    let password = ""
    for(let i = username.length-1; i >= 0; i--){
        password += username[i];
        
    }

    

    let incPasCount = 0;

    for(let i = 1; i < input.length; i++){
        let tempPas = input[i];
        
        if(tempPas === password){
            console.log(`User ${username} logged in.`)
        } else {
            incPasCount ++;
            if (incPasCount === 4){
                console.log(`User ${username} blocked!`)

            break;
        }
        console.log("Incorrect password. Try again.")
    }

    


}

}

login (['Acer','login','go','let me in','recA'])
login (['momo','omom'])
login (['sunny','rainy','cloudy','sunny','not sunny'])
