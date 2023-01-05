import React from "react";
import InvitedTalksForm from "../../../components/Admin/InvitedTalksForm/InvitedTalksForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditInvitedTalksScreen = () => {
    const location = useLocation();
  return (
    <>
      <InvitedTalksForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditInvitedTalksScreen;