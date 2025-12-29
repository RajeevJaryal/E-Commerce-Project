import { useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Products from "./components/product/Products";
import HeaderSection from "./components/header/HeaderSection";
import Cart from "./components/Cart/Cart";
import LogoText from "./components/header/logoText";
import About from "./components/about/About";
import Home from "./components/home/Home";
import ContactUs from "./components/Contact/ContactUs";
import ProductDetails from "./components/product/ProductDetails";
import LoginPage from "./components/LoginPage/LoginPage";
import AuthContext from "./components/Store/AuthContext";

function App() {
  const authCtx = useContext(AuthContext);

  const [cartState, setCartState] = useState(false);
  const [cartData, setCartData] = useState([]);

  const cartOpenHandler = () => {
    setCartState(true);
  };

  const cartCloseHandler = () => {
    setCartState(false);
  };

  const purchaseHandler = () => {
    setCartData([]);
  };

  const addToCartHandler = (product) => {
    setCartData((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.title === product.title
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCartHandler = (product) => {
    setCartData((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.title === product.title
      );

      if (!existingItem) return prevItems;

      if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.title !== product.title);
      }

      return prevItems.map((item) =>
        item.title === product.title
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const totalItems = cartData.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {authCtx.isLoggedIn && (
        <>
          <HeaderSection totalItems={totalItems} onOpenCart={cartOpenHandler} />
          <LogoText />
        </>
      )}

      <Routes>
        <Route
          path="/"
          element={
            authCtx.isLoggedIn ? (
              <Navigate to="/store" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/login"
          element={
            !authCtx.isLoggedIn ? <LoginPage /> : <Navigate to="/store" />
          }
        />

        <Route
          path="/store"
          element={
            authCtx.isLoggedIn ? (
              <Products onAddToCart={addToCartHandler} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/product/:id"
          element={
            authCtx.isLoggedIn ? <ProductDetails /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/about"
          element={authCtx.isLoggedIn ? <About /> : <Navigate to="/login" />}
        />

        <Route
          path="/home"
          element={authCtx.isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/contact"
          element={
            authCtx.isLoggedIn ? <ContactUs /> : <Navigate to="/login" />
          }
        />

        <Route
          path="*"
          element={<Navigate to={authCtx.isLoggedIn ? "/store" : "/login"} />}
        />
      </Routes>

      {cartState && authCtx.isLoggedIn && (
        <Cart
          cartData={cartData}
          purchase={purchaseHandler}
          remove={removeFromCartHandler}
          close={cartCloseHandler}
        />
      )}
    </>
  );
}

export default App;
