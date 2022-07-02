import { useState, useEffect } from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";
import Link from "next/link";

import styled from "styled-components";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import caw from "../assets/contact.jpg";
const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/0bc31d20-f583-11ec-95d6-ef970076a4ff";

const Thanks = () => {
  const Info = dynamic(() => import("../components/sections/Info"), {
    ssr: false,
  });

  return (
    <div>
      <Wrapper
        animate={{ opacity: 1, transition: { duration: 2 } }}
        initial={{ opacity: 0 }}
      >
        <div className="ta">
          <div>
            <h1>Thanks!</h1>
          </div>
          <div>
            <p>We&apos;ll be in touch.</p>
          </div>
          <div>
            <button type="button" className="btn buy-now">
              <Link href={`/`}>Back to home</Link>
            </button>
          </div>
        </div>
        <div className="img">
          <Image src={caw} alt="contact us" />
        </div>
      </Wrapper>
      <Info />
    </div>
  );
};

export default Thanks;

const Wrapper = styled.div`
  width: 100%;
  margin: 5rem auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    width: 50%;
    height: 100vh;
    @media (max-width: 800px) {
      display: none;
    }
  }

  .ta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100vh;
    h1 {
      font-size: 5rem;
    }
  }
`;
