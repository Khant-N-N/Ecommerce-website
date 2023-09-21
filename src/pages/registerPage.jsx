import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Context from "../components/context";

export const Register = () => {
  const { dispatch } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="container d-flex flex-column p-2 p-md-5"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="font text-center mb-4">
          Create an account for more features
        </h2>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            id="email"
            placeholder="name@example.com"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="userName">User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="eg. Kenny"
            id="userName"
            aria-describedby="passwordHelpBlock"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="inputPassword6">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="******"
            id="inputPassword6"
            aria-describedby="passwordHelpBlock"
          />
        </Form.Group>
        <Button variant="primary" className="mt-4" type="submit">
          Register
        </Button>
        <p className="my-3 text-center">
          Already have an account?
          <span
            className="bold link"
            style={{ color: "var(--secondary-color)" }}
            onClick={() => dispatch({ type: "REGISTER", payload: false })}
          >
            {" "}
            Login Here
          </span>
        </p>
      </Form>
    </>
  );
};
