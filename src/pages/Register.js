import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { registerInitiate } from "../redux/actions";
import { errorMessage, successMessage } from "../redux/actions";

function Register() {
  const [state, setState] = useState({
    email: "",
    password: "",
    displayName: "",
    passwordConfirm: "",
  });
  console.log(successMessage);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  const [message, setMessage] = useState("");
  const words = errorMessage.split(" ");
  const errorCode = words.slice(2).join(" ");
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  const { email, password, displayName, passwordConfirm } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setMessage("Passwords do not match.");
    } else {
      dispatch(registerInitiate(email, password));
      if (successMessage === "Registration Done") {
        dispatch(registerInitiate(email, password));
        setState({
          email: "",
          displayName: "",
          password: "",
          passwordConfirm: "",
        });
      } else {
        setMessage(errorMessage);
      }
    }
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <div id="register-form">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <input
            type="text"
            id="displayName"
            className="form-control"
            placeholder="Full Name"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            required
          />
          <input
            type="email"
            id="user-email"
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
          <input
            type="password"
            id="passwordConfirm"
            className="form-control"
            placeholder="Confirm Password"
            name="passwordConfirm"
            onChange={handleChange}
            value={passwordConfirm}
            required
          />
          {errorMessage ? (
            <p style={{ color: "red" }}>{errorCode}</p>
          ) : (
            <p
              style={{
                color: successMessage === "Registration Done" ? "green" : "red",
              }}
            >
              {message}
            </p>
          )}
          <button
            className="btn submitButton btn-primary btn-block"
            type="submit"
          >
            <i className="fas fa-user-plus"></i> Sign Up
          </button>
          <Link to="/login">
            <i className="fas fa-angle-left"></i> Back
          </Link>
        </form>
      </div>
    </>
  );
}

export default Register;
