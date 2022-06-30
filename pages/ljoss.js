import { useState, useEffect } from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
//client side rendered

const Home = ({ products, bannerData }) => {
  const lighting = products.filter((obj) => {
    return obj.category === "lighting";
  });
  const ravens = products.filter((obj) => {
    return obj.category !== "lighting";
  });

  const Info = dynamic(() => import("../components/sections/Info"), {
    ssr: false,
  });

  return (
    <div>
      <motion.div
        className="products-heading"
        animate={{ opacity: 1, transition: { duration: 2 } }}
        initial={{ opacity: 0 }}
      >
        <div className="products-container">
          {lighting?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </motion.div>
      <Info />
    </div>
  );
};

//let's do our strapi api requests (server side rendering) - async function
export const getServerSideProps = async () => {
  //FIRST LETS GET ALL OUR PRODUCT DATA
  //our sanity api query - asterix = fetch all, type is equal to product, sp basically, let's grab all products from our sanity dashboard content.
  const query = '*[_type == "product"]';
  //now lets create a products array from our query using sanity's client.fetch method, taking in our query as an argument - note await - as this is an async function.
  const products = await client.fetch(query);
  //NOW LETS GET OUR BANNER DATA THE SAME WAY
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
