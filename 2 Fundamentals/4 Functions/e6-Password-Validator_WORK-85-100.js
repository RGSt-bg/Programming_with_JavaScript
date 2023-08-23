function passwordValidator(passwd) {

	let isValidPasswd = true;
	let isLetterOrDig = true;
	let countDigit = 0;
	
	if (passwd.length < 6 || passwd.length > 10) {
		isValidPasswd = false;
		console.log("Password must be between 6 and 10 characters");
	}

	for (let i = 0; i < passwd.length; i++) {
		if (passwd.charCodeAt(i) < 48 || passwd.charCodeAt(i) > 57 && passwd.charCodeAt(i) < 65 || passwd.charCodeAt(i) > 90 && passwd.charCodeAt(i) < 97 || passwd.charCodeAt(i) > 122) {
			isValidPasswd = false;
			isLetterOrDig = false;
		}

		if (passwd.charCodeAt(i) >= 48 && passwd.charCodeAt(i) <= 57) countDigit++;
	}
    
    if (!isLetterOrDig) console.log("Password must consist only of letters and digits");
    if (countDigit < 2) console.log("Password must have at least 2 digits");
    if (isValidPasswd) console.log("Password is valid");
	
}

passwordValidator('logIn');
// passwordValidator('MyPass123');
// passwordValidator('Pa$s$s');