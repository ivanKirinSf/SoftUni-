function regexMatch() {

let text = 'Peter: 123 Mark: 456';
let regexp = /(?<name>[A-Z][a-z]+): (?<number>\d+)/g;
let matches = text.match(regexp);

console.log(matches)

}

regexMatch()
