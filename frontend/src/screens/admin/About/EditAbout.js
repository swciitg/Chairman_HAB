import React from "react";
import AboutForm from "../../../components/Admin/AboutForm/AboutForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditAboutScreen = () => {
    const location = useLocation();
  return (
    <>
      <AboutForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditAboutScreen;