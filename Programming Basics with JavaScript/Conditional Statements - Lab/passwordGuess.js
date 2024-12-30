function passwordGuess(input) {
    let word = input[0];
    if (word === "s3cr3t!P@ssw0rd"){
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }

}

passwordGuess(["qwerty"])
passwordGuess(["s3cr3t!P@ssw0rd"])
