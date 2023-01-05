import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = ({ type, formData }) => {
  const [outlookID, setoutlookID] = useState(
    formData && formData.outlookID ? formData.outlookID : ""
  );

const [name, setname] = useState(
  formData && formData.name ? formData.name : ""
  );

const [email, setemail] = useState(
  formData && formData.email ? formData.email : ""
  );

const [accesstoken, setaccesstoken] = useState(
  formData && formData.accesstoken ? formData.accesstoken : ""
  );

const [isadmin, setisadmin] = useState(
  formData && formData.isadmin ? formData.isadmin : ""
  );

  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} User</h1>
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
                <label className="block text-sm text-gray-600" htmlFor="outlookID">
                  Outlook ID
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="outlookID"
                  name="outlookID"
                  type="text"
                  onChange={(e) => setoutlookID(e.target.value)}
                  value={outlookID}
                  required
                />
              </div>

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
                <label className="block text-sm text-gray-600" htmlFor="accesstoken">
                  Access Token
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="accesstoken"
                  name="accesstoken"
                  type="text"
                  onChange={(e) => setaccesstoken(e.target.value)}
                  value={accesstoken}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="isadmin">
                  Admin or Not
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="isadmin"
                  name="isadmin"
                  type="bool"
                  onChange={(e) => setisadmin(e.target.value)}
                  value={isadmin}
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

export default UserForm;