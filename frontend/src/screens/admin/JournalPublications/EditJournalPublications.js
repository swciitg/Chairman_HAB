import React from "react";
import JournalPublicationsForm from "../../../components/Admin/JournalPublicationsForm/JournalPublicationsForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditJournalPublicationsScreen = () => {
    const location = useLocation();
  return (
    <>
      <JournalPublicationsForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditJournalPublicationsScreen;