import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BACKEND_API } from '../../../constant';

const JournalPublicationsScreen = () => {
  const [journalpublications,setJournalPublications] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_API}/journalPublications`, {
      })
      .then((response) => {
        const data = response.data;
        if (data.status == "success") {
          setJournalPublications(data.data.JournalPublication);
        } else {
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);
    return (
        <>
          <h1 className="text-3xl text-black pb-6">Journal Publications</h1>
          <div className="mt-6">
            <Link
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              to={`/admin/journalpublications/add`}
            >
              Add Journal Publications
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
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Edit
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {journalpublications.length !== 0 &&
                    journalpublications.map((data, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="text-left py-3 px-4">{data?.journaltitle}</td>
                          <td className="text-left py-3 px-4">
                          {data?.journalname}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.journalBody}
                          </td>
                          <td className="text-left py-3 px-4">
                            <Link
                              to={{
                                pathname: `/admin/journalpublications/${data?.id}`,
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
    
    export default JournalPublicationsScreen;
