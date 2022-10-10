import React from "react";
import CardItem from "./CardItem";

function List({
  items,
  incrementQuantitie,
  decrementQuantitie,
  sum,
  handleSumIncrement,
  handleSumDecrement,
  deleteArticle,
}) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {items.map((elt) => (
          <CardItem
            key={elt.id}
            article={elt}
            incrementQuantitie={incrementQuantitie}
            decrementQuantitie={decrementQuantitie}
            handleSumIncrement={handleSumIncrement}
            handleSumDecrement={handleSumDecrement}
            deleteArticle={deleteArticle}
          />
        ))}
      </div>
      {items.length !== 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>total:</h1>
          <h1>{sum} dt</h1>
        </div>
      ) : (
        "you do not have any articles"
      )}
    </div>
  );
}

export default List;
