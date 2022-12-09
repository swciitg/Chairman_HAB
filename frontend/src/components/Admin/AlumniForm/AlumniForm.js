import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AlumniForm = ({ type, formData }) => {
  const [alumniName, setalumniName] = useState(
    formData && formData.alumniName ? formData.alumniName : ""
  );

const [alumniDesignation, setalumniDesignation] = useState(
  formData && formData.alumniDesignation ? formData.alumniDesignation : ""
  );

const [alumniImage, setalumniImage] = useState(
  formData && formData.alumniImage ? formData.alumniImage : ""
  );

const [alumniyoc, setalumniyoc] = useState(
  formData && formData.alumniyoc ? formData.alumniyoc : ""
  );

const [alumniInstitute, setalumniInstitute] = useState(
  formData && formData.alumniInstitute ? formData.alumniInstitute : ""
  );

const [alumniEmail, setalumniEmail] = useState(
  formData && formData.alumniEmail ? formData.alumniEmail : ""
  );
const [alumniPhone, setalumniPhone] = useState(
  formData && formData.alumniPhone ? formData.alumniPhone : ""
  );

  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} Alumni</h1>
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
                <label className="block text-sm text-gray-600" htmlFor="alumniname">
                  Name
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="alumniname"
                  name="alumniname"
                  type="text"
                  onChange={(e) => setalumniName(e.target.value)}
                  value={alumniName}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="alumnidesignation">
                  Designation
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="alumnidesignation"
                  name="alumnidesignation"
                  type="text"
                  onChange={(e) => setalumniDesignation(e.target.value)}
                  value={alumniDesignation}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="alumniimage">
                  Image
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="alumniimage"
                  name="alumniimage"
                  type="file"
                  onChange={(e) => setalumniImage(e.target.value)}
                  value={alumniImage}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="alumniyoc">
                  Year Of Completetion
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="alumniyoc"
                  name="alumniyoc"
                  type="text"
                  onChange={(e) => setalumniyoc(e.target.value)}
                  value={alumniyoc}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="alumniinstitute">
                  Institute
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="alumniinstitute"
                  name="alumniinstitute"
                  type="text"
                  onChange={(e) => setalumniInstitute(e.target.value)}
                  value={alumniInstitute}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="alumniemail">
                  E-Mail
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="alumniemail"
                  name="alumniemail"
                  type="text"
                  onChange={(e) => setalumniEmail(e.target.value)}
                  value={alumniEmail}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="alumniphone">
                  Phone Number
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="alumniphone"
                  name="alumniphone"
                  type="text"
                  onChange={(e) => setalumniPhone(e.target.value)}
                  value={alumniPhone}
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

export default AlumniForm;