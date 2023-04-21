import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
//import GoogleButton from "react-google-button";
import { useUserAuth } from "./context/UserAuthContext.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/start");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/start");
    } catch (error) {
      console.log(error.message);
    }
  };
const LoginStyle = {
  backgroundColor : "Blue",
  border : "none",
  padding : "5px 100px 5px 100px"
};
const PhoneStyle = {
  backgroundColor : "Green",
  border : "none"
};
  return (
    <>
    <div className="Loginbody">
      <div className="p-4 box">
        <h2 className="mb-3">Login to your account</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" style= {LoginStyle}>
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        
        <div className="p-4 box mt-3 text-center Loginlast">
        Don't have an account? <Link to="/Register">Sign up</Link>
      </div>
      </div>
      </div>
    </>
  );
};

export default Login;