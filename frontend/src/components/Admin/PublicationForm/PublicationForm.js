import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_API } from "../../../constant";

const PublicationForm = ({ type, formData }) => {
  const [journaltitle, setjournaltitle] = useState(
    formData && formData.journaltitle ? formData.journalitle : ""
  );

  const [journalname, setjournalname] = useState(
    formData && formData.journalname ? formData.journalname : ""
  );

  const [journalBody, setjournalBody] = useState(
    formData && formData.journalBody ? formData.journalBody : ""
  );

  const addNote = () => {
    const note = {
      journaltitle: journaltitle,
      journalname: journalname,
      journalBody: journalBody,
    };
    const req = axios
      .post(`${BACKEND_API}/journalPublications`, note)
      .then((res) => {
        console.log(res);
        alert("Publication successfully added.");
        window.location.href = "./" ;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(req);
  };

  const editNote = (id) => {
    const note = {
      conferencePapertitle: journaltitle,
      conferencePapername: journalname,
      conferencePaperBody: journalBody,
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
      <h1 className="text-3xl text-black pb-6">{type} Publications</h1>
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
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="journaltitle"
                >
                  Journal Description
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="journaltitle"
                  name="description"
                  type="text"
                  onChange={(e) => setjournaltitle(e.target.value)}
                  value={journaltitle}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="journalname"
                >
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
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="journalBody"
                >
                  Journal Link
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
