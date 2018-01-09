const mergesort = require("../lib/MergeSort");
const expect = require("chai").expect;

describe("mergesort", () => {
  it ("should sort this array", () => {
    let arr = [2,4,3,10,7,5,9];
    mergesort(arr);
    console.log(arr);
    expect(arr).to.deep.equal([2,3,4,5,7,9,10]);
  });
});
