function translate(aString) {
	let vowel_re = /^[aeiou].*/;
	let consonant_re = /^[^aeiou].*/;
	let multiple_consonant_re = /^[^aeiou]{2,3}.*/;
	let q_re = /^[qu].*/;
	let consonant_q_re = /^[^aeiou]+[qu].*/;
	let words = aString.split(" ");
	let translated_words = ""; 
	
	for(let i = 0; i < words.length; i++) {
		test_word = words[i];
		if(vowel_re.test(test_word)) {
			translated_words += test_word + 'ay ';
		}
		else if(q_re.test(test_word)) {
			translated_words += test_word.slice(2) + test_word[0] + test_word[1] + 'ay ';
		}
		else if(consonant_q_re.test(test_word)) {
			let consonant_prefix_re = /^[^aeiouq]+/;	
			let consonants = test_word.match(consonant_prefix_re);
			let consonant_end = consonants.length + 2;
			translated_words += test_word.slice(consonant_end) + consonants + 'qu' + 'ay ';
		}
		else if(multiple_consonant_re.test(test_word)) {
			let consonant_re = /^[^aeiou]{2,3}/;
			let consonants = test_word.match(consonant_re);
			let consonant_end = consonants.length + 1;
			if(!vowel_re.test(test_word.slice(consonant_end))) {
				consonant_end++;
			}
			translated_words += test_word.slice(consonant_end) + consonants + 'ay ';
		}
		else if(consonant_re.test(test_word)) {
			translated_words += test_word.slice(1) + test_word[0] + 'ay ';
		}
	}

	return translated_words.slice(0, -1);
}


module.exports = {
	translate
}

