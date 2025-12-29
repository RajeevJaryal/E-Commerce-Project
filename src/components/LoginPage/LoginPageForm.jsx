import { useContext, useRef, useState } from "react";
import AuthContext from "../Store/AuthContext";

const FIREBASE_API_KEY = "AIzaSyD_l7c84umFPHaOHg0RAHwrIG8Dphwuo_8";

const LoginPageForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prev) => !prev);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    const url = isLogin
      ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`
      : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || "Authentication failed!");
      }

      authCtx.login(data.idToken, enteredEmail);
    } catch (error) {
      alert(error.message);
    }

    setIsLoading(false);
  };

  return (
    <section className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">
                {isLogin ? "Login" : "Sign Up"}
              </h3>

              <form onSubmit={submitHandler}>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    ref={emailInputRef}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Your Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    ref={passwordInputRef}
                    required
                  />
                </div>

                <div className="d-grid gap-2">
                  {!isLoading && (
                    <button type="submit" className="btn btn-primary">
                      {isLogin ? "Login" : "Create Account"}
                    </button>
                  )}

                  {isLoading && (
                    <button className="btn btn-secondary" disabled>
                      Loading...
                    </button>
                  )}

                  <button
                    type="button"
                    className="btn btn-link text-decoration-none"
                    onClick={switchAuthModeHandler}
                  >
                    {isLogin
                      ? "Create new account"
                      : "Login with existing account"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPageForm;
