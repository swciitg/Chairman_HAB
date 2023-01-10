import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HomeScreen from "../Home/HomeScreen";
import MembersScreen from "../Members/MembersScreen";
import ProjectsScreen from "../Projects/ProjectsScreen";
import PublicationsScreen from "../Publications/PublicationsScreen";
import ResearchScreen from "../Research/ResearchScreen";

const Main = () => {
  return (
    <div className="bg-gray-200	">
        <Header />
        <Routes>
          <Route path="/*" exact element={<HomeScreen />} />
          <Route path="/research/*" exact element={<ResearchScreen />} />
          <Route path="/projects/*" exact element={<ProjectsScreen />} />
          <Route path="/publications/*" exact element={<PublicationsScreen />} />
          <Route path="/members/*" exact element={<MembersScreen/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default Main;
