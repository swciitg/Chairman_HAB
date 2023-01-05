import React from "react";
import AlumniForm from "../../../components/Admin/AlumniForm/AlumniForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditAlumniScreen = () => {
    const location = useLocation();
  return (
    <>
      <AlumniForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditAlumniScreen;