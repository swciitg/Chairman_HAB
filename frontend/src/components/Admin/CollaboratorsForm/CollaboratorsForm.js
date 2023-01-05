import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_API } from "../../../constant";

const CollaboratorsForm = ({ type, formData }) => {
  const [name, setname] = useState(
    formData && formData.name ? formData.name : ""
  );

  const [designation, setdesignation] = useState(
    formData && formData.designation ? formData.designation : ""
  );

  const [universityName, setuniversityName] = useState(
    formData && formData.universityName ? formData.universityName : ""
  );

  const [countryName, setcountryName] = useState(
    formData && formData.countryName ? formData.countryName : ""
  );

  const addNote = () => {
    const note = {
      collaboratorName: name,
      designation: designation,
      universityName: universityName,
      countryName: countryName
    };
    const req = axios
      .post(`${BACKEND_API}/collaborator`, note)
      .then((res) => {
        console.log(res);
        alert('Note successfully added.')
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(req);
  };

  const editNote = (id) => {
    const note = {
      collaboratorName: name,
      designation: designation,
      universityName: universityName,
      countryName: countryName
    };
    const req = axios
      .put(`${BACKEND_API}/${id}`, note)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(req);
  };

  const method = type === "Add" ? addNote : editNote;

  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} Collaborators</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
          <p className="text-xl pb-6 flex items-center">
            <i className="fas fa-list mr-3"></i>
          </p>
          <div className="leading-loose">
            <form
              className="p-10 bg-white rounded shadow-xl"
              onSubmit={(event) => {
                    event.preventDefault();
                    method();
                  }}            >
              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="name"
                  name="name"
                  type="text"
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="designation">
                  Designation
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="designation"
                  name="designation"
                  type="text"
                  onChange={(e) => setdesignation(e.target.value)}
                  value={designation}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="universityName">
                  University Name
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="universityName"
                  name="universityName"
                  type="text"
                  onChange={(e) => setuniversityName(e.target.value)}
                  value={universityName}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="countryName">
                  Country Name
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="countryName"
                  name="countryName"
                  type="text"
                  onChange={(e) => setcountryName(e.target.value)}
                  value={countryName}
                  required
                />
              </div>
              
              <div className="mt-6">
                <button
                  className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollaboratorsForm;