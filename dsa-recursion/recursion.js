/**
 * product: Calculate the product of an array of numbers.
 *
 * @param {Array} nums - An array of numbers.
 * @param {i} - The index to jump through
 * @returns {number} - The product of the numbers in the array.
 *
 * @example
 * product([2, 3, 4])   // 24
 */
function product(nums, i = 0) {
	// base case
	if (nums.length === i) {
		return 1;
	}
	// recusion call with new index
	return nums[i] * product(nums, i + 1);
}

/**
 * longest: Return the length of the longest word in an array of words.
 *
 * @param {Array} words - An array of words.
 * @param {i} - The index to jump from
 * @returns {number} - The length of the longest word.
 * @example
 * longest(["hello", "hi", "hola"])  // 5
 */
function longest(words, i = 0) {
	// console.log("Words:",words);
	// Base case: return 0 when we reach the end of the array
	if (i === words.length) {
		// console.log("END TIME TO REWIND");
		return 0;
	}

	const currentWord = words[i];
	// console.log("CURRENT WORD:", currentWord, " - @ index:", i);
	// Recursive call for the next word in the array
	const longestLength = longest(words, i + 1);
	// console.log("current word length:",currentWord.length, " > Longest length:", longestLength, " ?");
	// Calculate the maximum length between the current word and the rest of the array
	return Math.max(currentWord.length, longestLength);
}
/**
 * everyOther: Return a string with every other letter.
 *
 * @param {string} str - The input string.
 * @param {number} i - The index to jump through
 * @returns {string} - A new string with every other letter.
 * @example
 * everyOther("hello")  // "hlo"
 */
function everyOther(str, i = 0) {
	// Base case:
	if (i > str.length || str[i] == undefined) return "";
	// Recursion Call with new index
	return str[i] + everyOther(str, i + 2);
}

/**
 * isPalindrome: Checks whether a string is a palindrome or not.
 *
 * @param {string} str - The input string.
 * @param {number} startIndx - The starting index for comparison (default is 0).
 * @param {number} endIndx - The ending index for comparison (default is str.length-1).
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 * @example
 * isPalindrome("tacocat")  // true
 * isPalindrome("tacodog")  // false
 */
function isPalindrome(str, startIndx = 0, endIndx = str.length - 1) {
	// Base case: If the start index is greater than or equal to the end index, it's a palindrome since we reached the middle without hitting a false
	if (startIndx >= endIndx) {
		return true;
	}

	// Check if characters at start and end indices are equal
	if (str[startIndx] !== str[endIndx]) {
		return false;
	}

	// Recursively check the remaining substring
	return isPalindrome(str, startIndx + 1, endIndx - 1);
}

/**
 * findIndex: Return the index of val in arr (or -1 if val is not present).
 *
 * @param {Array} arr - The input array.
 * @param {*} val - The value to search for.
 * @param {number} i - Current index (default is 0).
 * @returns {number} - The index of val in arr, or -1 if not present.
 * @example
 * let animals = ["duck", "cat", "pony"];
 *
 * findIndex(animals, "cat");  // 1
 * findIndex(animals, "porcupine");   // -1
 */
function findIndex(arr, val, i = 0) {
	// Base Case: If we reach the end of the array without finding the value
	if (i === arr.length) {
		return -1;
	}

	// Base Case: If the current element is equal to the value
	if (arr[i] === val) {
		return i;
	}

	// Recursive Call: Continue searching in the rest of the array
	return findIndex(arr, val, i + 1);
}

/**
 * revString: Return a copy of a string, but in reverse.
 *
 * @param {string} str - The input string.
 * @param {number} i - Current index (default is str.length - 1).
 * @returns {string} - The reversed string.
 * @example
 * revString("porcupine") // 'enipucrop'
 */
function revString(str, i = str.length - 1) {
	// Base Case: If the index is less than 0, return an empty string
	if (i < 0) {
		return "";
	}

	// Recursive Call: Append the character at the current index and move to the previous index
	return str[i] + revString(str, i - 1);
}

/**
 * gatherStrings: Given an object, return an array of all of the string values.
 *
 * @param {Object} obj - The input object.
 * @param {Array} keys - Array of keys (default is Object.keys(obj)).
 * @param {number} i - Current index (default is 0).
 * @returns {Array} - An array containing all the string values from the object.
 * @example
 * let nestedObj = { firstName: "Lester",
 * 					favoriteNumber: 22,
 * 					moreData: { lastName: "Testowitz" },
 * 					funFacts: { moreStuff: { anotherNumber: 100, deeplyNestedString: { almostThere: { success: "you made it!" } } },
 * 					favoriteString: "nice!" } };
 * gatherStrings(nestedObj) // ["Lester", "Testowitz", "you made it!", "nice!"];
 */
function gatherStrings(obj, keys = Object.keys(obj), i = 0) {
	// Base Case: If the index is equal to the length of keys, return an empty array
	if (i === keys.length) {
		return [];
	}
	let key = keys[i];
	let val = obj[key];
	// Recursive Call:
	// console.log("Key:", key, "Val:", val, "Type of Val:", typeof val);
	if (typeof val === "string") {
		// console.log("string...");
		return [val].concat(gatherStrings(obj, keys, i + 1));
	} else if (typeof val === "object") {
		// console.log("object...");
		return gatherStrings(val).concat(gatherStrings(obj, keys, i + 1));
	} else {
		return gatherStrings(obj, keys, i + 1);
	}
}

/**
 * binarySearch: Given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present).
 *
 * @param {Array} arr - The sorted array of numbers.
 * @param {*} val - The value to search for.
 * @param {number} start - Start index (default is 0).
 * @param {number} end - End index (default is arr.length - 1).
 * @returns {number} - The index of val in arr, or -1 if not present.
 * @example
 * binarySearch([1,2,3,4],1) // 0
 * binarySearch([1,2,3,4],3) // 2
 * binarySearch([1,2,3,4],5) // -1
 */
function binarySearch(arr, val, start = 0, end = arr.length - 1) {
	console.log(
		"Array:",
		arr,
		"Were looking for a '",
		val,
		"' | Start:",
		start,
		"End: ",
		end,
		"|"
	);
	// Recursive Implementation
	// Base Case: we haven't found it yet the start and end indexes have crossed, return -1 for not found
	if (start > end) {
		return -1;
	}
	let midIndx = Math.floor((start + end) / 2);
	// Base Case: if we found the middle val
	if (arr[midIndx] === val) {
		return midIndx;
	}
	// Recursive Call: Search in the appropriate half of the array
	if (arr[midIndx] > val) {
		return binarySearch(arr, val, start, midIndx - 1);
	} else {
		return binarySearch(arr, val, midIndx + 1, end);
	}
}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
