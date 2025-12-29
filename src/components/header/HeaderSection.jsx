import { NavLink } from "react-router-dom";
import AuthContext from "../Store/AuthContext";
import { useContext } from "react";
import { Button } from "bootstrap";
const HeaderSection = ({ onOpenCart, totalItems }) => {
  const authCtx = useContext(AuthContext);
  return (
    <div
      className="bg-dark text-white position-fixed w-100"
      style={{ height: "70px", top: 0, zIndex: 1000 }}
    >
      <div className="container d-flex align-items-center justify-content-between h-100">
        <div className="d-flex justify-content-center flex-grow-1 gap-4">
          {authCtx.isLoggedIn && (
            <>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `text-white text-decoration-none ${
                    isActive ? "active-link" : ""
                  }`
                }
              >
                <h5>Home</h5>
              </NavLink>

              <NavLink
                to="/store"
                className={({ isActive }) =>
                  `text-white text-decoration-none ${
                    isActive ? "active-link" : ""
                  }`
                }
              >
                <h5>Store</h5>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-white text-decoration-none ${
                    isActive ? "active-link" : ""
                  }`
                }
              >
                <h5>About</h5>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-white text-decoration-none ${
                    isActive ? "active-link" : ""
                  }`
                }
              >
                <h5>Contact Us</h5>
              </NavLink>
              <button
                className="btn btn-warning px-4 py-2 fw-semibold shadow-sm"
                onClick={authCtx.logout}
              >
                Logout
              </button>
            </>
          )}
          {!authCtx.isLoggedIn && (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-white text-decoration-none ${
                    isActive ? "active-link" : ""
                  }`
                }
              >
                <h5>Login</h5>
              </NavLink>
            </>
          )}
        </div>
        {authCtx.isLoggedIn && (
          <button className="btn btn-primary" onClick={onOpenCart}>
            Cart: {totalItems}
          </button>
        )}
      </div>
    </div>
  );
};
export default HeaderSection;
