// import { updateMatrix } from "./Gol";
const { updateMatrix, checkNeighbors } = require("../utils");

test("finds live neighboring cells", () => {
  let testMatrix1 = [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  expect(checkNeighbors(testMatrix1, [1, 1])).toBe(1);
  let testMatrix2 = [
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  expect(checkNeighbors(testMatrix2, [1, 1])).toBe(1);
  let testMatrix3 = [
    [0, 0, 1],
    [0, 0, 0],
    [0, 0, 0],
  ];
  expect(checkNeighbors(testMatrix3, [1, 1])).toBe(1);
  let testMatrix4 = [
    [0, 0, 0],
    [1, 0, 0],
    [0, 0, 0],
  ];
  expect(checkNeighbors(testMatrix4, [1, 1])).toBe(1);
  let testMatrix5 = [
    [0, 0, 0],
    [0, 0, 1],
    [0, 0, 0],
  ];
  expect(checkNeighbors(testMatrix5, [1, 1])).toBe(1);
  let testMatrix6 = [
    [0, 0, 0],
    [0, 0, 0],
    [1, 0, 0],
  ];
  expect(checkNeighbors(testMatrix6, [1, 1])).toBe(1);
  let testMatrix7 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 1, 0],
  ];
  expect(checkNeighbors(testMatrix7, [1, 1])).toBe(1);
  let testMatrix8 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
  ];
  expect(checkNeighbors(testMatrix8, [1, 1])).toBe(1);
});

test("Makes center cell live when 3 neighbors are alive", () => {
  let testMatrix1 = [
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0],
  ];
  let updatedMatrix = updateMatrix(testMatrix1);
  expect(updatedMatrix[1][1]).toBe(1);
  let testMatrix2 = [
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 0],
  ];
  updatedMatrix = updateMatrix(testMatrix2);
  expect(updatedMatrix[1][1]).toBe(1);
});

test("Makes wrapped side live when 3 wrapping neighbors are live", () => {
  let testMatrix;
  let updatedMatrix;
  let result;
  testMatrix = [
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0],
  ];
  result = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];
  updatedMatrix = updateMatrix(testMatrix);
  expect(updatedMatrix).toEqual(result);
  testMatrix = [
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  result = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  updatedMatrix = updateMatrix(testMatrix);
  expect(updatedMatrix).toEqual(result);
});
