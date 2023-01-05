import React from "react";
import SimulationSoftwaresForm from "../../../components/Admin/SimulationSoftwaresForm/SimulationSoftwaresForm";
import { useLinkClickHandler, useLocation } from "react-router-dom";

const EditSimulationSoftwaresScreen = () => {
    const location = useLocation();
  return (
    <>
      <SimulationSoftwaresForm type="Edit" formData={location.state} />
    </>
  );
};
export default EditSimulationSoftwaresScreen;