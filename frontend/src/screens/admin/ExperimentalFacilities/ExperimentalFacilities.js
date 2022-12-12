import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BACKEND_API } from '../../../constant';

const ExperimentalFacilitiesScreen = () => {
  const [exptfacilities,setExptfacilities] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_API}/experimentalFacilities`, {
      })
      .then((response) => {
        const data = response.data;
        if (data.status == "success") {
          setExptfacilities(data.data.ExperimentalFacilitiesData);
        } else {
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

    return (
        <>
          <h1 className="text-3xl text-black pb-6">Experimental Facilities</h1>
          <div className="mt-6">
            <Link
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              to={`/admin/experimentalfacilities/add`}
            >
              Add Experimental Facilities
            </Link>
          </div>
          <div className="w-full mt-6 overflow-auto">
            <div className="bg-white">
              <table className="min-w-full leading-normal">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Edit
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Delete
                    </th>
                  </tr>                </thead>
                <tbody className="text-gray-700">
                  {exptfacilities.length !== 0 &&
                    exptfacilities.map((data, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="text-left py-3 px-4">{data?.experimentalFacilitiesTitle}</td>
                          <td className="text-left py-3 px-4">{data?.experimentalFacilitiesImage}</td>
                          <td className="text-left py-3 px-4">
                            <Link
                              to={{
                                pathname: `/admin/experimentalfacilities/${data?.id}`,
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
    
    export default ExperimentalFacilitiesScreen;
