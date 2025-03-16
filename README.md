# Incognito Helper: My string and array utilities

A **lightweight and powerful** JavaScript utility library that provides over **50+ functions** for working with **strings and arrays**.

## 📦 Installation

Install via **npm**:
```bash
npm install incognito-js-helper
```

## 🚀 Usage

Import the package in your JavaScript project:
```javascript
const utils = require('incognito-js-helper');
```

---

## 🔹 **String Functions**

### 1️⃣ `toUpperCase(str)`
Converts a string to **uppercase**.
```javascript
console.log(utils.toUpperCase("hello world"));  // "HELLO WORLD"
```

### 2️⃣ `toLowerCase(str)`
Converts a string to **lowercase**.
```javascript
console.log(utils.toLowerCase("HELLO WORLD"));  // "hello world"
```

### 3️⃣ `capitalize(str)`
Capitalizes **the first letter** of a string.
```javascript
console.log(utils.capitalize("hello"));  // "Hello"
```

### 4️⃣ `reverseString(str)`
Reverses the characters in a string.
```javascript
console.log(utils.reverseString("hello"));  // "olleh"
```

### 5️⃣ `removeWhitespace(str)`
Removes **leading and trailing whitespace** from a string.
```javascript
console.log(utils.removeWhitespace("  hello  "));  // "hello"
```

### 6️⃣ `replaceAll(str, find, replace)`
Replaces **all occurrences** of a substring.
```javascript
console.log(utils.replaceAll("apple banana apple", "apple", "orange"));  // "orange banana orange"
```

### 7️⃣ `countWords(str)`
Counts the number of words in a string.
```javascript
console.log(utils.countWords("Hello world!"));  // 2
```

### 8️⃣ `contains(str, substr)`
Checks if a string contains another substring.
```javascript
console.log(utils.contains("hello world", "world"));  // true
```

### 9️⃣ `truncate(str, length)`
Truncates a string to a given **length**.
```javascript
console.log(utils.truncate("Hello, this is a long text", 10));  // "Hello, thi..."
```

### 🔟 `camelCase(str)`
Converts a string to **camelCase**.
```javascript
console.log(utils.camelCase("hello world"));  // "helloWorld"
```

### 🔹 `explode(str, delimiter)`
Splits a string into an array based on a delimiter.
```javascript
console.log(utils.explode("apple,banana,grape", ","));  // ["apple", "banana", "grape"]
```

### 🔹 `implode(arr, separator)`
Joins an array into a single string.
```javascript
console.log(utils.implode(["apple", "banana", "grape"], "-"));  // "apple-banana-grape"
```
### 🔹 `startsWith(statement, word)`
checks in string if it starts with the specified string
```javascript
console.log(utils.startsWith("Hello, world!", "Hello")); // true
```
### 🔹 `endsWith(statement, string)`
checks in string if it ends with the specified string
```javascript
console.log(arrayUtils.endsWith("Hello, world!", "world!")); // true
```
### 🔹 `snakeCase(str)`
Converts a string to snake_case.
```javascript
console.log(arrayUtils.snakeCase("Hello World Example"));
// Output: "hello_world_example"
```
### 🔹 `kebabCase(str)`
Converts a string to kebab-case.
```javascript
console.log(arrayUtils.kebabCase("Hello World Example"));
// Output: "hello-world-example"
```

### 🔹 `randomString(str)`
Generates a random alphanumeric string of the given length.
```javascript
console.log(arrayUtils.randomString(10));
// Output: "aB3dE9fGhJ" (random output)
```

### 🔹 `titleCase(str)`
Converts a string to Title Case.
```javascript
console.log(arrayUtils.titleCase("hello world example"));
// Output: "Hello World Example"
```

### 🔹 `isPalindrome(str)`
Checks if a string is a palindrome.
```javascript
console.log(arrayUtils.isPalindrome("madam"));
// Output: true

console.log(arrayUtils.isPalindrome("hello"));
// Output: false
```

### 🔹 `explode(delimiter, str)`
Splits a string into an array based on the given delimiter.
```javascript
console.log(arrayUtils.explode(",", "apple,banana,grape"));
// Output: ["apple", "banana", "grape"]
```

### 🔹 `implode(delimiter, arr)`
Joins an array into a string using the given delimiter.
```javascript
console.log(arrayUtils.implode("-", ["apple", "banana", "grape"]));
// Output: "apple-banana-grape"
```

---

## 🔹 **Array Functions**

### 1️⃣ `uniqueArray(arr)`
Removes duplicate values from an array.
```javascript
console.log(utils.uniqueArray([1, 2, 2, 3, 4, 4, 5]));  // [1, 2, 3, 4, 5]
```

### 2️⃣ `flattenArray(arr)`
Flattens a **nested array**.
```javascript
console.log(utils.flattenArray([1, [2, [3, 4], 5]]));  // [1, 2, 3, 4, 5]
```

### 3️⃣ `chunkArray(arr, size)`
Splits an array into **chunks** of a given size.
```javascript
console.log(utils.chunkArray([1, 2, 3, 4, 5], 2));  // [[1, 2], [3, 4], [5]]
```

### 4️⃣ `shuffleArray(arr)`
Randomly shuffles elements in an array.
```javascript
console.log(utils.shuffleArray([1, 2, 3, 4, 5]));
```

### 5️⃣ `arrayIntersection(arr1, arr2)`
Finds **common elements** between two arrays.
```javascript
console.log(utils.arrayIntersection([1, 2, 3], [2, 3, 4]));  // [2, 3]
```

### 6️⃣ `arrayDifference(arr1, arr2)`
Finds elements **unique** to the first array.
```javascript
console.log(utils.arrayDifference([1, 2, 3], [2, 3, 4]));  // [1]
```

### 7️⃣ `sortNumeric(arr)`
Sorts an array of **numbers** in ascending order.
```javascript
console.log(utils.sortNumeric([5, 1, 4, 2]));  // [1, 2, 4, 5]
```

### 8️⃣ `sortAlphabetic(arr)`
Sorts an array of **strings** alphabetically.
```javascript
console.log(utils.sortAlphabetic(["banana", "apple", "cherry"]));  // ["apple", "banana", "cherry"]
```

### 9️⃣ `randomElement(arr)`
Returns a **random element** from an array.
```javascript
console.log(utils.randomElement(["apple", "banana", "cherry"]));
```

### 🔟 `addElement(arr, element, index)`
Adds an element to an array at a specific index.
```javascript
let arr = [1, 2, 3, 5];
console.log(arrayUtils.addElement(arr, 4, 3));
// Output: [1, 2, 3, 4, 5]

console.log(arrayUtils.addElement(arr, 6)); // Adds 6 at the end
// Output: [1, 2, 3, 4, 5, 6]

```

---

## 🏆 **Full List of Functions**

### **String Functions:**
- `toUpperCase`
- `toLowerCase`
- `capitalize`
- `reverseString`
- `removeWhitespace`
- `replaceAll`
- `countWords`
- `contains`
- `startsWith`
- `endsWith`
- `truncate`
- `camelCase`
- `snakeCase`
- `kebabCase`
- `titleCase`
- `randomString`
- `isPalindrome`
- `explode`
- `implode`

### **Array Functions:**
- `uniqueArray`
- `flattenArray`
- `chunkArray`
- `shuffleArray`
- `arrayIntersection`
- `arrayDifference`
- `sortNumeric`
- `sortAlphabetic`
- `randomElement`
- `addElement`

---

## 📜 **License**
This package is **open-source** and released under the **MIT License**.

---

This README now includes all the functions you wanted with proper descriptions and examples. Let me know if you need any refinements! 🚀


