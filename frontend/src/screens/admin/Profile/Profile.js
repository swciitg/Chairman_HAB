import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BACKEND_API } from '../../../constant';

const ProfileScreen = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_API}/profile`, {
      })
      .then((response) => {
        const data = response.data;
        if (data.status === "success") {
          setProfile(data.data.ProfileData);
        } else {
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  const profileDelete = (id) => {
    axios
      .delete(`${BACKEND_API}/profile/${id}`)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  };
    return (
        <>
          <h1 className="text-3xl text-black pb-6">Profile</h1>
          <div className="mt-6">
            <Link
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              to={`/admin/Profile/add`}
            >
              Add Profile
            </Link>
          </div>
          <div className="w-full mt-6 overflow-auto">
            <div className="bg-white">
              <table className="min-w-full leading-normal">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Proffesor Name
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Designation
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Institute Name
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Lab Phone
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Office Phone
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Lab E-Mail
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Office E-Mail
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Personal E-Mail
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Orcid ID
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Research ID
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Scopus Author ID
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Google Scholar ID
                    </th>
                    {/* <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Edit
                    </th> */}
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {profile.length !== 0 &&
                    profile.map((data, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="text-left py-3 px-4">{data?.proffessorName}</td>
                          <td className="image-left py-3 px-4">
                          {data?.proffesorimage}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.proffessorDesignation}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.proffessorDepartment}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.instituteName}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.address}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.labPhone}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.officePhone}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.labEmail}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.personalEmail}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.OrcidID}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.researchID}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.scopusauthorid}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.googleScholarID}
                          </td>
                          {/* <td className="text-left py-3 px-4">
                            <Link
                              to={{
                                pathname: `/admin/Profile/${data?.id}`,
                              }}
                              state={data}
                            >
                              <button className="hover:text-blue-500">Edit</button>
                            </Link>
                          </td> */}
                          <td className="text-left py-3 px-4">
                            <button
                              className="hover:text-red-500"
                              onClick={(event) =>{
                                profileDelete(event.target.value);
                              }}
                              value={data?._id}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      );
    };
    
    export default ProfileScreen;
