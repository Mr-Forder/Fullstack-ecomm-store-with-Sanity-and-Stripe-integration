import "../styles/globals.css";
import { useEffect, useState, useRef } from "react";
import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import { StateContext } from "../context/StateContext";
//adds

import { useRouter } from "next/router";
import GlobalStyles from "../styles/GlobalStyles";
import { light } from "../styles/Themes";
import { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import Loading from "../components/Loading";
//
// import "locomotive-scroll/dist/locomotive-scroll.css";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <StateContext>
        <GlobalStyles />
        <ThemeProvider theme={light}>
          <main className="App">
            <Toaster
              containerStyle={{
                position: "fixed",
              }}
            />

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
