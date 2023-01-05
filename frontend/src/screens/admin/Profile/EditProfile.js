import React from "react";
import ProfileForm from "../../../components/Admin/ProfileForm/ProfileForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditProfileScreen = () => {
    const location = useLocation();
  return (
    <>
      <ProfileForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditProfileScreen;