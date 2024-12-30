function numbersFrom100To200(input) {
    let num = Number(input[0]);

    if (num < 100 ) {
        console.log("Less than 100")
    } else if (num >200 ) {
        console.log("Greater than 200")
    } else {
        console.log("Between 100 and 200")
    }

}



numbersFrom100To200(["95"])
numbersFrom100To200(["120"])
numbersFrom100To200(["210"])
