import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Context from "../../components/context";

export const DeliveryForm = () => {
  const { state } = useContext(Context);
  return (
    <div className="container mb-4">
      <Form className="w-75" style={{ color: "#101010" }}>
        <h3
          className="bold font"
          style={{ color: `${state.dark ? "#f8f9fa" : "#101010"}` }}
        >
          Delivery Information
        </h3>
        <FloatingLabel
          controlId="floatingInput2"
          label="Phone Number"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="09xxxxxxxxx" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Address to deliver"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Enter Valid Address"
            style={{ height: "80px" }}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea3" label="Note">
          <Form.Control
            as="textarea"
            placeholder="Leave a note here"
            style={{ height: "80px" }}
          />
        </FloatingLabel>
      </Form>
    </div>
  );
};
