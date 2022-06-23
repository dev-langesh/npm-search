# searchl

An extraordinary package for searching item in an array written with simple js.

## Using Package

### import filter function

```
const { filter } = require("searchl");
```

### Pass data and item to be filtered as an argument

```
filter(data , searchItem);
```

The function will return all the matched cases in an array

## Example

```

const { filter } = require("searchl");

const array = ["apple", "banana", "mango", "grapes"];

const filteredData = filter(array , "e");

console.log(filteredData);


```

### Output

```
["apple" , "grapes"]
```
