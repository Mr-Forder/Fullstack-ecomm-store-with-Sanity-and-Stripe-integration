import { useState, useEffect } from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Privacy = () => {
  const Info = dynamic(() => import("../components/sections/Info"), {
    ssr: false,
  });

  return (
    <div>
      <Wrapper
        className="products-heading"
        animate={{ opacity: 1, transition: { duration: 2 } }}
        initial={{ opacity: 0 }}
      >
        <h2>Privacy Policy</h2>
        <p>
          At Brahe, accessible from Brahe.co.uk, one of our main priorities is
          the privacy of our visitors.{" "}
        </p>{" "}
        <p>
          {" "}
          This Privacy Policy document contains types of information that is
          collected and recorded by Brahe and how we use it.
        </p>{" "}
        <p>
          {" "}
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>
        <h2 className="subs">General Data Protection Regulation (GDPR)</h2>
        <p>We are a Data Controller of your information.</p>{" "}
        <p>
          Brahe legal basis for collecting and using the personal information
          described in this Privacy Policy depends on the Personal Information
          we collect and the specific context in which we collect the
          Information.
        </p>
        <p>
          Brahe will retain your personal information only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use your information to the extent necessary to comply with
          our legal obligations, resolve disputes, and enforce our policies.
        </p>{" "}
        <p>
          {" "}
          If you are a resident of the European Economic Area (EEA), you have
          certain data protection rights. If you wish to be informed what
          Personal Information we hold about you and if you want it to be
          removed from our systems, please contact us.
        </p>
        <h2 className="subs">Log Files</h2>
        <p>Brahe follows a standard procedure of using log files.</p>
        <p>
          {" "}
          These files log visitors when they visit websites. All hosting
          companies do this and a part of hosting services’ analytics. The
          information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and
          time stamp, referring/exit pages, and possibly the number of clicks.{" "}
        </p>
        <p>
          These are not linked to any information that is personally
          identifiable.{" "}
        </p>{" "}
        <p>
          The purpose of the information is for analyzing trends, administering
          the site, tracking users’ movement on the website, and gathering
          demographic information.
        </p>
        <h2 className="subs">Cookies</h2>
        <p>
          Like any other website, Brahe uses ‘cookies’. These cookies are used
          to store information including visitors’ preferences, and the pages on
          the website that the visitor accessed or visited.{" "}
        </p>{" "}
        <p>
          The information is used to optimize the users’ experience by
          customizing our web page content based on visitors’ browser type
          and/or other information.
        </p>
        <h2 className="subs">Privacy Policies</h2>
        <p>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Brahe.
        </p>
        <p>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Brahe, which are sent directly
          to users’ browser.
        </p>
        <p>
          They automatically receive your IP address when this occurs. These
          technologies are used to measure the effectiveness of their
          advertising campaigns and/or to personalize the advertising content
          that you see on websites that you visit. Note that Brahe has no access
          to or control over these cookies that are used by third-party
          advertisers.
        </p>
        <h2 className="subs">Third Party Privacy Policies</h2>
        <p>
          Brahe’s Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.
        </p>
        <p>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers’
          respective websites.
        </p>
        <h2 className="subs">Children&apos;s Information</h2>
        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>
        <p>
          Brahe does not knowingly collect any Personal Identifiable Information
          from children under the age of 13. If you think that your child
          provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>
        <h2 className="subs">Online Privacy Policy Only</h2>
        <p>
          Our Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Brahe. This policy is not applicable to any
          information collected offline or via channels other than this website.
        </p>
        <h2 className="subs">Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
      </Wrapper>
      <Info />
    </div>
  );
};

export default Privacy;

const Wrapper = styled.div`
  width: 70%;
  margin: 5rem auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    padding: 2rem;
  }

  .subs {
    font-size: 1.3rem;
    color: #0d6389;
  }
`;
