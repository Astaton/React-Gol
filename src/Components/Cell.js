import React from "react";

export default function Cell({ propsStatus, setCell, yx }) {
  return (
    <div
      onClick={() => setCell(yx)}
      className={`cell ${propsStatus ? "live" : "dead"}`}
    ></div>
  );
}
