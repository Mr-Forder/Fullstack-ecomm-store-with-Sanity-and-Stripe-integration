import "../styles/globals.css";
import { useEffect, useState, useRef } from "react";
import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import { StateContext } from "../context/StateContext";
//adds
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRouter } from "next/router";
import GlobalStyles from "../styles/GlobalStyles";
import { light } from "../styles/Themes";
import { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import Loading from "../components/Loading";
//
// import "locomotive-scroll/dist/locomotive-scroll.css";
function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);
  const { asPath } = useRouter(); // With next/router
  //locomotive scroll
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smoothMobile: false,
        resetNativeScroll: true,
      });
    });

    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
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
            }}
            watch={
              [
                //...all the dependencies you want to watch to update the scroll EXCEPT the location one
              ]
            }
            location={asPath}
            containerRef={containerRef}
            onLocationChange={(scroll) =>
              scroll.scrollTo(0, { duration: 0, disableLerp: true })
            } // If you want to reset the scroll position to 0 for example
            onUpdate={() => console.log("Updated, but not on location change!")} // Will trigger on
          >
            <main className="App" data-scroll-container ref={containerRef}>
              <Toaster
                containerStyle={{
                  position: "fixed",
                }}
              />

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
