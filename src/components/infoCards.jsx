import {
  faCartShopping,
  faLock,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InfoCards = () => {
  return (
    <section className="main">
      <div className="cardSection">
        <div className="card m-2">
          <div className="card-body">
            <h5 className="card-title font">
              <FontAwesomeIcon icon={faCartShopping} /> Easy Shopping
            </h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        <div className="card m-2">
          <div className="card-body">
            <h5 className="card-title font">
              <FontAwesomeIcon icon={faTruck} /> Fast Delivery
            </h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        <div className="card m-2">
          <div className="card-body">
            <h5 className="card-title font">
              <FontAwesomeIcon icon={faLock} /> Secure and Reliable
            </h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
