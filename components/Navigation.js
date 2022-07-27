import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";

const Navigation = () => {
  const [click, setClick] = useState(false);

  return (
    <Section
      id="navigation"
      animate={{ opacity: 1, transition: { duration: 5 } }}
      initial={{ opacity: 0 }}
    >
      <NavBar>
        <Logo />

        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>

        <Menu click={click}>
          <Link href={`/about`}>
            <MenuItem onClick={() => setClick(!click)}>About Gokotta</MenuItem>
          </Link>
          <Link href={`/hrafn`}>
            <MenuItem onClick={() => setClick(!click)}>Hrafn</MenuItem>
          </Link>
          <Link href={`/ljoss`}>
            <MenuItem onClick={() => setClick(!click)}>Ljóss</MenuItem>
          </Link>
          <Link href={`/contact`}>
            <MenuItem onClick={() => setClick(!click)}>Contact</MenuItem>
          </Link>
        </Menu>
      </NavBar>
    </Section>
  );
};

export default Navigation;

const Section = styled(motion.div)`
  width: 100vw;
  background-color: transparent;
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
  .ham-menu {
    width: 5rem;
    height: 5rem;
    background-color: red;
    position: absolute;
    top: 2rem;
    left: 53%;
  }
  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    /* 1024 px */

    position: fixed;
    top: ${(props) => props.theme.navHeight};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(2px);

    transform: ${(props) =>
      props.click ? "translateY(0)" : `translateY(1000%)`};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;

    touch-action: none;
  }
`;

const MenuItem = styled.li`
  font-family: "montserrat";
  font-size: 0.8rem;
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: #0d6389;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 2rem 0;
    &:hover::after {
      width: 100%;
    }
  }
`;
const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  z-index: 52;
  height: 2px;
  background: ${(props) => props.theme.text};
  margin: 2px 0px;
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    /* 1024 px */
    display: flex;
  }

  &::after,
  &::before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;
