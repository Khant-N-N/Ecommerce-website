import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <h1 className="text-center mt-5">404 not Found!</h1>
      <Link to="/">
        <h5 className="text-center my-5">Go Back to Home</h5>
      </Link>
    </>
  );
};

export default Error;
