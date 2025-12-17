import { useState } from "react";
import "./App.css";
import Products from "./components/product/Products";
import HeaderSection from "./components/header/HeaderSection";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartState, setCartState] = useState(false);

  const cartOpenHandler = () => {
    setCartState(true);
  };
  const cartCloseHandler = () => {
    setCartState(false);
  };

  return (
    <>
      <HeaderSection onOpenCart={cartOpenHandler} />
      <Products />
      {cartState && <Cart close={cartCloseHandler} />}
    </>
  );
}

export default App;
