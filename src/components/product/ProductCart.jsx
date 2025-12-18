import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCart = ({imgSrc,title,price, onAddToCart}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ₹{price}</Card.Text>
        <Button onClick={onAddToCart} variant="primary" >ADD TO CART</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCart;
