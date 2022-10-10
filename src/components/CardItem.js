import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItem({
  article,
  incrementQuantitie,
  decrementQuantitie,
  handleSumIncrement,
  handleSumDecrement,
  deleteArticle,
}) {
  const handleIncrement = () => {
    incrementQuantitie(article.id);
    handleSumIncrement(article);
  };
  const handlleDecrement = () => {
    decrementQuantitie(article.id);
    handleSumDecrement(article);
  };
  const handleDelete=()=>{
    deleteArticle(article)
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={article.image} />
      <Card.Body>
        <Card.Title>{article.name}</Card.Title>
        <Card.Text>{article.price} dt</Card.Text>
        <div>
          <Button variant="primary" onClick={handleIncrement}>
            +
          </Button>
          <span>{article.qte}</span>
          <Button variant="primary" onClick={handlleDecrement}>
            -
          </Button>
        </div>
        <Button variant="danger" onClick={handleDelete}>delete</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
