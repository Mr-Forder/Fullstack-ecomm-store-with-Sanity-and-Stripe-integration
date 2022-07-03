import styled, { keyframes } from "styled-components";
import TypeWriterText from "../TypeWriterText";
import RoundTextBlack from "../../assets/Rounded-Text-Black.png";
import Image from "next/image";
import image from "../../assets/rune.svg";
import { motion } from "framer-motion";

const Home = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Section id="home">
      <Container>
        <Box></Box>
        <Box>
          <HeroCard>
            <TypeWriterText />
          </HeroCard>
        </Box>

        <Round
          className="roto"
          animate={{ opacity: 1, transition: { duration: 4 } }}
          initial={{ opacity: 0 }}
        >
          <Circle>
            <Image src={image} />
          </Circle>

          <Image
            src={RoundTextBlack}
            width={500}
            height={500}
            onClick={() => scrollTo("prods")}
          />
        </Round>
      </Container>
    </Section>
  );
};

export default Home;

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`;
const Round = styled(motion.div)`
  position: absolute;
  bottom: 12rem;
  right: 10%;
  width: 6rem;
  height: 6rem;
  border: 1px solid #0d6389;
  border-radius: 50%;
  z-index: 500;

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }
  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }
  @media (max-width: 48em) {
    visibility: hidden;
  }
`;

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};

  @media (max-width: 64em) {
    width: 2rem;
    height: 2rem;
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const HeroCard = styled.div`
  margin-left: 60rem;

  @media screen and (max-width: 1200px) {
    margin: auto;
    margin-top: -20rem;
    padding: 1rem 2rem;
  }
`;
