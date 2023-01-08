import React, { useState } from "react";
import axios from "axios";
import { BACKEND_API } from "../../../constant";
import { useNavigate } from "react-router-dom";

const HomePageImageForm = ({ type, formData }) => {
  const [image, setimage] = useState(
    formData && formData.image ? formData.image : ""
  );
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      let res;
      if (image) {
        console.log(image);
        const formData1 = new FormData();
        formData1.append("image", image, image.name);
        // console.log(formData1);
        res = await axios
          .post(`${BACKEND_API}/homePageImage`, formData1, {
            headers: {
              "Content-Type": "multipart/form-data",
              // Accept: "multipart/form-data",
            },
          })
          // .then((window.location.href = "./"));
          window.location.href = "./";
      }
    } catch (err) {
      console.log(err);
    }
  }

  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} Home Page Image</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
          <p className="text-xl pb-6 flex items-center">
            <i className="fas fa-list mr-3"></i>
          </p>
          <div className="leading-loose">
            <form
              className="p-10 bg-white rounded shadow-xl"
              onSubmit={handleSubmit}
            >
              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="image">
                  Home Page Image
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="image"
                  name="image"
                  type="file"
                  onChange={(e) => setimage(e.target.files[0])}
                  // value={image}
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

export default HomePageImageForm;