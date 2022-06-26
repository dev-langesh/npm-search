# searchl

An extraordinary package for searching items in the array.

## Features

- search for array of strings
- search for array of objects
  - search for multiple keys and values
- advanced search for numbers
  - filter numbers greater than a given number
  - filter numbers less than a given number
  - filter numbers greater than or equal to a given number
  - filter numbers less than or equal to given number
  - filter numbers equal to a given number

## Usage

### import filter function

```js
const { filter } = require("searchl");
```

# Searching in array of strings

### Pass the array which is going to be filtered and search string

```js
filter(data, searchString);
```

The function will return all the matched cases in an array

## Examples

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

const filterByNameAndAge = filter(arrayOfObj, { name: "Langesh", age: 18 });
// return [{name: "Langesh", age: 18}]
```

# Advanced search with numbers

## Options

- `$gt` greater than
- `$lt` less than
- `$gte` greater than or equal to
- `$lte` less than or equal to
- `$eq` equal to

## Examples

```js
const gt = filter(arrayOfObj, { age: { $gt: 8 } });

const lt = filter(arrayOfObj, { age: { $lt: 20 } });

const gte = filter(arrayOfObj, { age: { $gte: 18 } });

const lte = filter(arrayOfObj, { age: { $lte: 20 } });

const eq = filter(arrayOfObj, { age: { $eq: 20 } });
```
