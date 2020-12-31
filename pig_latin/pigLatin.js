function translate(aString) {
	let vowel_re = /^[aeiou].*/;
	let consonant_re = /^[^aeiou].*/;
	let multiple_consonant_re = /^[^aeiou]{2,3}.*/;
	let words = aString.split(" ");
	let translated_words = ""; 
	
	words.forEach(word => console.log(word));

	for(let i = 0; i < words.length; i++) {
		test_word = words[i];
		if(vowel_re.test(test_word)) {
			console.log("Found vowel_re");
			translated_words += test_word + 'ay ';
			// return aString + aString[0] + 'y';
		}
		else if(multiple_consonant_re.test(test_word)) {
			console.log("Found multiple consonants");
			let consonant_re = /^[^aeiou]{2,3}/;
			let consonants = test_word.match(consonant_re);
			// console.log(`Match: ${match_pos}`);
			let consonant_end = consonants.length + 1;
			if(!vowel_re.test(test_word.slice(consonant_end))) {
				consonant_end++;
			}
			translated_words += test_word.slice(consonant_end) + consonants + 'ay ';
		}
		else if(consonant_re.test(test_word)) {
			console.log("Found consonant_re");
			translated_words += test_word.slice(1) + test_word[0] + 'ay ';
			// return aString.slice(1) + aString[0] + 'ay';
		}
	}

	return translated_words.slice(0, -1);
}


module.exports = {
	translate
}

