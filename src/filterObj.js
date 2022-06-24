function filterObj(data, searchItem) {
  const temp = data.slice();
  let regex, filteredData;

  const key = Object.keys(searchItem)[0];
  const value = Object.values(searchItem)[0];

  if (typeof value === "number") {
    filteredData = temp.filter((item) => item[key] === value);
    return filteredData;
  }

  regex = new RegExp(value.trim(), "i");

  filteredData = temp.filter((item) => regex.test(item[key]));

  if (filteredData.length === 0) {
    if (/\s/g.test(value)) {
      const splittedValue = value.split(" ");

      for (let i of splittedValue) {
        regex = new RegExp(i, "i");
        filteredData.push(...temp.filter((item) => regex.test(item[key])));
      }
    }
    filteredData = [...new Set(filteredData)];
  }

  return filteredData;
}

module.exports = { filterObj };
