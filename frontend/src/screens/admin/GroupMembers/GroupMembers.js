import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BACKEND_API } from '../../../constant';

const GroupMembersScreen = () => {
  const [groupMembers, setGroupMembers] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_API}/groupMembers`, {
      })
      .then((response) => {
        const data = response.data;
        if (data.status == "success") {
          setGroupMembers(data.data.GroupMembersData);
        } else {
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

    return (
        <>
          <h1 className="text-3xl text-black pb-6">Group Members</h1>
          <div className="mt-6">
            <Link
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              to={`/admin/groupMembers/add`}
            >
              Add Group Members
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
                      Image Path
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Research Interest
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Google Scholar
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      E-Mail
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Priority Number
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
                  {groupMembers.length !== 0 &&
                    groupMembers.map((data, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="text-left py-3 px-4">{data?.memberName}</td>
                          <td className="text-left py-3 px-4">
                          {data?.designation}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.imagePath}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.researchInterest}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.googleScholar}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.email}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.phone}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.priority_number}
                          </td>
                          <td className="text-left py-3 px-4">
                            <Link
                              to={{
                                pathname: `/admin/groupMembers/${data?._id}`,
                              }}
                              state={data}
                            >
                              <button className="hover:text-blue-500">Edit</button>
                            </Link>
                          </td>
                          <td className="text-left py-3 px-4">
                            <button
                              className="hover:text-red-500"
                            //   onClick={() =>
                            //     dispatch()
                            //   }
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
    
    export default GroupMembersScreen;
