import React from "react";
import Cell from "./Cell";

export default function Row({ cells, y, setCell }) {
  return (
    <div className="row">
      {cells.map((cell, index) => (
        <Cell
          key={`cell${index}`}
          propsStatus={cell}
          yx={[y, index]}
          setCell={setCell}
        />
      ))}
    </div>
  );
}
