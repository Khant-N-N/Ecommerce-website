import React from "react";
import HeroSection from "../components/HeroSection";
import PopularItems from "../components/filterProducts";
import { useContext } from "react";
import Context from "../components/context";

const Home = () => {
  const { products } = useContext(Context);
  let filteringPopular = [];
  let filteringArrival = [];
  if (products.length !== 0) {
    filteringPopular = products.filter((product) => product.rating >= 4.5);
    filteringArrival = products.filter((product) => product.stock <= 50);
  }

  return (
    <>
      <section>
        <HeroSection />
      </section>
      <hr />
      <section>
        <PopularItems
          title="Most Popular"
          product={filteringPopular}
          id="popular"
        />
      </section>
      <hr />
      <section>
        <PopularItems
          title="New Arrival"
          product={filteringArrival}
          id="arrival"
        />
      </section>
    </>
  );
};

export default Home;
