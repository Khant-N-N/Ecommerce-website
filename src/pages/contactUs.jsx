import React, { useContext } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Context from "../components/context";
import {
  faFacebook,
  faTelegram,
  faTwitter,
  faViber,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactUs = () => {
  const { state } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="container d-md-flex align-items-center justify-content-between"
      style={{ height: "100vh" }}
    >
      <div className="w-md-25 w-100 font">
        <h3
          className="text-center mb-4"
          style={{ color: `${state.dark ? "#f8f9fa" : "#101010"}` }}
        >
          Contact Information
        </h3>
        <div className="w-100 d-flex justify-content-center mb-3 fs-5">
          <p>Social : </p>
          <a style={{ color: "#0d6efd" }} className="mx-1" href="/contact">
            <FontAwesomeIcon fontSize={30} icon={faFacebook} />
          </a>
          <a style={{ color: "#0d6efd" }} className="mx-1" href="/contact">
            <FontAwesomeIcon fontSize={30} icon={faTelegram} />
          </a>
          <a style={{ color: "#0d6efd" }} className="mx-1" href="/contact">
            <FontAwesomeIcon fontSize={30} icon={faViber} />
          </a>
          <a style={{ color: "#0d6efd" }} className="mx-1" href="/contact">
            <FontAwesomeIcon fontSize={30} icon={faTwitter} />
          </a>
        </div>
        <div className="text-center mt-2 fs-5">
          Phone :<span style={{ color: "#0d6efd" }}> +959xxxxxxxxx</span>
        </div>
        <div className="text-center mt-2 fs-5">
          Email :<span style={{ color: "#0d6efd" }}> xxx@gmail.com</span>
        </div>
        <div className="text-center mt-2 fs-5">
          Website :<span style={{ color: "#0d6efd" }}> ******.com</span>
        </div>
      </div>
      <hr />
      <Form
        onSubmit={handleSubmit}
        className="w-100 w-md-50"
        style={{ color: "#101010" }}
      >
        <h3
          className="font text-center"
          style={{ color: `${state.dark ? "#f8f9fa" : "#101010"}` }}
        >
          Contact us
        </h3>
        <FloatingLabel
          controlId="floatingInput"
          label="Your Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput2"
          label="Your Name(optional)"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="09xxxxxxxxx" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Message">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <div className="w-100 d-flex justify-content-center my-3">
          <button className="btn btn-primary w-75" style={{ height: "50px" }}>
            <FontAwesomeIcon icon={faPaperPlane} /> Send Message
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ContactUs;
