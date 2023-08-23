function travelTime(inputArr) {

    let travelObj = {};
    let country = "";
    let town = "";
    let price = 0;

    inputArr.forEach(element => {
        [country, town, price] = element.split(" > ");
        price = Number(price);

        if (!travelObj.hasOwnProperty(country)) travelObj[country] = {};

        if (!travelObj[country].hasOwnProperty(town)) travelObj[country][town] = price;
    
        if (travelObj[country].hasOwnProperty(town)) {
            if (Number(travelObj[country][town]) > price) travelObj[country][town] = price;
        }
    });

    let sortedCountries = Object.keys(travelObj).sort((a, b) => a.localeCompare(b));

    for (let country of sortedCountries) {

        let result = "";
        result += (country + " -> ");

        let sortedPrice = Object.keys(travelObj[country]).sort((p1, p2) => travelObj[country][p1] - travelObj[country][p2]);

        for (let city of sortedPrice) {
            result += (city + " -> ");
            result += (travelObj[country][city] + " ");
        }

        console.log(result.trimEnd());
    }
}

travelTime(["Bulgaria > Sofia > 500","Bulgaria > Sopot > 800","France > Paris > 2000",
            "Bulgaria > Sofia > 200","Albania > Tirana > 1000"]);
console.log("-------------------------------------------------");
travelTime(['Bulgaria > Sofia > 25000','Bulgaria > Sofia > 25000','Kalimdor > Orgrimar > 25000',
            'Albania > Tirana > 25000','Bulgaria > Varna > 25010','Bulgaria > Lukovit > 10']);