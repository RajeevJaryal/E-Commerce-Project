import { useState } from "react";
import "./App.css";
import Products from "./components/product/Products";
import HeaderSection from "./components/header/HeaderSection";
import Cart from "./components/Cart/Cart";
import LogoText from "./components/header/logoText";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
function App() {
  const [cartState, setCartState] = useState(false);
  const [cartData, setCartData] = useState([]);

  const cartOpenHandler = () => {
    setCartState(true);
  };
  const cartCloseHandler = () => {
    setCartState(false);
  };
  const purchaseHandler=()=>{
    setCartData([]);
  }

  const addToCartHandler = (product) => {
    setCartData((prevItem) => {
      const existing = prevItem.find((item) => item.title === product.title);

      if (existing) {
        return prevItem.map((item) => {
          return item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
      return [...prevItem, { ...product, quantity: 1 }];
    });
  };
  const totalItems=cartData.reduce((sum,item)=>{
    return sum+item.quantity
  },0);

  return (
    <>
      <HeaderSection totalItems={totalItems} onOpenCart={cartOpenHandler} />
      <LogoText />
      <Routes>
        <Route path="/store" element={<Products onAddToCart={addToCartHandler}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      {cartState && <Cart cartData={cartData} purchase={purchaseHandler} close={cartCloseHandler} />}
    </>
  );
}

export default App;
