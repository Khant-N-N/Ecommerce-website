import NavBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/homePage";
import Context from "./components/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect, useReducer, useState } from "react";
import useFetchData from "./components/fetchData";
import SingleProductPage from "./pages/singleProduct/singleProductPage";
import Error from "./components/error";
import Footer from "./components/footer";
import InfoCards from "./components/infoCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong, faXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import SignUpInfo from "./components/signUpInfo";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Login } from "./pages/loginPage";
import { Register } from "./pages/registerPage";
import { initialState, reducer } from "./components/reducerValues";
import { CheckOut } from "./pages/checkOut/checkoutPage";
import "./styles.css";
const Products = lazy(() => import("./pages/productsPage"))
const Favourite = lazy(() => import("./pages/favouritePage"))
const ShoppingCart = lazy(() => import("./pages/ShoppingCart"))
const ContactUs = lazy(() => import("./pages/contactUs"))



// create an object to store addtocart item amount
const addedCartItems = (products) => {
  let cart = {};
  for (const product of products) {
    cart[product.id] = 0;
  }
  return cart;
}
function App() {

  const url = "https://dummyjson.com/products";
  const { loading, products } = useFetchData(url); //fetch data  from custom hook
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isCartFill, setIsCartFill] = useState(false); //to set cart green ball display

  useEffect(() => { //update cart id as products update
    dispatch({ type: "CART_ITEMS", payload: addedCartItems(products) })
  }, [products])

  //scrollTop button 
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll < lastScrollTop) {
        dispatch({ type: 'TOGGLE_DISPLAY', payload: true });
      } else {
        dispatch({ type: 'TOGGLE_DISPLAY', payload: false });
      }
      if (scroll <= 100) dispatch({ type: 'TOGGLE_DISPLAY', payload: false });
      lastScrollTop = scroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  //check if user turn dark on and set it on window load

  useEffect(() => {
    document.body.classList[state.dark ? "add" : "remove"]("darkTheme")
  }, [state.dark]);


  //add to cart 
  const handleAddtoCart = (id) => {
    // setCartItems(prev => ({ ...prev, [id]: prev[id] + 1 }))
    dispatch({ type: "CART_ADD", payload: Number(id) })
  };

  const handleRemoveCart = (id) => {
    dispatch({ type: "CART_REMOVE", payload: Number(id) })
  }

  const handleUpdateCart = (amount, id) => {
    dispatch({ type: "CART_UPDATE", id: Number(id), amount: Number(amount) })
  }

  const ContextValues = {
    state, dispatch, loading, products, isCartFill, setIsCartFill,
    handleUpdateCart, handleAddtoCart, handleRemoveCart, handleScrollTop
  }
  return (
    <Context.Provider value={ContextValues}>
      <div className="position-relative">
        <BrowserRouter>
          {state.signUp &&
            <Offcanvas show={state.signUp} className="position-absolute d-flex justify-content-center align-items-center"
              style={{ backgroundColor: "rgba(16,16 ,16, 0.8)", zIndex: "9999", width: "100vw", height: "100vh", color: "inherit" }}>

              <div
                className="container position-relative mx-2 d-flex justify-content-center align-items-center rounded loginCon"
                style={{
                  backgroundColor: `${state.dark ? "#191c1f" : "#dfe3e5"}`,
                  border: `${state.dark ? "1px solid #dfe3e5" : "2px solid #101010"}`,
                  maxWidth: "500px",
                  height: `${state.isRegister ? "80vh" : "70vh"}`,
                }}
              >
                <FontAwesomeIcon icon={faXmark} fontSize={22} onClick={() => dispatch({ type: "SIGNUP_BAR", payload: false })} />
                {state.isRegister ? <Register /> : <Login />}
              </div>
            </Offcanvas>

          }
          <NavBar />
          <Suspense fallback={
            <div className="w-100 text-center load">
              <FontAwesomeIcon className="loader" icon={faSpinner} />
            </div>}>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={< Products />} />
              <Route path="/shop/:id" element={< SingleProductPage />} />
              <Route path="/favourite" element={< Favourite />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/delivery" />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <hr />
        <button className={`btn scrollTopBut ${state.display ? "" : "display"}`} onClick={handleScrollTop}><FontAwesomeIcon icon={faUpLong} fontSize={20} /></button>
        <InfoCards />
        <SignUpInfo />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
