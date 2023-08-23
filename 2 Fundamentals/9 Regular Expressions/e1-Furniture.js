function furniture(inputArr) {

    let pattern = />>(?<name>\w+)<<(?<price>\d*\.?\d+)!(?<qt>\d+)/gm;
    let allPrice = 0;

    console.log("Bought furniture:");
    while ((furnitures = pattern.exec(inputArr)) !== null) {
        let name = furnitures.groups["name"];
        let price = furnitures.groups["price"];
        let quantity = furnitures.groups["qt"];
        allPrice += price * quantity;
        console.log(`${name}`);
    }
    console.log(`Total money spend: ${allPrice.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3','>>TV<<300!5','>Invalid<<!5','Purchase']);
console.log("---------------------------------");
furniture(['>>Laptop<<312.2323!3','>>TV<<300.21314!5','>Invalid<<!5','>>TV<<300.21314!20',
           '>>Invalid<!5','>>TV<<30.21314!5','>>Invalid<<!!5','Purchase']);
console.log("---------------------------------");
furniture(['>Invalid<<!4','>Invalid<<!2','>Invalid<<!5','Purchase']);