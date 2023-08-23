function softUniBarIncome(inputArr) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[\d]+.?\d*)\$/g;
    // let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[\d]+.?\d?)\$/g;
    // let pattern = /%(?<name>[A-Z]{1}[a-z]+)%[^|$%.]*\<(?<product>[A-Z]{1}[a-z]+)\>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[\d]+\.?\d?)\$/g;
    // let pattern = /%(?<name>[A-Z]{1}[a-z]+)%<(?<product>\w+)>\|(?<count>\d+)\|(?<price>[0-9]+\.?\d?)\$/g;
    let productlPrice = 0;
    let totalPrice = 0;

    // Решението на Иво:
    // ======================================================================================
    // let i = 0;
 
    // let result = 0;
    // while (input[i] !== 'end of shift') {
    //     let line = input[i];
    //     let match = [...line.matchAll(pattern)];
 
    //     for (const el of match) {
    //         let prices = Number(el.groups.quantity) * Number(el.groups.price);
 
    //         result += prices;
    //         console.log(`${el.groups.name}: ${el.groups.product} - ${prices.toFixed(2)}`);
    //     }
 
    //     i++;
    // }

    while ((products = pattern.exec(inputArr)) !== null) {
        let name = products.groups["name"];
        let product = products.groups["product"];
        let quantity = Number(products.groups["count"]);
        let price = Number(products.groups["price"]);
        productlPrice = price * quantity;
        totalPrice += Number(productlPrice);
        console.log(`${name}: ${product} - ${productlPrice.toFixed(2)}`);
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$','%Peter%<Gum>|1|1.3$','%Maria%<Cola>|1|2.4$','end of shift']);
console.log("---------------------------------");
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$','%Peter%<Gum>1.3$','%Maria%<Cola>|1|2.4',
                  '%Valid%<Valid>valid|10|valid20$','end of shift']);