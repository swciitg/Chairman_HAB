import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BACKEND_API } from '../../../constant';

const PastMembersScreen = () => {
  const [pastmembers,setPastMembers] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_API}/pastMembers`, {
      })
      .then((response) => {
        const data = response.data;
        if (data.status === "success") {
          setPastMembers(data.data.PastMember);
        } else {
        }
      })
      .catch((error) => {
        console.log(error)
      });
  });

  const pastMembersDelete = (id) => {
    axios
      .delete(`${BACKEND_API}/pastMembers/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
    return (
        <>
          <h1 className="text-3xl text-black pb-6">Past Members</h1>
          <div className="mt-6">
            <Link
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              to={`/admin/pastmembers/add`}
            >
              Add Past Members
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
                      Qualification of Student
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Year of Project Compeletion
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
                  {pastmembers.length !== 0 &&
                    pastmembers.map((data, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="text-left py-3 px-4">{data?.pastMemberName}</td>
                          <td className="text-left py-3 px-4">
                          {data?.qualificationOfStudent}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.yearOfProjectCompletion}
                          </td>
                          <td className="text-left py-3 px-4">
                            <Link
                              to={{
                                pathname: `/admin/pastmembers/${data?.id}`,
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
                                pastMembersDelete(event.target.value);
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
    
    export default PastMembersScreen;
