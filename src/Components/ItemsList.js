import React from "react";

export default function ItemsList({ items, onItemClick }) {
  // handle click function
  const handleClick = ({ target }) => {
    const item = target.value;
    onItemClick(item);
  };

  return (
    <div className="items-container">
      {/* use .map to render a button for each item in list.js */}
      {items.map((item, index) => (
        <button key={index} value={item} onClick={handleClick}>
          {item}
        </button>
      ))}
    </div>
  );
}
