import isWhitespace from "./isWhitespace.js"

/**
 * Truncates all multiple-sequenced whitespace characters into a single space (U+0020)
 * character. Whitespace characters are any character outlined on
 * https://en.wikipedia.org/wiki/Whitespace_character.
 *
 * @param {string} str The string to truncate whitespace within
 * @returns {string}
 */
export default function truncateWhitespace(str) {
	if (typeof str !== "string") throw new TypeError(`Expected str to be a string, instead got ${typeof str}`)

	let n = ""

	for (let c of str) {
		const p = n[n.length - 1]

		if (isWhitespace(c)) {
			if (p === "\u0020") continue

			n = `${n}\u0020`
			continue
		}

		n = `${n}${c}`
	}

	return n
}
