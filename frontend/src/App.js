import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BASEURL } from "./constant";
import Header from "./components/Header/Header";
function App() {
  return (
   <>
      <BrowserRouter basename={BASEURL}>
        <Routes>
        </Routes>
      </BrowserRouter>
      <Toaster />
      <Header />
   </> 
  );
}

export default App;