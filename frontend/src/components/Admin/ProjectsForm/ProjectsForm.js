import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_API } from "../../../constant";

const ProjectsForm = ({ type, formData }) => {
  const [title, setTitle] = useState(
    formData && formData.title ? formData.title : ""
  );

  const [fundingAgency, setFundingAgency] = useState(
    formData && formData.funding_agency ? formData.funding_agency : ""
  );

  const [duration, setDuration] = useState(
    formData && formData.duration ? formData.duration : ""
  );

  const [investigator, setInvestigator] = useState(
    formData && formData.investigator ? formData.investigator : ""
  );

  const [serialNumber, setSerialNumber] = useState(0);

  const generateSerialNumber = () => {
    axios
      .get(`${BACKEND_API}/projects`)
      .then((res) => {
        console.log(res); 
        setSerialNumber(res.data.data.Project.length);
      })
      .catch((error) => console.log(error));
  };

  const addNote = () => {
    generateSerialNumber();
    const note = {
      serialNumber: serialNumber,
      projectTitle: title,
      fundingAgencyName: fundingAgency,
      duration: duration,
      investigators: investigator,
    };
    console.log(note);
    const req = axios
      .post(`${BACKEND_API}/projects`, note)
      .then((res) => {
        console.log(res);
        alert("Note successfully added.");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(req);
  };

  const link_id = formData && formData.id;
  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} Project</h1>
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
                    addNote();
                  }}            >
              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="Title">
                  Title
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="title"
                  name="title"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="Funding Agency"
                >
                  Funding Agency
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="funding_agency"
                  name="funding_agency"
                  type="text"
                  onChange={(e) => setFundingAgency(e.target.value)}
                  value={fundingAgency}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="Duration"
                >
                  Duration
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="duration"
                  name="duration"
                  type="text"
                  onChange={(e) => setDuration(e.target.value)}
                  value={duration}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="Investigator"
                >
                  Investigator
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="investigator"
                  name="investigator"
                  type="text"
                  onChange={(e) => setInvestigator(e.target.value)}
                  value={investigator}
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

export default ProjectsForm;
