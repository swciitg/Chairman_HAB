import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExperimentalFacilitiesForm = ({ type, formData }) => {
  const [experimentalfacilitiestitle, setexperimentalfacilitiestitle] = useState(
    formData && formData.experimentalfacilitiestitle ? formData.experimentalfacilitiestitle : ""
  );

  const [experimentalfacilitiesimage, setexperimentalfacilitiesimage] = useState(
    formData && formData.experimentalfacilitiesimage ? formData.experimentalfacilitiesimage : ""
  );

  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} Experimental Facilities</h1>
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
                <label className="block text-sm text-gray-600" htmlFor="experimentalfacilitiestitle">
                  Title
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="experimentalfacilitiestitle"
                  name="experimentalfacilitiestitle"
                  type="text"
                  onChange={(e) => setexperimentalfacilitiestitle(e.target.value)}
                  value={experimentalfacilitiestitle}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="experimentalfacilitiesimage">
                  Image
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="experimentalfacilitiesimage"
                  name="experimentalfacilitiesimage"
                  type="file"
                  onChange={(e) => setexperimentalfacilitiesimage(e.target.value)}
                  value={experimentalfacilitiesimage}
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

export default ExperimentalFacilitiesForm;