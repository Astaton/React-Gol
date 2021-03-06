const buildMatrix = (size, random) => {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(random ? Math.floor(Math.random() * 2) : false);
    }
    matrix.push(row);
  }
  return matrix;
};

const checkNeighbors = (matrix, [y, x]) => {
  const neighbors = [
    [y - 1, x - 1],
    [y - 1, x],
    [y - 1, x + 1],
    [y, x - 1],
    [y, x + 1],
    [y + 1, x - 1],
    [y + 1, x],
    [y + 1, x + 1],
  ];
  let liveNeighbors = 0;
  neighbors.forEach(([y, x]) => {
    let wrappedY = y;
    let wrappedX = x;
    if (y < 0 || y > matrix.length - 1) {
      wrappedY = y < 0 ? matrix.length - 1 : 0;
    }
    if (x < 0 || x > matrix.length - 1) {
      wrappedX = x < 0 ? matrix.length - 1 : 0;
    }
    if (matrix[wrappedY][wrappedX] === 1) liveNeighbors += 1;
  });
  return liveNeighbors;
};

const updateMatrix = (matrix) => {
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      const neighborCount = checkNeighbors(matrix, [i, j]);
      let cellStatus = 0;
      if (neighborCount === 3) {
        cellStatus = 1;
      } else if (neighborCount === 2) {
        cellStatus = matrix[i][j];
      }
      row.push(cellStatus);
    }
    newMatrix.push(row);
  }
  return newMatrix;
};

module.exports = {
  buildMatrix,
  updateMatrix,
  checkNeighbors,
};
