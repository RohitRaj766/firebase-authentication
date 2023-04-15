import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import {
  facebookSignInInitiate,
  googleSignInInitiate,
  loginInitiate,
} from "../redux/actions";
import { errorMessage, successMessage } from "../redux/actions";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const [message, setMessage] = useState("");
  const words = errorMessage.split(" ");
  const errorCode = words.slice(2).join(" ");
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    setMessage("");
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  const dispatch = useDispatch();
  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate());
  };
  const handleFBSignIn = () => {
    dispatch(facebookSignInInitiate());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Fill all fields.");
    } else {
      dispatch(loginInitiate(email, password));
      setState({ email: "", password: "" });
      setMessage(errorMessage);
    }
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className="social-login">
            <button
              className="btn google-btn social-btn"
              type="button"
              onClick={handleGoogleSignIn}
            >
              <span>
                <i className="fab fa-google-plus-g"></i> Sign in with Google+
              </span>
            </button>
            <button
              className="btn facebook-btn social-btn"
              type="button"
              onClick={handleFBSignIn}
            >
              <span>
                <i className="fab fa-facebook"></i> Sign in with Facebook
              </span>
            </button>
          </div>
          <p style={{ textAlign: "center" }}>OR</p>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          {errorMessage ? (
            <p style={{ color: "red" }}>{errorCode}</p>
          ) : (
            <p
              style={{
                color: successMessage === "Login Done" ? "green" : "red",
              }}
            >
              {message}
            </p>
          )}
          <button className="btn btn-secondary btn-block" type="submit">
            <i className="fas fa-sign-in-alt"></i> Sign In
          </button>
          <hr />
          <p>Don't have an account ?</p>
          <Link to="/register">
            <button
              className="btn btn-primary btn-block"
              type="submit"
              id="btn-signup"
            >
              <i className="fas fa-user-plus"></i> Create New Account
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
export default Login;
