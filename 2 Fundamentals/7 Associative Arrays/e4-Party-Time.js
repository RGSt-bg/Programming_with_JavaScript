function partyTime(inputArr) {

    let vip = [];
    let regular = [];
    let person = inputArr.shift();

    while (person !== "PARTY") {

        if (person.charCodeAt(0) >= 48 && person.charCodeAt(0) <=57) vip.push(person);
        else regular.push(person);
        person = inputArr.shift();
    }

    while (inputArr.length > 0) {

        person = inputArr.shift();
        if (vip.includes(person)) vip.splice(vip.indexOf(person), 1);
        else if (regular.includes(person)) regular.splice(regular.indexOf(person), 1);
    }

    console.log(vip.length + regular.length);
    vip.forEach(guest => console.log(guest));
    regular.forEach(guest => console.log(guest));
}

partyTime(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE','SVQXQCbc','tSzE5t0p','PARTY','9NoBUajQ','Ce8vwPmE','SVQXQCbc']);
console.log("------------------------------------");
partyTime(['m8rfQBvl','fc1oZCE0','UgffRkOn','7ugX7bm0','9CQBGUeJ','2FQZT3uC','dziNz78I','mdSGyQCJ','LjcVpmDL','fPXNHpm1',
            'HTTbwRmM','B5yTkMQi','8N0FThqG','xys2FYzn','MDzcM9ZK','PARTY','2FQZT3uC','dziNz78I','mdSGyQCJ','LjcVpmDL',
            'fPXNHpm1','HTTbwRmM','B5yTkMQi','8N0FThqG','m8rfQBvl','fc1oZCE0','UgffRkOn','7ugX7bm0','9CQBGUeJ']);