import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_API } from "../../../constant";

const ProfileForm = ({ type, formData }) => {
  const [name, setname] = useState(
    formData && formData.name ? formData.name : ""
  );

  const [image, setimage] = useState(
    formData && formData.image ? formData.image : ""
  );

  const [designation, setdesignation] = useState(
    formData && formData.designation ? formData.designation : ""
  );

  const [department, setdepartment] = useState(
    formData && formData.department ? formData.department : ""
  );

  const [institutename, setinstitutename] = useState(
    formData && formData.institutename ? formData.institutename : ""
  );

  const [address, setaddress] = useState(
    formData && formData.address ? formData.address : ""
  );

  const [labphone, setlabphone] = useState(
    formData && formData.labphone ? formData.labphone : ""
  );

  const [officephone, setofficephone] = useState(
    formData && formData.officephone ? formData.officephone : ""
  );

  const [labemail, setlabemail] = useState(
    formData && formData.labemail ? formData.labemail : ""
  );

  const [officeemail, setofficeemail] = useState(
    formData && formData.officeemail ? formData.officeemail : ""
  );

  const [personalemail, setpersonalemail] = useState(
    formData && formData.personalemail ? formData.personalemail : ""
  );

  const [orcidid, setorcidid] = useState(
    formData && formData.orcidid ? formData.orcidid : ""
  );

  const [researchid, setresearchid] = useState(
    formData && formData.researchid ? formData.researchid : ""
  );

  const [scopusauthorid, setscopusauthorid] = useState(
    formData && formData.scopusauthorid ? formData.scopusauthorid : ""
  );

  const [googlescholarid, setgooglescholarid] = useState(
    formData && formData.googlescholarid ? formData.googlescholarid : ""
  );

  let navigate = useNavigate();
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (image) {
        console.log(image);
        const formData1 = new FormData();
        formData1.append("proffessorName", name);
        formData1.append("proffesorimage", image, image.name);
        formData1.append("proffessorDesignation", designation);
        formData1.append("proffessorDepartment", department);
        formData1.append("instituteName", institutename);
        formData1.append("address", address);
        formData1.append("labPhone", labphone);
        formData1.append("officePhone", officephone);
        formData1.append("labEmail", labemail);
        formData1.append("officeEmail", officeemail);
        formData1.append("personalEmail", personalemail);
        formData1.append("OrcidID", orcidid);
        formData1.append("ReasearchID", researchid);
        formData1.append("scopusAuthorID", scopusauthorid);
        formData1.append("googleScholarID", googlescholarid);
        console.log(formData1);
        res = await axios
          .post(`${BACKEND_API}/profile`, formData1, {
            headers: {
              "Content-Type": "multipart/form-data",
              // Accept: "multipart/form-data",
            },
          })
          .then((window.location.href = "./"));
      } else {
        // res = await axios.post(
        //   `${BACKEND_API}/keyResearchArea`,
        //   {
        //     keyResearchAreaTitle: title,
        //     keyResearchAreaDescription: description,
        //   },
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //       Accept: "application/json",
        //     },
        //   }
        // );
        alert("Please enter an image");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} Profile</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
          <p className="text-xl pb-6 flex items-center">
            <i className="fas fa-list mr-3"></i>
          </p>
          <div className="leading-loose">
            <form
              className="p-10 bg-white rounded shadow-xl"
              onSubmit={formSubmitHandler}
            >
              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="name">
                  Professor Name
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
                <label className="block text-sm text-gray-600" htmlFor="image">
                  Image
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="image"
                  name="image"
                  type="file"
                  onChange={(e) => setimage(e.target.files[0])}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="designation"
                >
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
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="department"
                >
                  Department
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="department"
                  name="department"
                  type="text"
                  onChange={(e) => setdepartment(e.target.value)}
                  value={department}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="institutename"
                >
                  Institute Name
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="institutename"
                  name="institutename"
                  type="text"
                  onChange={(e) => setinstitutename(e.target.value)}
                  value={institutename}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="address"
                  name="address"
                  type="text"
                  onChange={(e) => setaddress(e.target.value)}
                  value={address}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="labphone"
                >
                  Lab Phone
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="labphone"
                  name="labphone"
                  type="text"
                  onChange={(e) => setlabphone(e.target.value)}
                  value={labphone}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="officephone"
                >
                  Office Phone
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="officephone"
                  name="officephone"
                  type="text"
                  onChange={(e) => setofficephone(e.target.value)}
                  value={officephone}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="labemail"
                >
                  Lab E-Mail
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="labemail"
                  name="labemail"
                  type="text"
                  onChange={(e) => setlabemail(e.target.value)}
                  value={labemail}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="officeemail"
                >
                  Office E-Mail
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="officeemail"
                  name="officeemail"
                  type="text"
                  onChange={(e) => setofficeemail(e.target.value)}
                  value={officeemail}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="personalemail"
                >
                  Personal E-Mail
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="personalemail"
                  name="personalemail"
                  type="text"
                  onChange={(e) => setpersonalemail(e.target.value)}
                  value={personalemail}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="orcidid"
                >
                  Orcid ID
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="orcidid"
                  name="orcidid"
                  type="number"
                  onChange={(e) => setorcidid(e.target.value)}
                  value={orcidid}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="researchid"
                >
                  Research ID
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="researchid"
                  name="researchid"
                  type="text"
                  onChange={(e) => setresearchid(e.target.value)}
                  value={researchid}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="scopusauthorid"
                >
                  Scopus Author ID
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="scopusauthorid"
                  name="scopusauthorid"
                  type="text"
                  onChange={(e) => setscopusauthorid(e.target.value)}
                  value={scopusauthorid}
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="googlescholarid"
                >
                  Google Scholar ID
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="googlescholarid"
                  name="googlescholarid"
                  type="text"
                  onChange={(e) => setgooglescholarid(e.target.value)}
                  value={googlescholarid}
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

export default ProfileForm;
