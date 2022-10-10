import React, { useState } from "react";
import { articles } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/List";
function App() {
  const [items, setItems] = useState(articles);
  let [sum, setTotal] = useState(0);
  const incrementQuantitie = (id) => {
    setItems(
      items.map((elt) => {
        if (elt.id === id) {
          return { ...elt, qte: elt.qte + 1 };
        } else {
          return elt;
        }
      })
    );
  };
  const decrementQuantitie = (id) => {
    setItems(
      items.map((elt) => {
        if (elt.id === id && elt.qte > 0) {
          return { ...elt, qte: elt.qte - 1 };
        } else {
          return elt;
        }
      })
    );
  };
  const handleSumIncrement = (artcile) => {
    setTotal((sum = sum + artcile.price));
  };
  const handleSumDecrement = (article) => {
    if (article.qte > 0) {
      setTotal((sum = sum - article.price));
    }
  };

  const deleteArticle = (article) => {
    setItems(items.filter((elt) => elt.id !== article.id));
    setTotal((sum = sum - article.price * article.qte));
  };
  return (
    <div>
      <List
        items={items}
        incrementQuantitie={incrementQuantitie}
        decrementQuantitie={decrementQuantitie}
        sum={sum}
        handleSumIncrement={handleSumIncrement}
        handleSumDecrement={handleSumDecrement}
        deleteArticle={deleteArticle}
      />
    </div>
  );
}

export default App;
