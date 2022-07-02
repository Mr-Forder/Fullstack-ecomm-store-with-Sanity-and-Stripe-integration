import React from "react";
import Image from "next/image";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Link from "next/link";
import { motion } from "framer-motion";
const Logo = () => {
  return (
    <Link href={`/`}>
      <div className="logo">
        {/* <Image src={logo} className="logo-img" /> */}
        <svg
          version="1.1"
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="-386 251.3 67.5 94"
          xmlSpace="preserve"
          className="logo-anim"
        >
          <path
            className="curved draw"
            d="M-363,263.7l28,29.1c0.8,0.9,1.3,2,1.3,3.2v31.4c0,1.4-1.7,2.2-2.7,1.2l-30.1-27.4"
          />
          <path
            className="curved draw"
            d="M-337.2,263.7l-28,29.1c-0.8,0.9-1.3,2-1.3,3.2v31.4c0,1.4,1.7,2.2,2.7,1.2l30.1-27.4"
          />
        </svg>
        <motion.div
          animate={{ opacity: 1, transition: { duration: 5, delay: 4 } }}
          initial={{ opacity: 0 }}
          className="type"
        >
          Brahe
        </motion.div>
        {/* <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="-263 373.9 67.5 94"
          xmlSpace="preserve"
          style={{ color: "white" }}
          className="logo-anim"
        >
          <path
            class="st0 draw"
            d="M-209,426.8l-15.6-15.6l12.9-12.9l-1.1-1.1l-12.9,12.9l-12.9-12.9l-1.1,1.1l12.9,12.9l-15.6,15.6V465l16.7-15.2
	L-209,465V426.8z M-225.6,412.3l15.1,15.1v6.6l-15.2,13.8l-15.1-13.8v-6.6L-225.6,412.3z M-240.8,461.6V436l14,12.8L-240.8,461.6z
	 M-224.5,448.8l14-12.8v25.6L-224.5,448.8z"
          />
        </svg> */}
        {/* <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="-263 373.9 67.5 94"
          xmlSpace="preserve"
          style={{ color: "white" }}
          className="logo-anim"
        >
          <path
            class="st0 draw"
            d="M-209,426.8l-15.6-15.6l12.9-12.9l-1.1-1.1l-12.9,12.9l-12.9-12.9l-1.1,1.1l12.9,12.9l-15.6,15.6V465l16.7-15.2
	L-209,465V426.8z M-225.6,412.3l15.1,15.1v6.6l-15.2,13.8l-15.1-13.8v-6.6L-225.6,412.3z M-240.8,461.6V436l14,12.8L-240.8,461.6z
	 M-224.5,448.8l14-12.8v25.6L-224.5,448.8z"
          />
        </svg> */}
        {/* <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="-263 373.9 67.5 94"
          xmlSpace="preserve"
          style={{ color: "white" }}
          className="logo-anim"
        >
          <g id="XMLID_201_">
            <polygon
              class="monkey"
              points="-209,465 -242,434.8 -241,433.7 -210.5,461.6 -210.5,427.4 -239.5,398.3 -238.5,397.3 -209,426.8 	"
            />
          </g>
          <g id="XMLID_200_">
            <polygon
              class="monkey"
              points="-242.3,465 -242.3,426.8 -212.7,397.3 -211.7,398.3 -240.8,427.4 -240.8,461.6 -210.2,433.7 -209.2,434.8 	"
            />
          </g>
        </svg> */}
      </div>
    </Link>
  );
};

export default Logo;
