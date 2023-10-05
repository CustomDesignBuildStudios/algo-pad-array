var {padArray, Position} = require("./padArray.js");
const shallowEqualArrays = require("shallow-equal").shallowEqualArrays;

console.log(shallowEqualArrays(padArray([1, 2, 3], 5), [1, 2, 3, null, null]))
console.log(shallowEqualArrays(padArray([1, 2, 3], 5, 'apple'), [1, 2, 3, 'apple', 'apple']))
console.log(shallowEqualArrays(padArray([1, 2, 3], 3), [1, 2, 3]))



describe("test padArray", () => {
    test("padArray([1,2,3],0) == [1, 2, 3]", () => {
        arr = padArray([1,2,3],0);
        console.log(arr);
        expect(shallowEqualArrays(arr,[1, 2, 3])).toBe(true);
    });
    test("padArray([1,2,3],3) == [1, 2, 3]", () => {
        arr = padArray([1,2,3],3);
        console.log(arr);
        expect(shallowEqualArrays(arr,[1, 2, 3])).toBe(true);
    });
    test("padArray([1,2,3],5,'apple') == [1, 2, 3, 'apple', 'apple']", () => {
        arr = padArray([1,2,3],5,'apple');
        console.log(arr);
        expect(shallowEqualArrays(arr,[1, 2, 3, 'apple', 'apple'])).toBe(true);
    });
    test("padArray([1,2,3],5) == [1, 2, 3, null, null]", () => {
        arr = padArray([1,2,3],5);
        console.log(arr);
        expect(shallowEqualArrays(arr,[1, 2, 3, null, null])).toBe(true);
    });
});
