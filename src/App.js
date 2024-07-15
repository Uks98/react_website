import "./App.css";
import Logo from "./Page/logo.js";
import Main from "./Page/header.js";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Page/login/login.js";
import CampService from "./Page/maps/maps.js"
import { NaverMapsProvider } from 'react-naver-maps';
function App() {
  return (
    <Routes>
        <Route path="/" element = {<Main />}/>      
        <Route path="/login" element = {<LoginPage />}/>      
        <Route path="/cart" element = {<CampService />}/>   
    </Routes>
  );
}

export default App;
