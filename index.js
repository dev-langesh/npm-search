function filterData(data, searchItem) {
  const temp = data.slice();

  const regex = new RegExp(searchItem, "gi");

  const filteredData = temp.filter((item) => regex.test(item));

  if (filterData.length === 0) return data;

  return filteredData;
}

module.exports = { filterData };
