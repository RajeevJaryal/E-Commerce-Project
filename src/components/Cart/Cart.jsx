const Cart = ({ cartData, close, purchase }) => {
  const totalAmount = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const purchaseHandler=()=>{
    if(totalAmount===0){
      return alert("You have Nothing in Cart , Add some products to purchase !");
    }
    return alert("Thanks for the purchase");
  }
  const handler=()=>{
    purchase();
    purchaseHandler();
  }

  return (
    <div
      className="position-fixed top-0 end-0 bg-white p-4"
      style={{
        width: "500px",
        height: "100vh",
        borderLeft: "2px solid black",
        overflowY: "auto",
        zIndex: 1000,
      }}
    >

      <div className="text-end">
        <button className="btn btn-outline-dark" onClick={close}>
          X
        </button>
      </div>

      <h2 className="text-center fw-bold mb-4">CART</h2>

      <div className="d-flex justify-content-between fw-bold border-bottom pb-2 mb-3">
        <span style={{ width: "45%" }}>ITEM</span>
        <span style={{ width: "20%" }}>PRICE</span>
        <span style={{ width: "35%" }}>QUANTITY</span>
      </div>

     
      {cartData.map((item, index) => (
        <div
          key={index}
          className="d-flex align-items-center justify-content-between border-bottom py-3"
        >
          <div className="d-flex align-items-center" style={{ width: "45%" }}>
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "10px",
                marginRight: "10px",
              }}
            />
            <span>{item.title}</span>
          </div>

          <div style={{ width: "20%" }}>₹{item.price}</div>
          <div
            className="d-flex align-items-center gap-2"
            style={{ width: "35%" }}
          >
            <input
              type="number"
              className="form-control text-center"
              style={{ width: "60px" }}
              value={item.quantity}
              readOnly
            />
            <button className="btn btn-danger btn-sm">REMOVE</button>
          </div>
        </div>
      ))}

      <h4 className="text-end mt-4 fw-bold">
        Total ₹{totalAmount.toFixed(2)}
      </h4>
      <div className="text-center mt-4">
        <button className="btn btn-info text-white px-5 py-2 fw-bold" onClick={handler}>
          PURCHASE
        </button>
      </div>
    </div>
  );
};

export default Cart;
