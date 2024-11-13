function replace(str){

let text = 'Peter: 123 Mark: 456';
let replacement = '999';
let regexp = /\d{3}/g;
let result = text.replace(regexp, replacement);
}

function replace('Peter: 123 Mark: 456')
