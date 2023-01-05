import React from "react";
import GroupMembersForm from "../../../components/Admin/GroupMembersForm/GroupMembersForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditGroupMembersScreen = () => {
    const location = useLocation();
  return (
    <>
      <GroupMembersForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditGroupMembersScreen;