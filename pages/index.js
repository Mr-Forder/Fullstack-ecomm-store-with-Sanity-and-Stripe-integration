import { useState, useEffect } from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

import dynamic from "next/dynamic";

import { motion } from "framer-motion";
import { fadeScroll } from "../components/animation";
import { UseScroll } from "../components/UseScroll";

//client side rendered

const CoverVideo = dynamic(() => import("../components/sections/CoverVideo"), {
  ssr: false,
});

const Info = dynamic(() => import("../components/sections/Info"), {
  ssr: false,
});
const Faq = dynamic(() => import("../components/sections/Faq"), {
  ssr: false,
});

const HomeSection = dynamic(
  () => import("../components/sections/HomeSection"),
  {
    ssr: false,
  }
);

const SubSection = dynamic(() => import("../components/sections/SubSection"), {
  ssr: false,
});

const Home = ({ products }) => {
  //hacky timeout
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3000);
  }, []);

  const lighting = products.filter((obj) => {
    return obj.category === "lighting";
  });
  const ravens = products.filter((obj) => {
    return obj.category !== "lighting";
  });
  return (
    <div>
      <motion.div
        animate={{ opacity: 1, transition: { duration: 2 } }}
        initial={{ opacity: 0 }}
      >
        <CoverVideo />
        <HomeSection />
      </motion.div>

      {load && (
        <div
          className="products-heading"
          animate={{ opacity: 1, transition: { duration: 2 } }}
          initial={{ opacity: 0 }}
        >
          <div className="products-container" id="prods">
            {ravens?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <div className="products-container">
            {lighting?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}

      <Info />

      {/* <Faq id="faq" /> */}
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
