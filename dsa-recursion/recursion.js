/** 
 * product: Calculate the product of an array of numbers.
 * 
 * @param {Array} nums - An array of numbers.
 * @returns {number} - The product of the numbers in the array.
 * 
 * @example 
 * product([2, 3, 4])   // 24
 */
function product(nums, i = 0) {
  // base case
  if (nums.length === i ) {
    return 1; 
  }
  // recusion call with new index
  return nums[i] * product(nums, i + 1);
}


/** 
 * longest: Return the length of the longest word in an array of words.
 * 
 * @param {Array} words - An array of words.
 * @returns {number} - The length of the longest word.
 * @example
 * longest(["hello", "hi", "hola"])  // 5
 */
function longest(words, i = 0) {
  console.log("Words:",words);
  // Base case: return 0 when we reach the end of the array
  if (i === words.length) {
    console.log("END TIME TO REWIND");
    return 0;
  }

  const currentWord = words[i];
  console.log("CURRENT WORD:", currentWord, " - @ index:", i);
  // Recursive call for the next word in the array
  const longestLength = longest(words, i + 1);
  console.log("current word length:",currentWord.length, " > Longest length:", longestLength, " ?");
  // Calculate the maximum length between the current word and the rest of the array
  return Math.max(currentWord.length, longestLength);
}
/** 
 * everyOther: Return a string with every other letter.
 * 
 * @param {string} str - The input string.
 * @returns {string} - A new string with every other letter.
 */
function everyOther(str) {
  // Implementation
}

/** 
 * isPalindrome: Checks whether a string is a palindrome or not.
 * 
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  // Implementation
}

/** 
 * findIndex: Return the index of val in arr (or -1 if val is not present).
 * 
 * @param {Array} arr - The input array.
 * @param {*} val - The value to search for.
 * @returns {number} - The index of val in arr, or -1 if not present.
 */
function findIndex(arr, val) {
  // Implementation
}

/** 
 * revString: Return a copy of a string, but in reverse.
 * 
 * @param {string} str - The input string.
 * @returns {string} - The reversed string.
 */
function revString(str) {
  // Implementation
}

/** 
 * gatherStrings: Given an object, return an array of all of the string values.
 * 
 * @param {Object} obj - The input object.
 * @returns {Array} - An array containing all the string values from the object.
 */
function gatherStrings(obj) {
  // Implementation
}

/** 
 * binarySearch: Given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present).
 * 
 * @param {Array} arr - The sorted array of numbers.
 * @param {*} val - The value to search for.
 * @returns {number} - The index of val in arr, or -1 if not present.
 */
function binarySearch(arr, val) {
  // Implementation
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
