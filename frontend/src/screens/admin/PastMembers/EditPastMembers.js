import React from "react";
import PastMembersForm from "../../../components/Admin/PastMembersForm/PastMembersForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditPastMembersScreen = () => {
    const location = useLocation();
  return (
    <>
      <PastMembersForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditPastMembersScreen;