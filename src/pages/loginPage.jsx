import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Context from "../components/context";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const { dispatch } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column p-2"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="font text-center mb-4">Welcome Back</h2>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="******"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
        </Form.Group>
        <NavLink className="link" style={{ color: "var(--secondary-color)" }}>
          Forgotten password?
        </NavLink>
        <Button variant="primary" className="mt-4" type="submit">
          Login
        </Button>
        <p className="my-3 fs-6">
          Don't have an account?
          <span
            className="bold link"
            style={{ color: "var(--secondary-color)" }}
            onClick={() => dispatch({ type: "REGISTER", payload: true })}
          >
            {" "}
            RegisterHere
          </span>
        </p>
      </Form>
    </>
  );
};
