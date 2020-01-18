import React from 'react';
import Header from "./Header.jsx";
import NavBar from "./Nav/NavBar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import {Ripple} from "react-preloaders";

export default function App() {
    return (
        <>
          <Ripple background={"linear-gradient(180deg, #0f0c29, #302b63, #24243e)"}
                 color={"white"} />
          <Header />
          <NavBar />
          <Content/>
          <Footer />
        </>

    )
}