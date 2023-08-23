function printDNA(lengthDNA) {

    lengthDNA = Number(lengthDNA);
    let arrPrintDNA = [];
    let arrDNASymbols = [];
    let dna = "ATCGTTAGGG";

    for (let i = 0; i < lengthDNA * 2; i += 2) {

        if (i === 0 || i % 5 === 0) createArrayDNA(dna, arrDNASymbols);

        let strDNA = "";
        let rightDigit = (i / 2).toString();
        rightDigit = Number(rightDigit.substring(rightDigit.length - 1));

        if (rightDigit === 0 || rightDigit === 5) strDNA = "**" + arrDNASymbols[i] + arrDNASymbols[i + 1] + "**";
        else if (rightDigit === 1 || rightDigit === 6) strDNA = "*" + arrDNASymbols[i] + "--" + arrDNASymbols[i + 1] + "*";
        else if (rightDigit === 2 || rightDigit === 7) strDNA = arrDNASymbols[i] + "----" + arrDNASymbols[i + 1];
        else if (rightDigit === 3 || rightDigit === 8) strDNA = "*" + arrDNASymbols[i] + "--" + arrDNASymbols[i + 1] + "*";
        else if (rightDigit === 4 || rightDigit === 9) strDNA = "**" + arrDNASymbols[i] + arrDNASymbols[i + 1] + "**";

        arrPrintDNA.push(strDNA);
    }

    return console.log(arrPrintDNA.join("\n"));

    function createArrayDNA(dna, arrDNASymbols) {

        for (let i = 0; i < dna.length; i++) arrDNASymbols.push(dna[i]);

        return arrDNASymbols;
    }
}

// printDNA('4');
printDNA('10');