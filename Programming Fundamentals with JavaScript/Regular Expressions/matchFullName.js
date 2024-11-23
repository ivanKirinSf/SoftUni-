function matchFullName(input){

    let regex = \b/[A-Z][a-z]+[ ][A-Z][a-z]+/g\b;

    let regexNames = [];

    let regexName = null;

    while(  (regexName = regex.exec(input)) !== null ){
        regexNames.push(regexName)
    }
    console.log(regexName)    
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
