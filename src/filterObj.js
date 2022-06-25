function filterObj(data, searchItem) {
  const temp = data.slice();
  let regex, filteredData;

  const key = Object.keys(searchItem);
  const value = Object.values(searchItem);

  for (let i in key) {
    const k = key[i],
      v = value[i];

    if (typeof v === "number") {
      filteredData = temp.filter((item) => item[k] === v);
      return filteredData;
    }

    regex = new RegExp(v.trim(), "i");

    filteredData = temp.filter((item) => regex.test(item[k]));

    if (filteredData.length === 0) {
      if (/\s/g.test(v)) {
        const splittedValue = v.split(" ");

        for (let i of splittedValue) {
          regex = new RegExp(i, "i");
          filteredData.push(...temp.filter((item) => regex.test(item[k])));
        }
      }
      filteredData = [...new Set(filteredData)];
    }
  }

  return filteredData;
}

module.exports = { filterObj };
