"use client";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Layout } from "./components/Layout";
import { LandingPage } from "./Pages/Landing-page/LandingPage";
import { SignUp } from "./Pages/SignUp";
import { LogIn } from "./Pages/LogIn";
import { DashboardLayout } from "./Pages/Dashboard/DashboardLayout";

import { Cart } from "./components/Cart";


function App() {
 

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="dashboard" element={<DashboardLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
