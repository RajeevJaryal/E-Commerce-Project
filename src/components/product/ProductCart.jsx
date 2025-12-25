import { Link } from "react-router-dom";

const ProductCart = ({ imgSrc, title, price, onAddToCart, id }) => {
  return (
    <div
      className="card shadow-sm h-100"
      style={{ width: "18rem", borderRadius: "12px" }}
    >
      {/* Image + Title Clickable */}
      <Link
        to={`/product/${id}`}
        className="text-decoration-none text-dark"
      >
        <div
          style={{
            height: "220px",
            overflow: "hidden",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
          className="d-flex align-items-center justify-content-center bg-light"
        >
          <img
            src={imgSrc}
            alt={title}
            className="img-fluid mt-5"
            style={{ maxHeight: "100%", objectFit: "contain" }}
          />
        </div>

        <div className="card-body text-center">
          <h6 className="fw-bold text-truncate">{title}</h6>
          <p className="text-success fw-semibold mb-2">₹{price}</p>
        </div>
      </Link>

      {/* Button */}
      <div className="px-3 pb-3 mt-auto">
        <button
          className="btn btn-outline-primary w-100"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
