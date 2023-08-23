function companyUsers(inputArr) {

    let companiesObj = {};

    inputArr.forEach(element => {
        let [company, id] = element.split(" -> ");

        if (!companiesObj.hasOwnProperty(company)) companiesObj[company] = [];
        companiesObj[company].push(id);
    });

    let sortedCompanies = Object.entries(companiesObj);
    sortedCompanies.sort((a, b) => a[0].localeCompare(b[0]));

    for (const company of sortedCompanies) {
        console.log(company[0]);
        let setID = new Set(company[1])
        for (const id of setID) {
            console.log(`-- ${id}`);
        }
    };
}

companyUsers(['SoftUni -> AA12345','SoftUni -> BB12345','Microsoft -> CC12345','HP -> BB12345']);
console.log("---------------");
companyUsers(['SoftUni -> AA12345','SoftUni -> CC12344','Lenovo -> XX23456','SoftUni -> AA12345',
              'Movement -> DD11111']);