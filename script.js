function letterCombinations(digits) {
  //Complete the function
	const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  // Create an array to store the combinations
  let combinations = [];

  // Recursive function to generate combinations
  function backtrack(combination, nextDigits) {
    // Base case: if there are no more digits to check
    if (nextDigits.length === 0) {
      // Add the combination to the array
      combinations.push(combination);
    }
    // Recursive case: iterate over the letters corresponding to the current digit
    else {
      const digit = nextDigits[0];
      const letters = digitToLetters[digit];

      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        // Append the current letter to the combination and move to the next digit
        backtrack(combination + letter, nextDigits.slice(1));
      }
    }
  }

  // Start the backtracking process
  if (digits.length !== 0) {
    backtrack('', digits);
  }

  // Return the sorted array of combinations
  return combinations.sort();
}

module.exports = letterCombinations;