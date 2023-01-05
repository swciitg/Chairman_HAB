import React from "react";
import ProjectsForm from "../../../components/Admin/ProjectsForm/ProjectsForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditProjectsScreen = () => {
    const location = useLocation();
  return (
    <>
      <ProjectsForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditProjectsScreen;