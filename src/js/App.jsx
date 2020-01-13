import React from 'react';
import Header from "./Header.jsx";
import NavBar from "./Nav/NavBar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";


export default function App() {
    return (
        <>
          <Header />
          <NavBar />
          <Content/>
          <Footer/>
        </>
    )
}