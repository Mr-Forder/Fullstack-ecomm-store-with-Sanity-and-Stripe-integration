import styled from "styled-components";

import Logo from "./Logo";
import Link from "next/link";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";

const Footer = () => {
  return (
    <Section>
      {/* <Banner /> */}
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/brahe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com/brahe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter"
            >
              <Twitter />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item>
            <Link href={`/`}>Gokotta</Link>
          </Item>
          <Item>
            <Link href="/#prods">Shop</Link>
          </Item>
          <Item>
            <Link href={`/hrafn`}>Hrafn</Link>
          </Item>
          <Item>
            <Link href={`/contact`}>Contact</Link>
          </Item>
          <Item>
            <Link href={`/ljoss`}>Ljoss</Link>
          </Item>
          <Item>
            <Link href={`/privacy`}>Privacy</Link>
          </Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Brahe. All rights reserved.
        </span>
        <span></span>
      </Bottom>
    </Section>
  );
};

export default Footer;

const Section = styled.section`
  min-height: 50vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 90%;
    border: none;
    h1 {
      font-size: ${(props) => props.theme.fontxxxl};
    }
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(0.9);
    }
  }
`;
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`;
const Item = styled.li`
  font-family: "karla", bold;
  width: fit-content;
  cursor: pointer;
  font-size: 0.8rem;
  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
    background-color: #0d6389;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-family: "Archivo Narrow";
  }
  a {
    text-decoration: underline;
  }
  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;

    span {
      margin-bottom: 1rem;
    }
  }
`;
