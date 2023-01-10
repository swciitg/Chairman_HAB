import React from "react";
import AboutForm from "../../../components/Admin/AboutForm/AboutForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditAboutScreen = () => {
    const location = useLocation();
    console.log(location.state);
  return (
    <>
      <AboutForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditAboutScreen;