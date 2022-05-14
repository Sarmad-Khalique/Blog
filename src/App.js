import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/header.component";
import { UserContext } from "./context/user/user.provider";
import Contact from "./pages/Contact/contact.page";
import Homepage from "./pages/Homepage/home.page";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/signinandsignup.page";

const App = () => {
  const { checkUserSession, userLoggedIn } = useContext(UserContext);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path="/login" element={userLoggedIn?<Navigate to="/"/>:<SignInAndSignUpPage />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
