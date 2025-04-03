function extractEmails(input){

    let pattern = /(?=>/s.)([A-Za-z]*)+([A-Za-z0-9.-_])@/g;
    let match = input.match(pattern);
    match.forEach(x=> console.log(x))

}

extractEmails("Please contact us at: support@github.com. Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.")
