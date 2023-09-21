import { useRef, useState } from "react";

const CreateImg = ({ products }) => {
  const [click, setClick] = useState(false);
  const [display, setDisplay] = useState(false);
  const bigImgRef = useRef();
  const fullImage = useRef();

  let title,
    images = [];
  if (products.length !== 0) ({ images, title } = products[0]);

  const handleClick = (e) => {
    setClick(true);
    bigImgRef.current.src = e.currentTarget.getAttribute("src");
    setTimeout(() => {
      setClick(false);
    }, 100);
  };

  const viewImageHandle = (e) => {
    fullImage.current.src = e.currentTarget.getAttribute("src");
    setDisplay(true);
  };

  const handleCloseImage = () => {
    setDisplay(false);
  };

  return (
    <>
      <div className="image-container d-flex justify-content-center ">
        <div className="sImgDiv">
          <div className="big">
            <img
              ref={bigImgRef}
              className={`${click ? "opacity" : ""} Bimg thumbnail`}
              src={`${images[0]}`}
              alt={title}
              loading="lazy"
              onClick={viewImageHandle}
            />
            <div className={`overlay ${display ? "" : "display"}`}>
              <img className="full-image" ref={fullImage} src="" alt="full" />
              <span className="close-button" onClick={handleCloseImage}>
                &times;
              </span>
            </div>
          </div>

          <div className="smallContainer">
            {images.map((image) => {
              return (
                <div className="small" key={image}>
                  <img
                    className="sImg"
                    src={`${image}`}
                    alt={title}
                    onClick={handleClick}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateImg;
