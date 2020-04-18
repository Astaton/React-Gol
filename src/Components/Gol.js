import React, { useState, useEffect } from "react";
import Matrix from "./Matrix";

const buildMatrix = (size, random) => {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(random ? Math.floor(Math.random() * 2) : false);
    }
    matrix.push(row);
  }
  console.log(matrix);
  return matrix;
};

const checkNeighbors = (matrix, [y, x]) => {
  const neighbors = [
    [y - 1, x - 1],
    [y, x - 1],
    [y + 1, x - 1],
    [y - 1],
    [y + 1, x],
    [y - 1, x + 1],
    [y, x + 1],
    [y + 1, x + 1],
  ];
  let liveNeighbors = 0;
  neighbors.forEach(([y, x]) => {
    if (matrix[y] && matrix[y][x] && matrix[y][x] === 1) liveNeighbors += 1;
  });
  return liveNeighbors;
};

export const updateMatrix = (matrix) => {
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

export default function Gol() {
  const [matrix, setMatrix] = useState([[]]);
  useEffect(() => {
    console.log("building matrix");
    setMatrix(buildMatrix(35, true));
  }, []);

  const [run, setRun] = useState(false);
  useEffect(() => {
    let timer;
    if (run) {
      timer = setInterval(() => {
        let newMatrix = updateMatrix(matrix);
        setMatrix(newMatrix);
      }, 500);
    }
    if (!run && timer) {
      console.log("clearing timer");
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [run, matrix]);

  const setCell = ([y, x]) => {
    const copy = matrix.slice();
    copy[y][x] = matrix[y][x] === 0 ? 1 : 0;
    setMatrix(copy);
  };

  return (
    <div className="gameBoardWrapper">
      <button onClick={() => setRun(!run)}>{`${
        run ? "Stop" : "Start"
      }`}</button>
      <button onClick={() => setMatrix(buildMatrix(35, true))}>Reset</button>
      <button onClick={() => setMatrix(buildMatrix(35, false))}>Clear</button>
      <div className="gameBoard">
        <Matrix matrix={matrix} setCell={setCell} />
      </div>
    </div>
  );
}
