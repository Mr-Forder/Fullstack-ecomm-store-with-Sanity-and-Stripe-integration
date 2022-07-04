import Head from "next/head";
import Navbar from "./Navbar";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
//adds

const Layout = ({ children }) => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="layout">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <title>Brahe Presents: Gokotta</title>
      </Head>
      <header>
        <Navbar />
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
