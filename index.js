const { filterArray } = require("./src/filterArray");
const { filterObj } = require("./src/filterObj");

function filter(data, searchItem) {
  if (typeof searchItem === "object") return filterObj(data, searchItem);
  return filterArray(data, searchItem);
}

module.exports = { filter };
