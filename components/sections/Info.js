import styled from "styled-components";
import Image from "next/image";
import image from "../../assets/bg.jpg";
import dynamic from "next/dynamic";
const Team = () => {
  return (
    <Section>
      <Container>
        <div className="wrap">
          <Image src={image}></Image>
        </div>
      </Container>
    </Section>
  );
};

export default Team;

const Section = styled.section`
  width: 100%;

  position: relative;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .wrap {
    position: relative;
    width: 60%;

    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }
  .content {
    z-index: 1;
    width: 75%;
    position: absolute;
    margin: 0 10%;
  }

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;
