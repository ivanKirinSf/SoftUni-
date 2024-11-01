function regexExec(){

    let text = " Peter: 123 Mark: 456";
    let regexp = /([A-Z][a-z]+): (\d+)/g;
    let firstMatch = regexp.exec(text);
    let secondMatch = regexp.exec(text);

    console.log(firstMatch[0]);
    console.log(firstMatch[1]);
    console.log(firstMatch[2]);

}

regexExec()
