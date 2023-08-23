function destinationMapper(inputStr) {

    let pattern = /(?<delimiter>[=\/?])(?<location>[A-Z]{1}[A-Za-z]{2,})(\k<delimiter>)/g;
    let locationsArr = [];
    let travelPoints = 0;

    while ((locations = pattern.exec(inputStr)) !== null) {
        let location = locations.groups["location"];
        locationsArr.push(location);
        travelPoints += location.length;
    }

    console.log(`Destinations: ${locationsArr.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log("-----------------------------------------------------------");
destinationMapper("ThisIs some InvalidInput");