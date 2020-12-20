function add (num1, num2) {
	return num1 + num2;	
}

function subtract (num1, num2) {
	return num1 - num2;	
}

function sum (numArray) {
	finalSum = 0;
	for(let i = 0; i < numArray.length; i++) {
		finalSum += numArray[i];
	}	
	return finalSum;
}

function multiply (numArray) {
	finalProduct = numArray[0];
	for(let i = 1; i < numArray.length; i++) {
		finalProduct *= numArray[i];	
	}	
	return finalProduct;
}

function power(base, exponent) {
	if(exponent == 0) {
		return 1;
	}
	else {
		finalVal = base; 
		for(let i = 1; i < exponent; i++) {
			finalVal *= base;
		}
		return finalVal;
	}	
}

function factorial(base) {
	if (base == 0 || base == 1) {
		return 1;
	}
	else {
		finalVal = base;
		factorialCount = base-1;
		while(factorialCount > 0) {
			finalVal *= factorialCount;
			factorialCount--;	
		}	
		return finalVal;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}