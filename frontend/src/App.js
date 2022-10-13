import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BASEURL } from "./constant";
import AdminScreen from "./screens/admin/AdminScreen";
function App() {
  return (
   <>
      <BrowserRouter basename={BASEURL}>
        <Routes>
        <Route path="/admin/*" exact element={<AdminScreen/>} />
        </Routes>
      </BrowserRouter>
      <Toaster />
   </> 
  );
}

export default App;