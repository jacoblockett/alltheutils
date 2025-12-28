const WHITESPACE = {
	"\u0009": true, // CHARACTER_TABULATION
	"\u000A": true, // LINE_FEED
	"\u000B": true, // LINE_TABULATION
	"\u000C": true, // FORM_FEED
	"\u000D": true, // CARRIAGE_RETURN
	"\u0020": true, // SPACE
	"\u0085": true, // NEXT_LINE
	"\u00A0": true, // NO_BREAK_SPACE
	"\u1680": true, // OGHAM_SPACE_MARK
	"\u2000": true, // EN_QUAD
	"\u2001": true, // EM_QUAD
	"\u2002": true, // EN_SPACE
	"\u2003": true, // EM_SPACE
	"\u2004": true, // THREE_PER_EM_SPACE
	"\u2005": true, // FOUR_PER_EM_SPACE
	"\u2006": true, // SIX_PER_EM_SPACE
	"\u2007": true, // FIGURE_SPACE
	"\u2008": true, // PUNCTUATION_SPACE
	"\u2009": true, // THIN_SPACE
	"\u200A": true, // HAIR_SPACE
	"\u2028": true, // LINE_SEPARATOR
	"\u2029": true, // PARAGRAPH_SEPARATOR
	"\u202F": true, // NARROW_NO_BREAK_SPACE
	"\u205F": true, // MEDIUM_MATHEMATICAL_SPACE
	"\u3000": true, // IDEOGRAPHIC_SPACE
	"\u180E": true, // MONGOLIAN_VOWEL_SEPARATOR
	"\u200B": true, // ZERO_WIDTH_SPACE
	"\u200C": true, // ZERO_WIDTH_NON_JOINER
	"\u200D": true, // ZERO_WIDTH_JOINER
	"\u2060": true, // WORD_JOINER
	"\uFEFF": true // ZERO_WIDTH_NON_BREAKING_SPACE
}

/**
 * Checks if the given value is a whitespace character. Whitespace characters are any
 * character outlined on https://en.wikipedia.org/wiki/Whitespace_character.
 *
 * @param {unknown} value The value to evaluate
 * @returns {boolean}
 */
export default function isWhitespace(value) {
	return !!WHITESPACE[value]
}
