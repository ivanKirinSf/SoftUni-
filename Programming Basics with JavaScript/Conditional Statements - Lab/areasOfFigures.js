function areasOfFigures(input) {
    let type = input[0];
    let a = input[1];
    let b = input[2];
    let area = 0;

    if (type === "square"){
        area = a*a;
        
    } else if(type === "rectangle") {
        area = a*b;
        
    } else if (type === "circle"){
        area = Math.PI*Math.pow(a,2);
        
    } else if (type === "triangle"){
        area = a*b/2;
        
    }

    console.log(area.toFixed(3))


}

areasOfFigures(["square", "5"])
areasOfFigures(["rectangle",
"7",
"2.5"])
areasOfFigures(["circle",
"6"])
areasOfFigures(["triangle",
"4.5",
"20"])
