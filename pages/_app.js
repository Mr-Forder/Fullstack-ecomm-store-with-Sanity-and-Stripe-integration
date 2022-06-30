import "../styles/globals.css";
import { useEffect, useState, useRef } from "react";
import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import { StateContext } from "../context/StateContext";
//adds
import GlobalStyles from "../styles/GlobalStyles";
import { light } from "../styles/Themes";
import { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import Loading from "../components/Loading";
//
// import "locomotive-scroll/dist/locomotive-scroll.css";
function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);

  //locomotive scroll
  // useEffect(() => {
  //   let scroll;
  //   import("locomotive-scroll").then((locomotiveModule) => {
  //     scroll = new locomotiveModule.default({
  //       el: document.querySelector("[data-scroll-container]"),
  //       smooth: true,
  //       smoothMobile: false,
  //       resetNativeScroll: true,
  //     });
  //   });

  //   // `useEffect`'s cleanup phase
  //   return () => scroll.destroy();
  // });
  return (
    <div>
      <StateContext>
        <GlobalStyles />
        <ThemeProvider theme={light}>
          <main className="App" data-scroll-container ref={containerRef}>
            <Toaster />

            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </ThemeProvider>
      </StateContext>
    </div>
  );
}

export default MyApp;
