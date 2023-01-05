import React from "react";
import ExperimentalFacilitiesForm from "../../../components/Admin/ExperimentalFacilitiesForm/ExperimentalFacilitiesForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditExperimentalFacilitiesScreen = () => {
    const location = useLocation();
  return (
    <>
      <ExperimentalFacilitiesForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditExperimentalFacilitiesScreen;