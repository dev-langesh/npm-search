function filter(data, searchItem) {
  const temp = data.slice();

  const regex = new RegExp(searchItem.trim(), "gi");

  let filteredData = [];
  filteredData = temp.filter((item) => regex.test(item));

  if (filteredData.length === 0) {
    if (/\s/g.test(searchItem)) {
      const splittedValue = searchItem.split(" ");

      for (let i of splittedValue) {
        const reg = new RegExp(i, "gi");
        filteredData.push(...temp.filter((item) => reg.test(item)));
      }
    }
  }

  filteredData = [...new Set(filteredData)];

  return filteredData;
}

module.exports = { filter };
