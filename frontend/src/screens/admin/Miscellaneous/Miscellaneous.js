import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BACKEND_API } from '../../../constant';

const MiscellaneousScreen = () => {
  const [miscellaneous,setMiscellaneous] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_API}/miscellaneous`, {
      })
      .then((response) => {
        const data = response.data;
        if (data.status === "success") {
          setMiscellaneous(data.data.Misc);
        } else {
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  const miscellaneousDelete = (id) => {
    axios
      .delete(`${BACKEND_API}/miscellaneous/${id}`)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  };
    return (
        <>
          <h1 className="text-3xl text-black pb-6">Miscellaneous</h1>
          <div className="mt-6">
            <Link
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              to={`/admin/miscellaneous/add`}
            >
              Add Miscellaneous Presentation/Posters
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
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Body
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
                  {miscellaneous.length !== 0 &&
                    miscellaneous.map((data, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="text-left py-3 px-4">{data?. miscellaneousPostertitle}</td>
                          <td className="text-left py-3 px-4">
                          {data?.miscelaneousPostername}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.miscellaneousPoterBody}
                          </td>
                          {/* <td className="text-left py-3 px-4">
                            <Link
                              to={{
                                pathname: `/admin/miscellaneous/${data?.id}`,
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
                                miscellaneousDelete(event.target.value);
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
    
    export default MiscellaneousScreen;
