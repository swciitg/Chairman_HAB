import React from "react";
import MiscellaneousForm from "../../../components/Admin/MiscellaneousForm/MiscellaneousForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditMiscellaneousScreen = () => {
    const location = useLocation();
  return (
    <>
      <MiscellaneousForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditMiscellaneousScreen;