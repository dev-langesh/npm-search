function splitByTwo(data, searchItem) {
  let splitByTwo = searchItem.match(/.{0,2}/g);
  splitByTwo.pop();
  const filteredData = [];
  for (let i of splitByTwo) {
    const regex = new RegExp(i, "i");
    filteredData.push(...data.filter((item) => regex.test(item)));
  }
  return [...new Set(filteredData)];
}

module.exports = { splitByTwo };
