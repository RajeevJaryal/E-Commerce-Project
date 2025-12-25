import { useParams } from "react-router-dom";
import products from "../data/products";
const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="container mt-4">
      <h2 className="fw-bold">{product.title}</h2>

      {/* Images */}
      <img
        src={product.images}
        alt={product.title}
        width="300"
        className="mb-3"
      />

      {/* Price */}
      <h4>Price: ₹{product.price}</h4>

      {/* Reviews */}
      <h5 className="mt-3">Reviews</h5>
      <ul>
        <li>⭐ Excellent sound quality</li>
        <li>⭐ Value for money</li>
        <li>⭐ Highly recommended</li>
      </ul>
    </div>
  );
};

export default ProductDetails;
