function towns(inputArr) {

    let townsObj = {};

    for (const elem of inputArr) {
        let [t, lat, lon] = elem.split(" | ");
        lat = Number(lat).toFixed(2);
        lon = Number(lon).toFixed(2);
        townsObj.town = t;
        townsObj.latitude = lat;
        townsObj.longitude = lon;

        console.log(townsObj);
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);