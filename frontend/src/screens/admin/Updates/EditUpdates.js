import React from "react";
import UpdatesForm from "../../../components/Admin/UpdatesForm/UpdatesForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditUpdatesScreen = () => {
    const location = useLocation();
  return (
    <>
      <UpdatesForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditUpdatesScreen;