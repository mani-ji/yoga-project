import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "./context/UserAuthContext.js";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/Login");
    } catch (err) {
      setError(err.message);
    }
  };
  const LoginStyle = {
    backgroundColor : "Blue",
    border : "none",
    padding : "5px 100px 5px 100px"
  };
  return (
    <>
     <div className="Loginbody">
      <div className="p-4 box">
        <h2 className="mb-3">Signup a account</h2>
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
            <Button variant="primary" type="Submit" style={LoginStyle}>
              Sign up
            </Button>
          </div>
        </Form>
        <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/Login">Log In</Link>
      </div>
      </div>
      </div>
    </>
  );
};

export default Signup;