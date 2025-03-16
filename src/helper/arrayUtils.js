const arrayUtils = {
    uniqueArray: (arr) => [...new Set(arr)],
    flattenArray: (arr) => arr.flat(Infinity),
    chunkArray: (arr, size) => arr.reduce((acc, _, i) => (i % size ? acc[acc.length - 1].push(arr[i]) : acc.push([arr[i]]), acc), []),
    shuffleArray: (arr) => arr.sort(() => Math.random() - 0.5),
    arrayIntersection: (arr1, arr2) => arr1.filter(x => arr2.includes(x)),
    arrayDifference: (arr1, arr2) => arr1.filter(x => !arr2.includes(x)),
    sortNumeric: (arr) => arr.sort((a, b) => a - b),
    sortAlphabetic: (arr) => arr.sort(),
    randomElement: (arr) => arr[Math.floor(Math.random() * arr.length)],
};
module.exports = arrayUtils;
