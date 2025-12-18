import ProductCart from "./ProductCart";
const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = ({onAddToCart}) => {
  
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3 mb-3 fw-bold">Music</h2>
        <div className="row">
          {productsArr.map((product, index) => (
            
            <div key={index} className="col-6 text-center mb-4 d-flex justify-content-center">
              <ProductCart
              imgSrc={product.imageUrl}
              title={product.title}
              price={product.price}
              onAddToCart={()=>onAddToCart(product)}
            />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
