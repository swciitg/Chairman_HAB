import React, { useEffect } from "react";
import Sidebar from "../../components/Admin/Sidenav/Sidebar";
import "./AdminScreen.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ProjectsScreen from "./Projects/Projects";
import AddProjectsScreen from "./Projects/AddProjects";
import EditProjectsScreen from "./Projects/EditProjects";
import ResearchScreen from "./Research/Research";
import AddResearchScreen from "./Research/AddResearch";
import EditResearchScreen from "./Research/EditResearch";
import AboutScreen from "./About/About";
import AddAboutScreen from "./About/AddAbout";
import EditAboutScreen from "./About/EditAbout";
import PublicationScreen from "./Publications/Publications";
import AddPublicationScreen from "./Publications/AddPublications";
import EditPublicationScreen from "./Publications/EditPublications";
import ExperimentalFacilitiesScreen from "./ExperimentalFacilities/ExperimentalFacilities";
import AddExperimentalFacilitiesScreen from "./ExperimentalFacilities/AddExperimentalFacilities";
import EditExperimentalFacilitiesScreen from "./ExperimentalFacilities/EditExperimentalFacilities";
import AlumniScreen from "./Alumni/Alumni";
import AddAlumniScreen from "./Alumni/AddAlumni";
import EditAlumniScreen from "./Alumni/EditAlumni";
import BooksScreen from "./Books/Books";
import AddBooksScreen from "./Books/AddBooks";
import EditBooksScreen from "./Books/EditBooks";
import CollaboratorsScreen from "./Collaborators/Collaborators";
import AddCollaboratorsScreen from "./Collaborators/AddCollaborators";
import EditCollaboratorsScreen from "./Collaborators/EditCollaborators";
import GroupMembersScreen from "./GroupMembers/GroupMembers";
import AddGroupMembersScreen from "./GroupMembers/AddGroupMembers";
import EditGroupMembersScreen from "./GroupMembers/EditGroupMembers";
import HomePageImageScreen from "./HomePageImage/HomePageImage";
import AddHomePageImageScreen from "./HomePageImage/AddHomePageImage";
import EditHomePageImageScreen from "./HomePageImage/EditHomePageImage";
import InvitedTalksScreen from "./InvitedTalks/InvitedTalks";
import AddInvitedTalksScreen from "./InvitedTalks/AddInvitedTalks";
import EditInvitedTalksScreen from "./InvitedTalks/EditInvitedTalks";
import JournalPublicationsScreen from "./JournalPublications/JournalPublications";
import AddJournalPublicationsScreen from "./JournalPublications/AddJournalPublications";
import EditJournalPublicationsScreen from "./JournalPublications/EditJournalPublications";
import MiscellaneousScreen from "./Miscellaneous/Miscellaneous";
import AddMiscellaneousScreen from "./Miscellaneous/AddMiscellaneous";
import EditMiscellaneousScreen from "./Miscellaneous/EditMiscellaneous";
import PastMembersScreen from "./PastMembers/PastMembers";
import AddPastMembersScreen from "./PastMembers/AddPastMembers";
import EditPastMembersScreen from "./PastMembers/EditPastMembers";
import ProfileScreen from "./Profile/Profile";
import AddProfileScreen from "./Profile/AddProfile";
import EditProfileScreen from "./Profile/EditProfile";
import PublishedConferencePapersScreen from "./PublishedConferencePapers/PublishedConferencePapers";
import AddPublishedConferencePapersScreen from "./PublishedConferencePapers/AddPublishedConferencePapers";
import EditPublishedConferencePapersScreen from "./PublishedConferencePapers/EditPublishedConferencePapers";
import AddSimulationSoftwaresScreen from "./SimulationSoftwares/AddSimulationSoftwares";
import EditSimulationSoftwaresScreen from "./SimulationSoftwares/EditSimulationSoftwares";
import SimulationSoftwaresScreen from "./SimulationSoftwares/SimulationSoftwares";
import UpdatesScreencreen from "./Updates/Updates";
import AddUserScreen from "./User/AddUser";
import EditUpdatesScreen from "./Updates/EditUpdates";

// import useAuthCheck from "../../hooks/useAuthCheck";

const AdminScreen = () => {
  // let userData = useSelector((store) => store.auth);
  // console.log("timepass", { userData });
  // const isLoggedIn = useAuthCheck();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/login", { replace: true });
  //     return;
  //   }
  // }, [isLoggedIn]);

  return (
    <div className="bg-gray-100 font-family-karla flex">
      {/* {userData ? (
        <>
          {userData?.is_staff ? ( */}
            <Sidebar>
              <Routes> 
              <Route
                  exact
                  path={`/projects`}
                  element={<ProjectsScreen />}
                />       
                <Route
                  exact
                  path={`/projects/add`}
                  element={<AddProjectsScreen />}
                /> 
                 <Route
                  exact
                  path={`/projects/:id`}
                  element={<EditProjectsScreen />}
                /> 
                 <Route
                  exact
                  path={`/keyResearchArea`}
                  element={<ResearchScreen />}
                />
                 <Route
                  exact
                  path={`/keyResearchArea/add`}
                  element={<AddResearchScreen />}
                />
                 <Route
                  exact
                  path={`/keyResearchArea/:id`}
                  element={<EditResearchScreen />}
                />
                 <Route
                  exact
                  path={`/alumni`}
                  element={<AlumniScreen />}
                />
                 <Route
                  exact
                  path={`/alumni/add`}
                  element={<AddAlumniScreen />}
                />
                 <Route
                  exact
                  path={`/alumni/:id`}
                  element={<EditAlumniScreen />}
                />
                 <Route
                  exact
                  path={`/publication`}
                  element={<PublicationScreen />}
                />
                 <Route
                  exact
                  path={`/publication/add`}
                  element={<AddPublicationScreen />}
                />
                 <Route
                  exact
                  path={`/publication/:id`}
                  element={<EditPublicationScreen />}
                />
                 <Route
                  exact
                  path={`/experimentalfacilities`}
                  element={<ExperimentalFacilitiesScreen />}
                />
                 <Route
                  exact
                  path={`/experimentalfacilities/add`}
                  element={<AddExperimentalFacilitiesScreen />}
                />
                 <Route
                  exact
                  path={`/experimentalfacilities/:id`}
                  element={<EditExperimentalFacilitiesScreen />}
                />
                <Route
                  exact
                  path={`/about`}
                  element={<AboutScreen />}
                />
                 <Route
                  exact
                  path={`/about/add`}
                  element={<AddAboutScreen />}
                />
                 <Route
                  exact
                  path={`/about/:id`}
                  element={<EditAboutScreen />}
                />
                <Route
                  exact
                  path={`/books`}
                  element={<BooksScreen />}
                />
                 <Route
                  exact
                  path={`/books/add`}
                  element={<AddBooksScreen />}
                />
                 <Route
                  exact
                  path={`/books/:id`}
                  element={<EditBooksScreen />}
                />
                <Route
                  exact
                  path={`/Collaborators`}
                  element={<CollaboratorsScreen />}
                />
                 <Route
                  exact
                  path={`/Collaborators/add`}
                  element={<AddCollaboratorsScreen />}
                />
                 <Route
                  exact
                  path={`/Collaborators/:id`}
                  element={<EditCollaboratorsScreen />}
                />
                <Route
                  exact
                  path={`/GroupMembers`}
                  element={<GroupMembersScreen />}
                />
                 <Route
                  exact
                  path={`/GroupMembers/add`}
                  element={<AddGroupMembersScreen />}
                />
                 <Route
                  exact
                  path={`/GroupMembers/:id`}
                  element={<EditGroupMembersScreen />}
                />
                <Route
                  exact
                  path={`/HomePageImage`}
                  element={<HomePageImageScreen />}
                />
                 <Route
                  exact
                  path={`/HomePageImage/add`}
                  element={<AddHomePageImageScreen />}
                />
                 <Route
                  exact
                  path={`/HomePageImage/:id`}
                  element={<EditHomePageImageScreen />}
              
                />

                <Route
                  exact
                  path={`/invitedtalks`}
                  element={<InvitedTalksScreen />}
                />

<Route
                  exact
                  path={`/invitedtalks/add`}
                  element={<AddInvitedTalksScreen />}
              
                />
                <Route
                  exact
                  path={`/invitedtalks/:id`}
                  element={<EditInvitedTalksScreen />}
              
                />


<Route
                  exact
                  path={`/journalpublications`}
                  element={<JournalPublicationsScreen />}
                />

<Route
                  exact
                  path={`/journalpublications/add`}
                  element={<AddJournalPublicationsScreen />}
              
                />
                <Route
                  exact
                  path={`/journalpublications/:id`}
                  element={<EditJournalPublicationsScreen />}
                />

              <Route
                  exact
                  path={`/miscellaneous`}
                  element={<MiscellaneousScreen />}
                />
                 <Route
                  exact 
                  path={`/miscellaneous/add`}
                  element={<AddMiscellaneousScreen />}
                />
                 <Route
                  exact
                  path={`/miscellaneous/:id`}
                  element={<EditMiscellaneousScreen />}
              
                />

<Route
                  exact
                  path={`/pastmembers`}
                  element={<PastMembersScreen />}
                />
                 <Route
                  exact 
                  path={`/pastmembers/add`}
                  element={<AddPastMembersScreen />}
                />
                 <Route
                  exact
                  path={`/pastmembers/:id`}
                  element={<EditPastMembersScreen />}    
                />

<Route
                  exact
                  path={`/profile`}
                  element={<ProfileScreen />}
                />
                 <Route
                  exact 
                  path={`/profile/add`}
                  element={<AddProfileScreen />}
                />
                 <Route
                  exact
                  path={`/profile/:id`}
                  element={<EditProfileScreen />}    
                />

<Route
                  exact
                  path={`/publishedconferencepapers`}
                  element={<PublishedConferencePapersScreen />}
                />
                 <Route
                  exact 
                  path={`/publishedconferencepapers/add`}
                  element={<AddPublishedConferencePapersScreen />}
                />
                 <Route
                  exact
                  path={`/publishedconferencepapers/:id`}
                  element={<EditPublishedConferencePapersScreen />}    
                />


<Route
                  exact
                  path={`/simulationsoftwares`}
                  element={<SimulationSoftwaresScreen />}
                />
                 <Route
                  exact 
                  path={`/simulationsoftwares/add`}
                  element={<AddSimulationSoftwaresScreen />}
                />
                 <Route
                  exact
                  path={`/simulationsoftwares/:id`}
                  element={<EditSimulationSoftwaresScreen />}    
                />

              <Route
                  exact
                  path={`/updates`}
                  element={<UpdatesScreencreen />}
                />
                 <Route
                  exact 
                  path={`/updates/add`}
                  element={<AddUserScreen />}
                />
                 <Route
                  exact
                  path={`/updates/:id`}
                  element={<EditUpdatesScreen />}    
                />

              </Routes>
            </Sidebar>
          {/* ) : (
            <div className="absolute left-1/2 top-1/2 transform -translate-x-2/4 -translate-y-1/2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-center">
                  You are Not Authorized.
                </h1>
                <p className="text-center mt-2 text-xl">
                  Go back to{" "}
                  <Link to="/" className="text-blue-600 hover:underline">
                    home
                  </Link>
                </p>
              </div>
            </div>
          )}
        </> */}
      {/* ) : (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-2/4 -translate-y-1/2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-center">
              Welcome to Admin Panel.
            </h1>
            <p className="text-xl sm:text-2xl text-center mt-3">
              Please{" "}
              
              <Link to="/login">
                <button className="border-2 py-1 px-4 rounded-md text-sm font-medium">
                  Login
                </button>
              </Link>
            </p>
          </div>
        </div>
      )} */}
    </div>
    
  );
};

export default AdminScreen;