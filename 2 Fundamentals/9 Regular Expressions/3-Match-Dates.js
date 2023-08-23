function matchDates(inputArr) {

    // В патърна се създават групи, които после се ползват за печата на дата, месец, година.
    let pattern = /\b(?<day>[0-9]{2})(?<delimiter>[-/.])(?<month>[A-Z]{1}[a-z]{2})(\k<delimiter>)(?<year>[0-9]{4})\b/gm;
    let validDate;

    while ((validDate = pattern.exec(inputArr)) !== null) {
        let day = validDate.groups["day"];
        let month = validDate.groups["month"];
        let year = validDate.groups["year"];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
console.log("------------------------------------------------------------------------");
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);