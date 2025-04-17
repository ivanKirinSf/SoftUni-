function extractEmails(input){


    let pattern = /(?<=s\|^)([A-Za-z0-9]+[A-Za-z0-9./-_])+([a-z]*)+([a-z])/g;

    let mails = pattern.match(input);

    mails.forEach(x => console.log(x));

}

extractEmails("Please contact us at: support@github.com. Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.")
