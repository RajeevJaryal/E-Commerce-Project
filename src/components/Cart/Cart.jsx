const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];
const Cart = ({ close }) => {
  return (
    <>
      <div className="bg-white position-fixed top-0 end-0 p-3" style={{ width: "400px", border: "2px solid black", maxHeight: "100vh", overflowY: "auto" }}>
        <button onClick={close}>Close</button>
        {cartElements.map((element, index) => {
          return (
            <div key={index}>
              <h4>{element.title}</h4>
              <p>{element.price}</p>
              <img src={element.imageUrl} />
              <p>{element.quantity}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Cart;
