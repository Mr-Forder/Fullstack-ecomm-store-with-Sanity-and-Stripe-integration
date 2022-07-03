import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Image from "next/image";
import room from "../../assets/room.jpg";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      {/* <DarkOverlay /> */}
      <video
        src="https://res.cloudinary.com/dh7ghfatn/video/upload/v1656784908/Room_wl7zzu.mp4"
        type="video/mp4"
        autoPlay
        muted
        loop
      />

      {/* <Image src={room} className="title" layout="fill" objectFit="cover" /> */}
    </VideoContainer>
  );
};

export default CoverVideo;

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  z-index: -2;
  overflow: hidden;
  position: absolute;
  top: 0;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
  }
  @media (max-width: 30em) {
    object-position: center 80%;
  }
`;
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  /* background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  background-image: linear-gradient(
    to bottom,
    rgba(245, 246, 252, 0),
    rgba(0, 0, 0, 1) */

  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );
`;
const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      font-size: calc(5rem + 8vw);
    }
  }
  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: -1.5rem;
    }
  }
`;
