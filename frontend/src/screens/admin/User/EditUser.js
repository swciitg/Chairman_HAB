import React from "react";
import UserForm from "../../../components/Admin/UserForm/UserForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditUserScreen = () => {
    const location = useLocation();
  return (
    <>
      <UserForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditUserScreen;