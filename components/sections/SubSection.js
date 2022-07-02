import styled, { keyframes } from "styled-components";
import TypeWriterText from "../TypeWriterText";
import AboutUs from "../AboutUs";
import RoundTextBlack from "../../assets/Rounded-Text-Black.png";
import Loading from "../Loading";
import Image from "next/image";
import image from "../../assets/rune.svg";
import Rune from "../Rune";

const SubSection = () => {
  return (
    <Section id="about">
      <div class="custom-shape-divider-top-1656276281 ">
        <svg
          className="cshape"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
      <Container>
        <div className="info">
          <h2>
            The Gokotta collection marks Brahe's seventh year in business.
          </h2>
          <p>
            Bringing together the works of Marcantonio Raimondi Malerba, Johann
            Steyn and Ania Kabassa, Gokotta seeks to blend Nordic tradition with
            modern material. Inspired by the connections between man and nature,
            The Gokotta collection presents sleek, aesthetically pleasing
            Scandinavian styling with a playful touch.
          </p>
          <br></br>
          <h2>Hrafn</h2>

          <p>
            The lynchpin of Gokotta is Marcantonio Raimondi Malerba's
            beautifully designed ravens.
          </p>
          <br></br>
          <p>
            Inspired by the connections between man and nature, Malerba tries to
            work in the way he played as a child – making something from
            everything he found whether it was stones and twigs or crystals and
            fossils.
          </p>
          <br></br>
          <p>
            He’s never attended design school, but after graduating he worked in
            theatre, with architects and on his own design and art projects,
            finding inspiration in the intersections between disciplines.
          </p>
          <br></br>
          <p>
            Despite all evidence to the contrary, Malerba doesn’t see his take
            on furniture design as particularly unusual...
          </p>
        </div>

        <div className="info-rune">
          <Rune />
        </div>
      </Container>
      <VideoContainer>
        <DarkOverlay />
        <video src="../lightsplash.m4v" type="video/mp4" autoPlay muted loop />
        {/* <Image src={room} className="title" layout="fill" objectFit="cover" /> */}
      </VideoContainer>
      <div class="custom-shape-divider-bottom-1656276313">
        <svg
          className="cshape"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
    </Section>
  );
};

export default SubSection;

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  margin-top: -3.5rem;
`;

const Container = styled.div`
  width: 75%;
  min-height: 100vh;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: center;

  .info-rune {
    width: 50%;
    margin-left: -2rem !important;
    padding-top: 5rem;
  }

  .info {
    width: 50%;
    h2 {
      padding: 1rem 0rem;
      color: #0d6389;
    }

    p {
      font-weight: 100;
      font-style: normal;
      font-variant: normal;
      text-transform: none;
      text-decoration: rgb(159, 164, 167);
      text-align: start;
      text-indent: 0px;
      font-family: "Archivo Narrow";

      vertical-align: baseline;
      letter-spacing: 10;

      color: #73848b;
      font-size: 20px;
    }

    @media screen and (max-width: 1200px) {
      padding: 0rem 1.5rem;
      p {
        color: #515f64;
      }
    }
  }

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
    object-position: center 50%;
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
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.2)
  );
`;
