import React from "react";
import PublicationForm from "../../../components/Admin/PublicationForm/PublicationForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditPublicationScreen = () => {
    const location = useLocation();
  return (
    <>
      <PublicationForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditPublicationScreen;