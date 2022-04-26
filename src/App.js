import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/header.component";
import Homepage from "./pages/Homepage/home.page";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/signinandsignup.page";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route exact path="/login" element={<SignInAndSignUpPage />}/>
      </Routes>
    </div>
  );
};

export default App;
