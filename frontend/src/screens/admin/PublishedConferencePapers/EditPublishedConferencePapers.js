import React from "react";
import PublishedConferencePapersForm from "../../../components/Admin/PublishedConferencePapersForm/PublishedConferencePapersForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditPublishedConferencePapersScreen = () => {
    const location = useLocation();
  return (
    <>
      <PublishedConferencePapersForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditPublishedConferencePapersScreen;