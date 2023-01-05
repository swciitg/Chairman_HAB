import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_API } from "../../../constant";

const ResearchForm = ({ type, formData }) => {
  const [title, setTitle] = useState(
    formData && formData.title ? formData.title : ""
  );

  const [description, setDescription] = useState(
    formData && formData.description ? formData.description : ""
  );

  const [picture, setPicture] = useState(
    null
    // formData && formData.picture ? formData.picture : null
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (picture) {
        console.log(picture);
        const formData1 = new FormData();
        formData1.append("keyResearchAreaTitle", title);
        formData1.append("keyResearchAreaDescription", description);
        formData1.append("keyResearchAreaImage", picture, picture.name);
        console.log(formData1);
        res = await axios
          .post(`${BACKEND_API}/keyResearchArea`, formData1, {
            headers: {
              "Content-Type": "multipart/form-data",
              // Accept: "multipart/form-data",
            },
          })
          .then((window.location.href = "./"));
      } else {
        res = await axios.post(
          `${BACKEND_API}/keyResearchArea`,
          {
            keyResearchAreaTitle: title,
            keyResearchAreaDescription: description,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} Key Research Areas</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
          <p className="text-xl pb-6 flex items-center">
            <i className="fas fa-list mr-3"></i>
          </p>
          <div className="leading-loose">
            <form
              className="p-10 bg-white rounded shadow-xl"
              // onSubmit={(e) => formSubmitHandler(e)}
            >
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
                  htmlFor="description"
                >
                  Description
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="funding_agency"
                  name="funding_agency"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="picture"
                >
                  Picture
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="picture"
                  name="picture"
                  type="file"
                  onChange={(e) => setPicture(e.target.files[0])}
                  // value={picture}
                  required
                />
              </div>

              <div className="mt-6">
                <button
                  className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                  type="submit"
                  onClick={handleSubmit}
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

export default ResearchForm;
