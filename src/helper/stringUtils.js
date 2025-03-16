const stringUtils = {
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
    reverseString: (str) => str.split('').reverse().join(''),
    removeWhitespace: (str) => str.trim(),
    replaceAll: (str, find, replace) => str.split(find).join(replace),
    contains: (str, substr) => str.includes(substr),
    startsWith: (str, prefix) => str.startsWith(prefix),
    endsWith: (str, suffix) => str.endsWith(suffix),
    truncate: (str, length) => str.length > length ? str.slice(0, length) + '...' : str,
    camelCase: (str) => str.replace(/^\w|[A-Z]|\b\w/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, ''),
    snakeCase: (str) => str.toLowerCase().replace(/\s+/g, '_'),
    kebabCase: (str) => str.toLowerCase().replace(/\s+/g, '-'),
    titleCase: (str) => str.replace(/\b\w/g, (char) => char.toUpperCase()),
    randomString: (length = 10) => Math.random().toString(36).substr(2, length),
    isPalindrome: (str) => str === str.split('').reverse().join(''),
};
module.exports = stringUtils;
