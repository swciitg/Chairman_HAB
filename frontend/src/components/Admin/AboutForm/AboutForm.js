import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_API } from "../../../constant";

const AboutForm = ({ type, formData }) => {
  const [desc, setdesc] = useState(
    formData && formData.desc ? formData.desc : ""
  );

  const addNote = () => {
    const note = { description: desc };
    axios
      .post(`${BACKEND_API}/about`, note)
      .then((res) => {
        console.log(res);
        alert(`Note added successfully`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editNote = (id) => {
    const note = { desc };
    axios
      .post(`${BACKEND_API}/about`, note)
      .then((res) => {
        console.log(res);
        alert(`Note added successfully`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const method = type === "Add" ? addNote : editNote;

  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} About Us</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
          <p className="text-xl pb-6 flex items-center">
            <i className="fas fa-list mr-3"></i>
          </p>
          <div className="leading-loose">
            <form
              className="p-10 bg-white rounded shadow-xl"
              onSubmit={(e) => {
                e.preventDefault();
                method();
              }}
            >
              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="desc">
                  Description
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="desc"
                  name="desc"
                  type="text"
                  onChange={(e) => setdesc(e.target.value)}
                  value={desc}
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

export default AboutForm;
