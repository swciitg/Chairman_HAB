import React from "react";
import HomePageImageForm from "../../../components/Admin/HomePageImageForm/HomePageImageForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditHomePageImageScreen = () => {
    const location = useLocation();
  return (
    <>
      <HomePageImageForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditHomePageImageScreen;