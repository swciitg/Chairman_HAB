import React from "react";
import CollaboratorsForm from "../../../components/Admin/CollaboratorsForm/CollaboratorsForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditCollaboratorsScreen = () => {
    const location = useLocation();
  return (
    <>
      <CollaboratorsForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditCollaboratorsScreen;