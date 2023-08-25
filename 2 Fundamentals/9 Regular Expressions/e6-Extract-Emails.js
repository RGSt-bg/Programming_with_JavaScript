function extractEmails(inputStr) {

    let pattern = /(?<email>[^\.\-\_ \n][0-9a-zA-Z]*[\.\-\_]*?[0-9a-zA-Z]*@[^ \.][\-a-zA-Z]*.[a-zA-Z]*[\.][a-zA-Z]{1,10})/g;
    let email = [];

    while ((email = pattern.exec(inputStr)) !== null) {
        console.log(email.groups["email"]);
    }
}

extractEmails("Please contact us at: support@github.com.");
console.log("-------------------------------------------");
extractEmails("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.");
console.log("-------------------------------------------");
extractEmails("Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.");