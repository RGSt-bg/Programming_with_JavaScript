function employees(arrEmployees) {

    let employeesObj = {};

    for (let i = 0; i < arrEmployees.length; i++) {

        let personalNum = arrEmployees[i].length;
        employeesObj[arrEmployees[i]] = personalNum;
    }
        for (const key in employeesObj) {
            console.log(`Name: ${key} -- Personal Number: ${employeesObj[key]}`)
        }
}

employees([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal' ]);
console.log("-------------------------------------------------------------------------");
employees([ 'Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland' ]);