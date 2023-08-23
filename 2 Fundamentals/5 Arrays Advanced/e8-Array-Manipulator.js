function arrayManipulator(arrNumbs, arrCommands) {

    let arrAddMany = [];

	for (i = 0; i < arrCommands.length; i++) {

		let [action, index, numb2] = arrCommands[i].split(' ');
		index = Number(index);
		if (action !== "addMany") numb2 = Number(numb2);
		else {
			arrAddMany = arrCommands[i].split(' ');
			arrAddMany.splice(0, 2);
			arrAddMany = arrAddMany.map(Number);
		}
	
		switch (action) {
			case "add" : {
				add(index, numb2);
				break;
			}

			case "addMany" : {
				addMany(index, arrAddMany);
				break;
			}

			case "remove" : {
				remove(index);
				break;
			}

			case "contains" : {
				console.log(contains(index));
				break;
			}

			case "shift" : {
				shift(index);
				break;
			}

			case "sumPairs" : {
				sumPairs();
				break;
			}
		}
	}

	function add(index, numb2) {
		return arrNumbs.splice(index, 0, numb2);
	}

	function addMany(index, arrAddMany) {
		for (let j = 0; j < arrAddMany.length; j++) {
			arrNumbs.splice(index + j, 0, arrAddMany[j])
		}
			return arrNumbs;
	}

	function remove(index) {
		return arrNumbs.splice(index, 1);
	}

	function contains(index) {
		return arrNumbs.indexOf(index);
	}

	function shift(index) {
		for (let j = 1; j <= index; j++) {
			let tmp = 0;
			tmp = arrNumbs.shift();
			arrNumbs.push(tmp);
		}
		return arrNumbs;
	}
	
	function sumPairs() {
		let tmpArr = [];
		let tmp = 0;
		for (let j = 0; j < arrNumbs.length; j += 2) {
			if (arrNumbs[j + 1] !== undefined) tmp = arrNumbs[j] + arrNumbs[j + 1];
			else tmp = arrNumbs[j];
			tmpArr.push(tmp);
		}
		arrNumbs = tmpArr;
		return arrNumbs;
	}
	
	return console.log(`[ ${arrNumbs.join(", ")} ]`);
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);