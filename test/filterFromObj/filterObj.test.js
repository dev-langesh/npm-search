const { filter } = require("../..");
const { arrayOfObjects } = require("./data");

describe("searching in array of objects", () => {
  test("basic test for searching name", () => {
    expect(filter(arrayOfObjects, { name: "l" })).toMatchObject([
      { name: "langesh", age: 18 },
    ]);
  });

  test("advanced search by name", () => {
    expect(filter(arrayOfObjects, { name: " l a j n" })).toMatchObject([
      { name: "langesh", age: 18 },
      { name: "Isac", age: 20 },
      { name: "Newton", age: 40 },
      { name: "Jack", age: 27 },
    ]);
  });

  test("search by age", () => {
    expect(filter(arrayOfObjects, { age: 18 })).toMatchObject([
      { name: "langesh", age: 18 },
    ]);
  });

  test("search with multiple object items", () => {
    expect(filter(arrayOfObjects, { name: "Lang esh", age: 18 })).toMatchObject(
      [{ name: "langesh", age: 18 }]
    );
  });
});
