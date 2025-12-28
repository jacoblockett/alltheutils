# <p align="center">Alltheutils</p>

_<p align="center">A utility library with functions I'd rather not recreate if I can help it.</p>_

> 🍕 This is mostly just a util library I'm maintaining for personal projects. If you find it useful, great! If you have a specific utility you want added, just let me know and I'll try to get around to it, or you can submit a PR.

## Table of Contents

- [Strings/Text](#stringstext)

## Strings/Text

[Click to go back to main table of contents](#table-of-contents)

Utilities that analyze or modify strings.

### Methods

- [isWhitespace](#iswhitespace)
- [truncateWhitespace](#truncatewhitespace)

### `isWhitespace`

[Click to go back to strings/text table of contents](#stringstext)

Checks if the given value is a whitespace character. Whitespace characters are any character outlined on https://en.wikipedia.org/wiki/Whitespace_character.

#### Arguments:

| Name  | Type    | Description           |
| ----- | ------- | --------------------- |
| value | unknown | The value to evaluate |

#### Example:

```js
isWhitespace(" ") // true
isWhitespace("a") // false
```

### `truncateWhitespace`

[Click to go back to strings/text table of contents](#stringstext)

Truncates all multiple-sequenced whitespace characters into a single space (U+0020) character. Whitespace characters are any character outlined on https://en.wikipedia.org/wiki/Whitespace_character.

#### Arguments:

| Name | Type   | Description                              |
| ---- | ------ | ---------------------------------------- |
| str  | string | The string to truncate whitespace within |

#### Example:

```js
truncateWhitespace("       ") // " "
truncateWhitespace("   a   ") // " a "
truncateWhitespace("a a a") // "a a a"
truncateWhitespace("aaa") // "aaa"
```

---

#### <p align="center">© Jacob Lockett 2025</p>
