import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BACKEND_API } from '../../../constant';

const AlumniScreen = () => {
  const [alumniinfo,setAlumniinfo] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_API}/alumni`, {
      })
      .then((response) => {
        const data = response.data;
        if (data.status === "success") {
          setAlumniinfo(data.data.AlumniProfileData);
        } else {
        }
      })
      .catch((error) => {
        console.log(error)
      });
  });

  const deleteAlumniProfile = (id) => {
    axios
      .delete(`${BACKEND_API}/alumni/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
    return (
        <>
          <h1 className="text-3xl text-black pb-6">Alumni</h1>
          <div className="mt-6">
            <Link
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              to={`/admin/alumni/add`}
            >
              Add Alumni
            </Link>
          </div>
          <div className="w-full mt-6 overflow-auto">
            <div className="bg-white">
              <table className="min-w-full leading-normal">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Designation
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Year Of Completion
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Institute
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Edit
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {alumniinfo.length !== 0 &&
                    alumniinfo.map((data, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="text-left py-3 px-4">{data?.alumniName}</td>
                          <td className="text-left py-3 px-4">
                          {data?.designation}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.imagePath}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.yearOfCompletion}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.nameOfInstitution}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.email}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.phone}
                          </td>
                          <td className="text-left py-3 px-4">
                            <Link
                              to={{
                                pathname: `/admin/alumni/${data?.id}`,
                              }}
                              state={data}
                            >
                              <button className="hover:text-blue-500">Edit</button>
                            </Link>
                          </td>
                          <td className="text-left py-3 px-4">
                            <button
                              className="hover:text-red-500"
                              onClick={(event) =>{
                                deleteAlumniProfile(event.target.value);
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
    
    export default AlumniScreen;
