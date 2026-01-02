import graphemes from "./graphemes.js"

/**
 * Converts the given value into a hash table (`Object`) using the given
 * value as the value to each key (default: `true`).
 *
 * @param {any} data The data to derive the hash from
 * @param {any} [value] The value to set each key derived from the data argument (default: `true`)
 * @returns {object}
 */
export default function toHashTable(data, value = true) {
	const hash = {}

	if (Object.prototype.toString.call(data) === "[object Object]") {
		for (const key of Object.keys(data)) {
			hash[key] = value
		}
	} else if (typeof data === "string") {
		for (const char of graphemes(data)) {
			hash[char] = value
		}
	} else if (Array.isArray(data)) {
		for (const item of data) {
			hash[item] = value
		}
	} else {
		hash[data] = value
	}

	return hash
}
