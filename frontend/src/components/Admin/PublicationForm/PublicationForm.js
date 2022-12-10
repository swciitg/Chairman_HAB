import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PublicationForm = ({ type, formData }) => {
  const [journaltitle, setjournaltitle] = useState(
    formData && formData.journaltitle ? formData.journalitle : ""
  );

  const [journalname, setjournalname] = useState(
    formData && formData.journalname ? formData.journalname : ""
  );

  const [journalBody, setjournalBody] = useState(
    formData && formData.journalBody ? formData.journalBody : "",
  );

  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} Publications</h1>
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
                <label className="block text-sm text-gray-600" htmlFor="journaltitle">
                  Journal Title
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="journaltitle"
                  name="journaltitle"
                  type="text"
                  onChange={(e) => setjournaltitle(e.target.value)}
                  value={journaltitle}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="journalname">
                  Journal Name
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="journalname"
                  name="journalname"
                  type="text"
                  onChange={(e) => setjournalname(e.target.value)}
                  value={journalname}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="journalBody">
                  Journal Title
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="journalBody"
                  name="journalBody"
                  type="text"
                  onChange={(e) => setjournalBody(e.target.value)}
                  value={journalBody}
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

export default PublicationForm;