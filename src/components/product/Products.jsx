import ProductCart from "./ProductCart";
import products from "../data/products";

const Products = ({ onAddToCart }) => {
  return (
    <div className="container">
      <h2 className="text-center mt-3 mb-3 fw-bold">Music</h2>

      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-6 text-center mb-4 d-flex justify-content-center"
          >
            
              <ProductCart
              id={product.id}
                imgSrc={product.images}
                title={product.title}
                price={product.price}
                onAddToCart={() => onAddToCart(product)}
              />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
