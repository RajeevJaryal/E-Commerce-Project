import CloseButton from "react-bootstrap/CloseButton";

const Cart = ({ close, cartData }) => {
  return (
    <>
      <div
        className="bg-white position-fixed end-0 p-3"
        style={{
          top: "80px",
          width: "400px",
          border: "2px solid black",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <CloseButton onClick={close} />
        <h3 className="text-center">Cart</h3>
        {cartData.map((element, index) => {
          return (
            <div key={index} className="d-flex">
              <img
                src={element.imageUrl}
                alt={element.title}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                }}
              />
              <h4>{element.title}</h4>
              <p>{element.price}</p>
              <p>{element.quantity}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Cart;
