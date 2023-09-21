import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import logo from "../photo/logo.png";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircle,
  faCircleHalfStroke,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Context from "./context";

function NavBar() {
  const [show, setShow] = useState(false);
  const { state, dispatch, isCartFill, setIsCartFill, handleScrollTop } =
    useContext(Context);

  const handleClose = () => {
    setShow(false);
    handleScrollTop();
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    for (const i in state.cartItems) {
      if (state.cartItems[i] > 0) {
        return setIsCartFill(true);
      } else {
        setIsCartFill(false);
      }
    }
  }, [state.cartItems, setIsCartFill]);

  const darkModeHandle = () => {
    dispatch({ type: "TOGGLE_DARK", payload: !state.dark });
  };
  return (
    <>
      <Navbar
        sticky="top"
        key="lg"
        expand="lg"
        className="bg-body-tertiary mb-3 navBar"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <div className="d-flex">
            <FontAwesomeIcon
              className={`me-2 p-2 rounded mt-1 dl-but-s ${
                state.dark ? "dl-but-dark-color" : ""
              }`}
              title="Dark/Light mode"
              icon={faCircleHalfStroke}
              fontSize={25}
              onClick={darkModeHandle}
              border
            />

            <FontAwesomeIcon
              icon={faUser}
              title="SignUp"
              fontSize={25}
              className="me-2 mt-1 p-2 dl-but-s rounded link"
              onClick={() => dispatch({ type: "SIGNUP_BAR", payload: true })}
            />

            <Link
              to="/cart"
              className="position-relative"
              onClick={handleScrollTop}
            >
              <FontAwesomeIcon
                className="me-2 mt-2 p-2 dl-but-s rounded link z-2 position-relative"
                title="Cart"
                icon={faCartShopping}
                fontSize={23}
              />

              {isCartFill ? (
                <FontAwesomeIcon
                  icon={faCircle}
                  color="#30911f"
                  className="position-absolute dl-but-s"
                  style={{ top: 7, left: 14 }}
                  fontSize={18}
                />
              ) : (
                <></>
              )}
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-lg`}
              onClick={handleShow}
            />
          </div>
          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            className="navBar"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <img src={logo} alt="logo" className="logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <NavLink
                  onClick={handleClose}
                  to="/"
                  className="mt-2 fs-5 ms-3 pt-2 fw-bolder link text-center"
                >
                  Home
                </NavLink>

                <NavLink
                  onClick={handleClose}
                  to="/shop"
                  className="mt-2 fs-5 ms-3 pt-2 fw-bolder link text-center"
                >
                  Shop Now
                </NavLink>

                <NavLink
                  onClick={handleClose}
                  to="/favourite"
                  className="mt-2 fs-5 ms-3 pt-2 fw-bolder link text-center"
                >
                  Favourite
                </NavLink>

                <NavLink
                  onClick={handleClose}
                  to="/contact"
                  className="mt-2 fs-5 ms-3 pt-2 fw-bolder link text-center"
                >
                  Contact Us
                </NavLink>

                <NavLink
                  onClick={handleClose}
                  to="/delivery"
                  className="mt-2 fs-5 ms-3 pt-2 fw-bolder link text-center"
                >
                  Delivery details
                </NavLink>
              </Nav>
              <FontAwesomeIcon
                title="Dark/Light mode"
                icon={faCircleHalfStroke}
                fontSize={25}
                className={`mx-2 dl-but-l mt-3 ${
                  state.dark ? "dl-but-dark-color" : ""
                }`}
                onClick={darkModeHandle}
              />
              <div className="link dl-but-l text-center my-2 mx-3">
                <Button
                  variant="outline-light"
                  className="bg-but"
                  title="Account"
                  onClick={() =>
                    dispatch({ type: "SIGNUP_BAR", payload: true })
                  }
                >
                  <FontAwesomeIcon icon={faUser} className="pt-2 " /> Sign up
                </Button>
              </div>

              <NavLink to="/cart" className="link" onClick={handleScrollTop}>
                <Button
                  variant="outline-light"
                  className="mx-2 my-2 bg-but dl-but-l"
                  title="Cart"
                >
                  <FontAwesomeIcon
                    className="pt-2 position-relative z-2"
                    icon={faCartShopping}
                  />{" "}
                  Cart{" "}
                  {isCartFill ? (
                    <FontAwesomeIcon
                      icon={faCircle}
                      color="#30911f"
                      className="position-absolute dl-but-l"
                      style={{ top: "23", right: "70" }}
                      fontSize={13}
                    />
                  ) : (
                    <></>
                  )}
                </Button>
              </NavLink>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
