import React, { useState } from "react";
import { produce } from "../list.js";
import ItemsList from "./ItemsList.js";
import "../App.css";

export default function ShoppingList() {
  // declare and initialize state
  const [shoppingList, setShoppingList] = useState([]);

  // event handler for adding item to shopping list
  const addItem = (item) => {
    setShoppingList((prev) => {
      return [item, ...prev];
    });
  };

  // event handler for removing item from shopping list
  const removeItem = (targetIndex) => {
    setShoppingList((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <>
      <h1>Shopping List</h1>
      <p>Select an item to remove from shopping list.</p>
      {/* display added items as a list using .map */}
      <ul>
        {shoppingList.map((item, index) => (
          <li key={index} onClick={() => removeItem(index)}>
            {item}
          </li>
        ))}
      </ul>

      <h2>Add Items</h2>
      <p>Select an item to add to shopping list.</p>

      <h3>Produce</h3>
      {/* call ItemsList to display produce options  */}
      <ItemsList items={produce} onItemClick={addItem} />
    </>
  );
}
