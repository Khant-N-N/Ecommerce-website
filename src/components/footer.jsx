import {
  faFacebook,
  faTelegram,
  faTwitter,
  faViber,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../photo/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="logo" className="logo" />
        <p className="font fs-5">Anythings you need, shop here with us</p>
      </div>

      <div className="font">
        <div>
          <a href="/contact">
            <FontAwesomeIcon fontSize={30} icon={faFacebook} />
          </a>
          <a href="/contact">
            <FontAwesomeIcon fontSize={30} icon={faTelegram} />
          </a>
          <a href="/contact">
            <FontAwesomeIcon fontSize={30} icon={faViber} />
          </a>
          <a href="/contact">
            <FontAwesomeIcon fontSize={30} icon={faTwitter} />
          </a>
        </div>
        <div className="text-center mt-2">
          <FontAwesomeIcon icon={faPhone} />
          <span> +959xxxxxxxxx</span>
        </div>
        <div className="text-center mt-2">
          <FontAwesomeIcon icon={faEnvelope} />
          <span> xxx@gmail.com</span>
        </div>
      </div>

      <div>
        <div className="my-2 bold">
          <a href="/contact">
            <span>Terms and policy</span>
          </a>
        </div>
        <div className="mb-2 bold">
          <a href="/contact">
            <span>Cookies policy</span>
          </a>
        </div>
        <div className="mb-2 bold">
          <a href="/contact">
            <span>Privacy policy</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
