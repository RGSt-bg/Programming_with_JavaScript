function city(cityObj) {

    for (const key of Object.keys(cityObj)) {
        console.log(`${key} -> ${cityObj[key]}`);
    }

    // Това е решението с entries от презентацията.
    // let entries = Object.entries(cityObj);
    // for (let [key, value] of entries) console.log(`${key} -> ${value}`);

}

city({ name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000" });
console.log("------------------------------------------------");
city({ name: "Plovdiv", area: 389, population: 1162358, country: "Bulgaria", postCode: "4000" });