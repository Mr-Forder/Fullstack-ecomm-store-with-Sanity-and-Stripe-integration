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
    <HeroCon
      className="parent"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <Title variants={stagger}>GOKOTTA</Title>
      <SubTitle variants={stagger}>[yo-kOh-tag] noun</SubTitle>
      <SubLine variants={lineAnim} style={{ originX: 0 }} />
      <Blurb variants={stagger}>
        <p>
          to wake up early in the morning with the purpose of going outside to
          hear the first birds sing.
        </p>
      </Blurb>
    </HeroCon>
  );
};

export default TypeWriterText;

const HeroCon = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 70em) {
  }
  @media (max-width: 48em) {
  }
  @media (max-width: 40em) {
  }
`;
const SubLine = styled(motion.div)`
  width: 20rem;
  height: 2px;
  margin-top: 5px;
  background: #0d6389;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const Title = styled(motion.h2)`
  /* text-shadow: 0px 14px 2px rgba(0, 0, 0, 0.1), 0px 0px 30px rgba(0, 0, 0, 0.1);
  color: black;

  font-family: "montserrat", 900;
  font-size: 4rem; */

  z-index: 500;
  @media (max-width: 70em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    margin-top: -130% !important;
  }
`;
const SubTitle = styled(motion.h3)`
  font-size: ${(props) => props.theme.fontmd};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  width: 40%;
  align-self: flex-start;
  font-family: "abhaya-libre";
  font-style: italic;

  z-index: 500;
  /* 
  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: #0d6389;
    transition: width 0.9s ease;
  }
  &:hover::after {
    width: 100%;
  } */
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const Blurb = styled(motion.h3)`
  padding: 1rem 0rem;
  color: ${(props) => props.theme.text};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 100%;
  align-self: flex-start;
  z-index: 500;

  p {
    font-weight: 100;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    text-decoration: rgb(159, 164, 167);

    text-indent: 0px;
    /* font-family: "libre-baskerville"; */
    font-family: "Archivo Narrow";

    vertical-align: baseline;
    letter-spacing: 10;

    color: #73848b;
    font-size: 15px;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
    align-self: center;
    text-align: center;
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;
