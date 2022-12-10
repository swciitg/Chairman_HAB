import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GroupMembersForm = ({ type, formData }) => {
  const [name, setname] = useState(
    formData && formData.name ? formData.name : ""
  );

  const [designation, setdesignation] = useState(
    formData && formData.designation ? formData.designation : ""
  );

  const [imagePath, setimagePath] = useState(
    formData && formData.imagePath ? formData.imagePath : ""
  );

  const [researchInterest, setresearchInterest] = useState(
    formData && formData.researchInterest ? formData.researchInterest : ""
  );

  const [googleScholar, setgoogleScholar] = useState(
    formData && formData.googleScholar ? formData.googleScholar : ""
  );

  const [email, setemail] = useState(
    formData && formData.email ? formData.email : ""
  );

  const [phone, setphone] = useState(
    formData && formData.phone ? formData.phone : ""
  );

  const [priorityNumber, setpriorityNumber] = useState(
    formData && formData.priorityNumber ? formData.priorityNumber : ""
  );

  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} Group Members</h1>
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
                <label className="block text-sm text-gray-600" htmlFor="imagePath">
                  Image Path
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="imagePath"
                  name="imagePath"
                  type="text"
                  onChange={(e) => setimagePath(e.target.value)}
                  value={imagePath}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="researchInterest">
                  Research Interest
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="researchInterest"
                  name="researchInterest"
                  type="text"
                  onChange={(e) => setresearchInterest(e.target.value)}
                  value={researchInterest}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="googleScholar">
                  Google Scholar
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="googleScholar"
                  name="googleScholar"
                  type="text"
                  onChange={(e) => setgoogleScholar(e.target.value)}
                  value={googleScholar}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="email">
                  E-Mail
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="email"
                  name="email"
                  type="text"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="phone"
                  name="phone"
                  type="text"
                  onChange={(e) => setphone(e.target.value)}
                  value={phone}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="priorityNumber">
                  Priority Number
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="priorityNumber"
                  name="priorityNumber"
                  type="number"
                  onChange={(e) => setpriorityNumber(e.target.value)}
                  value={priorityNumber}
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

export default GroupMembersForm;