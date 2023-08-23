function softUniReception(inputArr) {

    inputArr = inputArr.map(x => Number(x));
    let allStudents = inputArr[3];
    let studPerHours = 0;
    let allHours = 0;

    for (let i = 0; i <= 2; i++) studPerHours += inputArr[i];

    while (allStudents > 0) {
        
        if (allStudents > 0) {
            allStudents -= studPerHours;
            allHours++;
        }

        if (allHours % 4 === 0) allHours++;
        if (allStudents <= 0) {
            console.log(`Time needed: ${allHours}h.`);
            break;
        }
    }
}

softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);