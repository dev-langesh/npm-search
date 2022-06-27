const { filter } = require("../..");
const { arrayOfStrings } = require("./data");

describe("Searching in array", () => {
  test("basic test with array", () => {
    expect(filter(arrayOfStrings, "l")).toContain(
      "langesh",
      "full stack developer"
    );
  });

  test("searchvalue with spaces", () => {
    expect(filter(arrayOfStrings, "a a l s")).toContain(
      "langesh",
      "coimbatore",
      "am",
      "a",
      "full stack developer",
      "this",
      "is"
    );
  });

  test("advanced without space", () => {
    const array = ["This", "is", "Langesh", "from", "India"];
    expect(filter(array, "thisislangesh")).toContain("Langesh", "This", "is");
  });

  test("test with space", () => {
    const array = ["This", "is", "Langesh", "from", "India"];
    expect(filter(array, "thi lan ges")).toMatchObject(["This", "Langesh"]);
  });
});
