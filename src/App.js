import "./App.css";
import Logo from "./Page/logo.js";
import Main from "./Page/header.js";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Page/login/login.js";

function App() {
  return (
    <Routes>
        <Route path="/" element = {<Main />}/>      
        <Route path="/login" element = {<LoginPage />}/>      
       
    </Routes>
  );
}

export default App;
