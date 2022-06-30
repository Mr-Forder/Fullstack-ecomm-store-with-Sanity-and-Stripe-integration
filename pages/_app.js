import "../styles/globals.css";
import { useEffect, useState, useRef } from "react";
import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import { StateContext } from "../context/StateContext";
//adds
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
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
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      });
    });

    // `useEffect`'s cleanup phase
    return () => scroll.destroy();
  });
  return (
    <div>
      <StateContext>
        <GlobalStyles />
        <ThemeProvider theme={light}>
          <LocomotiveScrollProvider
            options={{
              smooth: true,
              // ... all available Locomotive Scroll instance options
              smartphone: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              },
            }}
            watch={
              [
                //..all the dependencies you want to watch to update the scroll.
                //  Basicaly, you would want to watch page/location changes
                //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
              ]
            }
            containerRef={containerRef}
          >
            <main className="App" data-scroll-container ref={containerRef}>
              <Toaster />

              <Layout>
                <Component {...pageProps} />
              </Layout>
            </main>
          </LocomotiveScrollProvider>
        </ThemeProvider>
      </StateContext>
    </div>
  );
}

export default MyApp;
