import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
//client side rendered

const About = () => {
  const Info = dynamic(() => import("../components/sections/Info"), {
    ssr: false,
  });
  const SubSection = dynamic(
    () => import("../components/sections/SubSection"),
    {
      ssr: false,
    }
  );
  return (
    <div>
      <motion.div
        className="products-heading"
        animate={{ opacity: 1, transition: { duration: 2 } }}
        initial={{ opacity: 0 }}
      >
        <SubSection />
      </motion.div>
      <Info />
    </div>
  );
};

export default About;
