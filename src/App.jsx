import { useContext, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
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
  const CRUDCRUD_URL =
    "https://crudcrud.com/api/1f5708de61e849908e1dc08decb9989d";

  const email = authCtx.email ? authCtx.email.replace(/[@.]/g, "_") : "";

  useEffect(() => {
    if (!email) return;
    axios
      .get(`${CRUDCRUD_URL}/cart${email}`)
      .then((res) => setCartData(res.data))
      .catch((err) => console.log(err));
  }, [email]);

  const cartOpenHandler = () => setCartState(true);
  const cartCloseHandler = () => setCartState(false);

  const addToCartHandler = async (product) => {
    const userEmail = email;

    const existingItem = cartData.find((item) => item.title === product.title);

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      await axios.put(
        `${CRUDCRUD_URL}/cart${userEmail}/${existingItem._id}`,
        updatedItem
      );
      setCartData(
        cartData.map((item) =>
          item._id === existingItem._id ? updatedItem : item
        )
      );
    } else {
      const newItem = { ...product, quantity: 1 };
      const response = await axios.post(
        `${CRUDCRUD_URL}/cart${userEmail}`,
        newItem
      );
      setCartData([...cartData, { ...newItem, _id: response.data._id }]);
    }
  };

  const removeItemHandler = async (item) => {
    try {
      const userEmail = email;
      await axios.delete(`${CRUDCRUD_URL}/cart${userEmail}/${item._id}`);
      setCartData(cartData.filter((cartItem) => cartItem._id !== item._id));
    } catch (error) {
      console.error(error);
    }
  };

  const purchaseHandler = async () => {
    for (let item of cartData) {
      await removeItemHandler(item);
    }
    setCartData([]);
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
          remove={removeItemHandler}
          close={cartCloseHandler}
        />
      )}
    </>
  );
}

export default App;
