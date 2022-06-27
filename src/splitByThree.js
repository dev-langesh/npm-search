function splitByThree(data, searchItem) {
  let splited = searchItem.match(/.{0,3}/g);
  splited.pop();
  const filteredData = [];
  for (let i of splited) {
    const regex = new RegExp(i, "i");
    filteredData.push(...data.filter((item) => regex.test(item)));
  }
  return [...new Set(filteredData)];
}

module.exports = { splitByThree };
