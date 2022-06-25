# searchl

An extraordinary package for searching items in the array.

## Features

- search for array of strings
- search for array of objects

## Usage

### import filter function

```js
const { filter } = require("searchl");
```

# Searching in array of strings

### pass data array and search string

```js
filter(data, searchString);
```

The function will return all the matched cases in an array

## Example

```js
const { filter } = require("searchl");

const array = ["This", "is", "Langesh", "from", "India"];

const filteredData = filter(array, "i ");

console.log(filteredData);
```

### Output

```js
["This", "is", "India"];
```

# Searching in array of objects

```js
const arrayOfObj = [
  { name: "Langesh", age: 18 },
  { name: "Peter", age: 18 },
];

const filterByName = filter(arrayOfObj, { name: "l" });
// return [{name: "Langesh", age: 18}]

const filterByName = filter(arrayOfObj, { name: "e" });
// return [{name: "Langesh", age: 18}, {name: "Peter", age: 18}]

const filterByAge = filter(arrayOfObj, { age: 18 });
// return [{name: "Langesh", age: 18}, {name: "Peter", age: 18}]
```
