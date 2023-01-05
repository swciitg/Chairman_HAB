import React from "react";
import ResearchForm from "../../../components/Admin/ResearchForm/ResearchForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditResearchScreen = () => {
    const location = useLocation();
  return (
    <>
      <ResearchForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditResearchScreen;