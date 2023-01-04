function oldBooks(input) {
 let anisBook = input[0];
 let book = input[1];
 let booksNum = 0;

 index = 2;
 while(true){
    let currentBook = book;
    booksNum++;
    if(currentBook === anisBook){
        booksNum--;
        console.log(`You checked ${booksNum} books and found it`);
        break;
        
    }

    if (currentBook === "No More Books"){
        console.log(`The book you search is not here!`);
        booksNum--;
        console.log(`You checked ${booksNum} books and found it.`);
        break;

    }

    book = input[index];
    index++;

 }
}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
