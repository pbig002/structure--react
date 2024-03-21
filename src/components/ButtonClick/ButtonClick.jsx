import React from "react";

export default function ButtonClick({ children }) {
  function handleClick() {
    console.log("2");
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
