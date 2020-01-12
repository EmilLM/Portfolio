import React from 'react';
import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";


export default class App extends React.Component {
  render() {
    return (
        <>
          <Header />
          <NavBar />
          <Content/>
          <Footer/>
        </>
    )
  }
}