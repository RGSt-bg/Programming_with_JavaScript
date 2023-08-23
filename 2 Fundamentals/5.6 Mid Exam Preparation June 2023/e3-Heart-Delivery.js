function heartDelivery(inputArr) {

    let houses = inputArr.shift().split("@");
    let housesFlags = [];
    let i = 0;
    let [action, jump] = inputArr[i].split(' ');

    for (i = 0; i < houses.length; i++) housesFlags.push(0);

    while (action !== "Love!") {
        [action, jump] = inputArr[i].split(' ');
        jump = Number(jump);
	
        if (action == "Jump" && jump < houses.length) {

            houses[i + jump] -= 2;
            if (houses[i + jump] <= 0 && housesFlags[i + jump] == 0) {
                housesFlags[i + jump] = 1;
                console.log(`Place ${i} has Valentine's day.`);
            }
        }
        else {
            houses[0] -= 2;
            if (houses[0] <= 0 && housesFlags[0] == 0) {
                housesFlags[0] = 1;
                console.log(`Place ${i} has Valentine's day.`);
            }
        }

        i++;
    }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);