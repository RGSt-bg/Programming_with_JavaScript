function aMinerTask(inputArr) {

    let resourcesObj = {};

    for (let i = 0; i < inputArr.length; i += 2) {
        let resource = inputArr[i];
        let quantity = Number(inputArr[i + 1]);
        if (!resourcesObj.hasOwnProperty(resource)) resourcesObj[resource] = 0;
        resourcesObj[resource] += quantity;
    }

    for (const [key, value] of Object.entries(resourcesObj)) console.log(`${key} -> ${value}`);
}

aMinerTask(['Gold','155','Silver','10','Copper','17']);
console.log("---------------");
aMinerTask(['gold','155','silver','10','copper','17','gold','15']);