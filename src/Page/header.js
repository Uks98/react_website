import React from "react";
import "./Header.css";
import "./mainNav.css";
import Logo from './logo.js'
import MainNav from './mainNav.js'
import ImageSlider from './imageSlider.js'
import IntroText from './introText.js'
import Items from './Items.js'
import Footer from './footter.js'
import { Mobile, PC } from "./MediaQuery.js"
import { Link, Route, Routes } from "react-router-dom";


function Main() {
  return (
    <div className="container">
      <header className="header">
        <div className="nav">
          <ul>
            <li><Link to="/login">Login or Create an Account</Link></li>
          </ul>
        </div>
        <div className="search-container">
          <a href="#">Cart: 0 Items</a>
          <input type="text" placeholder="Search..." />
        </div> 
      </header>
      {/* 로고이미지 파일 */}
      <Logo />
      <MainNav />
      <ImageSlider />
      <IntroText />
      <Items />
      <Items />
      <Footer />
    </div>
  );
}

export default Main;
