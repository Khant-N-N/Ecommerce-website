import { useContext } from "react";
import Context from "./context";

const SignUpInfo = () => {
  const { dispatch } = useContext(Context);
  return (
    <div className="container">
      <section className="signUpSection px-3">
        <h3 className="font" style={{ color: "#f8f9fa" }}>
          Get latest information about our products and new offers anytime
        </h3>
        <div
          style={{
            filter: "drop-shadow(-2px -6px 3px rgba(24, 98, 237, 0.5))",
          }}
        >
          <span
            className="designButton bold font"
            onClick={() => dispatch({ type: "SIGNUP_BAR", payload: true })}
          >
            Sign Up Now
          </span>
        </div>
      </section>
    </div>
  );
};

export default SignUpInfo;
