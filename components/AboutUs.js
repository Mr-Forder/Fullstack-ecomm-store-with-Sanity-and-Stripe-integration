import React from "react";
import styled from "styled-components";

import Button from "./Button";
import { motion } from "framer-motion";

const TypeWriterText = () => {
  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut", staggerChildren: 1 },
    },
  };

  const lineAnim = {
    hidden: { scaleX: 0 },
    show: {
      scaleX: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <About
      className="parent"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      The Gokotta collection marks Brahe's seventh year in business.The Gokotta
      collection marks Brahe's seventh year in business.The Gokotta collection
      marks Brahe's seventh year in business.The Gokotta collection marks
      Brahe's seventh year in business.The Gokotta collection marks Brahe's
      seventh year in business.The Gokotta collection marks Brahe's seventh year
      in business.The Gokotta collection marks Brahe's seventh year in
      business.The Gokotta collection marks Brahe's seventh year in business.The
      Gokotta collection marks Brahe's seventh year in business.The Gokotta
      collection marks Brahe's seventh year in business.The Gokotta collection
      marks Brahe's seventh year in business.The Gokotta collection marks
      Brahe's seventh year in business.The Gokotta collection marks Brahe's
      seventh year in business.The Gokotta collection marks Brahe's seventh year
      in business.The Gokotta collection marks Brahe's seventh year in
      business.The Gokotta collection marks Brahe's seventh year in business.The
      Gokotta collection marks Brahe's seventh year in business.
    </About>
  );
};

export default TypeWriterText;

const About = styled(motion.div)`
  width: 42rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  margin: auto;
  @media (max-width: 70em) {
  }
  @media (max-width: 48em) {
  }
  @media (max-width: 40em) {
  }
`;
