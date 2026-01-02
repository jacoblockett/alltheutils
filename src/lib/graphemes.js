/**
 * Splits the given string by grapheme rather than character.
 *
 * @param {string} str
 * @returns {string[]}
 */
export default function graphemes(str) {
	return [...new Intl.Segmenter().segment(str)].map(({ segment }) => segment)
}
