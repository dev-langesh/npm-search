function filter(data, searchItem) {
  const temp = data.slice();

  const regex = new RegExp(searchItem, "gi");

  const filteredData = temp.filter((item) => regex.test(item));

  if (filteredData.length === 0) return data;

  return filteredData;
}

module.exports = { filter };
