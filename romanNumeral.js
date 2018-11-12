/* Function declaration for converting a number into a roman numeral */
function convertToRoman(num) {
	/* Exceptions */
	if(num <= 0 || num >= 4000) { return console.log(`Number out of range.`); }

	/* Declaring a constant with all the symbols of Roman Numerals */
 	const romanNumerals = {
 		1: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
 		2: ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
 		3: ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
 		4: ["M", "MM", "MMM"]
 	}
 	/* Declaring an array for the converted number */
 	let numberConverted = "";
 	/* Inserting the argument into an array and then splitting it */
 	let inputNum = num.toString();
 	/* Setting a variable with the length of the array inputNum */
 	let inputLength = inputNum.length;

 	/* Iterating through the inputNum array for converting the number into a
 	   Roman Numeral */
 	for(let i = 1; i <= inputLength; i++) {
 		if(Number(inputNum[inputLength-i]) !== 0) {
 			numberConverted = romanNumerals[i][inputNum[inputLength-i]-1] + numberConverted;
 		}
 	}

 /* Result output */
 return numberConverted;

}

/* Function call */
console.log(convertToRoman(400));