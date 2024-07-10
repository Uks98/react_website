import React from "react";
import "./Header.css";
import "./mainNav.css";
import Logo from './logo.js'
import MainNav from './mainNav.js'
import ImageSlider from './imageSlider.js'
import IntroText from './introText.js'
function Main() {
  return (
    <div className="container">
      <header className="header">
        <div className="nav">
          <ul>
            <li><a href="#">Login or Create an Account</a></li>
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
    </div>
  );
}

export default Main;
