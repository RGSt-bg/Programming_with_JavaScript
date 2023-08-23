function meetings(inputArr) {

    let meetingsObj = {};

    for (let i = 0; i < inputArr.length; i++) {
        let [day, name] = inputArr[i].split(" ");
        if (meetingsObj.hasOwnProperty(day))
            console.log(`Conflict on ${day}!`);
        else {
            meetingsObj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const key in meetingsObj) {
        console.log(`${key} -> ${meetingsObj[key]}`);
    }
}

meetings(['Monday Peter','Wednesday Bill','Monday Tim','Friday Tim']);
console.log("-----------------------------------------------------");
meetings(['Friday Bob','Saturday Ted','Monday Bill','Monday John','Wednesday George']);