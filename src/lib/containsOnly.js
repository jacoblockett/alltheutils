import graphemes from "./graphemes.js"
import toHashTable from "./toHashTable.js"

/**
 * Checks if the provided string **only** contains characters from the provided
 * string of allowed characters.
 *
 * @param {string} str
 * @param {string} allowedChars
 * @returns {boolean}
 */
export default function containsOnly(str, allowedChars) {
	if (typeof str !== "string") throw new TypeError(`Expected str to be a string, instead got ${typeof str}`)
	if (typeof allowedChars !== "string")
		throw new TypeError(`Expected allowedChars to be a string, instead got ${typeof allowedChars}`)
	if (!allowedChars.length)
		throw new Error(`Expected allowedChars to have at least one character, instead got an empty string`)

	str = graphemes(str)
	allowedChars = toHashTable(allowedChars)

	for (const char of str) {
		if (!allowedChars[char]) return false
	}

	return true
}
