
const stringUtils = require('./helper/stringUtils');
const arrayUtils = require('./helper/arrayUtils');
/**
 * Converts a given input to uppercase.
 * It supports string inputs and throws errors for invalid types.
 *
 * @param {string} str - The string to convert.
 * @returns {string} - The converted uppercase string.
 * @throws {TypeError} - If the input is not a string.
 */
function toUpperCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return str.toUpperCase();
}

/**
 * Converts a given input to lowercase.
 * It supports string inputs and throws errors for invalid types.
 *
 * @param {string} str - The string to convert.
 * @returns {string} - The converted lowercase string.
 * @throws {TypeError} - If the input is not a string.
 */
function toLowerCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return str.toLowerCase();
}

/**
 * Counts the number of words in a sentence.
 * It assumes words are separated by spaces.
 *
 * @param {string} sentence - The sentence to count words in.
 * @returns {number} - The number of words in the sentence.
 * @throws {TypeError} - If the input is not a string.
 */
function countWords(sentence) {
    if (typeof sentence !== 'string') {
        throw new TypeError('Input must be a string');
    }

    const words = sentence.trim().split(/\s+/);
    return words.length;
}

/**
 * Joins an array of elements into a single string with a specified separator.
 *
 * @param {Array} arr - The array to join.
 * @param {string} separator - The separator to use.
 * @returns {string} - The joined string.
 * @throws {TypeError} - If the input is not an array or a string.
 */
function implode(arr, separator = ',') {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    if (typeof separator !== 'string') {
        throw new TypeError('Separator must be a string');
    }
    return arr.join(separator);
}

/**
 * Splits a string into an array based on a delimiter.
 *
 * @param {string} str - The string to split.
 * @param {string} delimiter - The delimiter to use.
 * @returns {Array} - The array of substrings.
 * @throws {TypeError} - If the input is not a string or delimiter is not a string.
 */
function explode(str, delimiter = ',') {
    if (typeof str !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (typeof delimiter !== 'string') {
        throw new TypeError('Delimiter must be a string');
    }
    return str.split(delimiter);
}

/**
 * Adds an element to an array at a specified index.
 *
 * @param {Array} arr - The array to modify.
 * @param {*} element - The element to add.
 * @param {number} [index=arr.length] - The position to insert the element (defaults to the end).
 * @returns {Array} - The modified array with the new element.
 * @throws {TypeError} - If arr is not an array or index is not a number.
 */
function addElement(arr, element, index = arr.length) {
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    if (typeof index !== 'number' || index < 0 || index > arr.length) {
        throw new TypeError('Index must be a valid number within the array length');
    }

    arr.splice(index, 0, element);
    return arr;
}

module.exports = {
    toUpperCase,
    toLowerCase,
    countWords,
    implode,
    explode,
    addElement,
    ...stringUtils,
    ...arrayUtils
};
