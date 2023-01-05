import React from "react";
import BooksForm from "../../../components/Admin/BooksForm/BooksForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditBooksScreen = () => {
  const location = useLocation();
  return (
    <>
      <BooksForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditBooksScreen;
