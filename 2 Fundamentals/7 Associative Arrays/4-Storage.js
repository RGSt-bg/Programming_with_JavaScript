function storage(inputArr) {

    let storageMap = new Map();

    for (const prod of inputArr) {
        let [product, quantity] = prod.split(" ");
        quantity = Number(quantity);

        if (storageMap.has(product)) storageMap.set(product, storageMap.get(product) + quantity);
        else storageMap.set(product, quantity);
    }

    let storagePrint = Array.from(storageMap.entries());

    storagePrint.forEach(element => {
        console.log(`${element.join(" -> ")}`);
    });
}

storage(['tomatoes 10','coffee 5','olives 100','coffee 40']);