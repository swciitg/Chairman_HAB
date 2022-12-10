import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SimulationSoftwaresForm = ({ type, formData }) => {
  const [simulationsoftwarestitle, setsimulationsoftwarestitle] = useState(
    formData && formData.simulationsoftwarestitle ? formData.simulationsoftwarestitle : ""
  );

  const [simulationsoftwaresimage, setsimulationsoftwaresimage] = useState(
    formData && formData.simulationsoftwaresimage ? formData.simulationsoftwaresimage : ""
  );

  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} Simulation Softwares</h1>
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
                <label className="block text-sm text-gray-600" htmlFor="simulationsoftwarestitle">
                  Title
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="simulationsoftwarestitle"
                  name="simulationsoftwarestitle"
                  type="text"
                  onChange={(e) => setsimulationsoftwarestitle(e.target.value)}
                  value={simulationsoftwarestitle}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="simulationsoftwaresimage">
                  Image
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="simulationsoftwaresimage"
                  name="simulationsoftwaresimage"
                  type="file"
                  onChange={(e) => setsimulationsoftwaresimage(e.target.value)}
                  value={simulationsoftwaresimage}
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

export default SimulationSoftwaresForm;