import { useState, useEffect } from "react";

import styled from "styled-components";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import caw from "../assets/contact.jpg";
const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/0bc31d20-f583-11ec-95d6-ef970076a4ff";

const Contact = () => {
  const Info = dynamic(() => import("../components/sections/Info"), {
    ssr: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>

        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div>
      <Wrapper
        animate={{ opacity: 1, transition: { duration: 2 } }}
        initial={{ opacity: 0 }}
      >
        <div className="form">
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <h2 className="form-title">Contact Us</h2>
            <div className="">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="string"
                required
              />
            </div>

            <div className="">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="string"
                required
              />
            </div>

            <div className="message">
              <textarea
                placeholder="Your message"
                name="message"
                className="string message"
                required
              />
            </div>

            <div className="">
              <button className="btn buy-now contact" type="submit">
                Send a message
              </button>
            </div>
          </form>
        </div>
        <div className="img">
          <Image src={caw} alt="contact us" />
        </div>
      </Wrapper>
      <Info />
    </div>
  );
};

export default Contact;

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

  .form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 5%;
    width: 50%;
    height: 100vh;
  }

  .string {
    width: 100%;
    padding: 0.5rem 1rem;
    margin: 1rem 0rem;
    position: relative;
    background: white;
    border-radius: 5px;
    border: 1px solid #b7b7b7;
    font-size: 0.8rem;
    font-family: "montserrat";
    letter-spacing: 3px;
  }
`;
