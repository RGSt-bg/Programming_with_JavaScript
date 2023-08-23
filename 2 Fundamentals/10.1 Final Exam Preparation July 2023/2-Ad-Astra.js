function adAstra(inputArr) {  // Тази задача според мен трябва да се реши с RegEx, ама малко по-нататък!!! Можело!!!

    let pattern = /(?<delimiter>[|#?])(?<itemName>[A-Za-z ]+)(\k<delimiter>)(?<expDate>[0-9]{2}\/[0-9]{2}\/[0-9]{2})(\k<delimiter>)(?<calories>[0-9]+)(\k<delimiter>)/gm;
    let allCalories = 0;
    let foodArr = [];
    let i = 0;

    while ((foodInfo = pattern.exec(inputArr)) !== null) {
        let itemName = foodInfo.groups["itemName"];
        foodArr[i] = itemName;
        i++;
        let expDate = foodInfo.groups["expDate"];
        foodArr[i] = expDate;
        i++;
        let calories = foodInfo.groups["calories"];
        foodArr[i] = Number(calories);
        i++;
        allCalories += Number(calories);
    }

    console.log(`You have food to last you for: ${Math.floor(allCalories/2000)} days!`)
    for (let i = 0; i < foodArr.length; i += 3) {
        console.log(`Item: ${foodArr[i]}, Best before: ${foodArr[i+1]}, Nutrition: ${Number(foodArr[i+2])}`);
    }
}

adAstra([ '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log("---------------------------------------------------------------");
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);
console.log("---------------------------------------------------------------");
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);