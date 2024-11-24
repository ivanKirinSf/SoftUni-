function matchFullName(input){

       let regex = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;

       let validNames = [];

       let name = null;

       while((name = regex.exec(input)) !== null){

        validNames.push(name[0]);

       }

       console.log(validNames.join(" "))

}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
