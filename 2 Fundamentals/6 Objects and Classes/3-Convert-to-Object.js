function convertToObject(strObj) {

    let personObj = JSON.parse(strObj);

    let entries = Object.entries(personObj);
    for (let [key, value] of entries) console.log(`${key}: ${value}`);
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
console.log("------------------------------------------------");
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');