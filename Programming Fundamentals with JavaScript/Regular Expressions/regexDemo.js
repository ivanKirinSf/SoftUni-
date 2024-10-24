function regexDemo (){

    let text = 'Today is 2015-05-11';
    let regexp = /\d{4}-\d{2}-\d{2}/g;

    let isValid = regexp.test(text);

    if(isValid){

        console.log('We have valid date in this text!')
    }else {

        console.log('We don`t have valid date here')
    }

}

regexDemo()
