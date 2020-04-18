import React from "react";
import Row from "./Row";

export default function Matrix({ matrix, setCell }) {
  return (
    <div>
      {matrix.map((row, index) => (
        <Row key={`row${index}`} cells={row} y={index} setCell={setCell} />
      ))}
    </div>
  );
}
