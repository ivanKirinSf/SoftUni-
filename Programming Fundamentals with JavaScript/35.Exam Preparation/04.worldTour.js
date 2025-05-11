function worldTour(input){

    let text = input.shift();    

    let pattern = /[A-Z][a-z]*/g;

    if(pattern.test(text)){

    let list = pattern.exec(text);

    console.log(list);

    }

    

}

worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
])
