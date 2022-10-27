import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BASEURL } from "./constant";
import AdminScreen from "./screens/admin/AdminScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import MembersScreen from "./screens/Members/MembersScreen";
import ProjectsScreen from "./screens/Projects/ProjectsScreen";
import PublicationsScreen from "./screens/Publications/PublicationsScreen";
import ResearchScreen from "./screens/Research/ResearchScreen";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import  Table  from "./components/Project-Table/Table";
function App() {
  return (
    <>
      {/* <div>
        <Link to="/">Home</Link>
        <Link to="/research">Research</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/members">Members</Link>
      </div> */}

      <BrowserRouter basename={BASEURL}>
        <Header />
        <Footer />
        <Routes>
          <Route path="/admin/*" exact element={<AdminScreen />} />
          <Route path="/*" exact element={<HomeScreen />} />
          <Route path="/research/*" exact element={<ResearchScreen />} />
          <Route path="/projects/*" exact element={<ProjectsScreen />} />
          <Route path="/publications/*" exact element={<PublicationsScreen />} />
          <Route path="/members/*" exact element={<MembersScreen />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
