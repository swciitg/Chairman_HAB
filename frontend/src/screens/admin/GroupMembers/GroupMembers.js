import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

const GroupMembersScreen = () => {
    const groupMembers = [{"name" : "Sample name", "designation" : "Sample Designation", "imagePath" : "Sample path", "researchInterest" : "Sample research interests", "googleScholar" : "Sample link", "email" : "Sample E-Mail", "phone" : "Sample phone number", "priorityNumber" : "Sample priority number"}]
    return (
        <>
          <h1 className="text-3xl text-black pb-6">GroupMembers</h1>
          <div className="mt-6">
            <Link
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              to={`/admin/GroupMembers/add`}
            >
              Add GroupMembers
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
                          <td className="text-left py-3 px-4">{data?.name}</td>
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
                          {data?.priorityNumber}
                          </td>
                          <td className="text-left py-3 px-4">
                            <Link
                              to={{
                                pathname: `/admin/GroupMembers/${data?.id}`,
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
