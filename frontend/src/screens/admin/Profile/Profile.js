import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

const ProfileScreen = () => {
    const profile = [{"name" : "Sample name", "image" : "Sample image", "designation" : "Sample Designation", "department" : "Sample Department", "institutename" : "Sample Institute Name", "address" : "Sample Address", "labphone" : "Sample phone number", "officephone" : "Sample phone number", "labemail" : "Sample E-Mail", "officeemail" : "Sample E-Mail", "personalemail" : "Sample E-Mail", "orcidid" : "Sample ID", "researchid" : "Sample ID", "scopusauthorid" : "Sample ID", "googlescholarid" : "Sample ID"}]
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
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Edit
                    </th>
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
                          <td className="text-left py-3 px-4">{data?.name}</td>
                          <td className="image-left py-3 px-4">
                          {data?.image}
                          </td>
                          <td className="text-left py-3 px-4">
                          {data?.designation}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.department}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.institutename}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.address}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.labphone}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.officephone}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.labemail}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.officeemail}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.personalemail}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.orcidid}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.researchid}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.scopusauthorid}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.googlescholarid}
                          </td>
                          <td className="text-left py-3 px-4">
                            <Link
                              to={{
                                pathname: `/admin/Profile/${data?.id}`,
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
    
    export default ProfileScreen;
