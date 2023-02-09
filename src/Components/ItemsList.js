import React from "react";

export default function ItemsList({ items }) {
  return (
    <div>
      {/* use .map to render a button for each item in list.js */}
      {items.map((item, index) => (
        <button key={index} value={item}>
          {item}
        </button>
      ))}
    </div>
  );
}
