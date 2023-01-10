import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BASEURL } from "./constant";
import AdminScreen from "./screens/admin/AdminScreen";
import Main from "./screens/Main/Main";
function App() {
  return (
    <>
      <BrowserRouter basename={BASEURL}>
        <Routes >
        <Route path="/admin/*" exact element={<AdminScreen />} />
        <Route path="/*" exact element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
