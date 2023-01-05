import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BACKEND_API } from '../../../constant';

const SimulationSoftwaresScreen = () => {
  const [simulsoft, setSimulSofts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_API}/simulationSoftwares`, {
      })
      .then((response) => {
        const data = response.data;
        if (data.status === "success") {
          setSimulSofts(data.data.simulationSoftwaresData);
        } else {
        }
      })
      .catch((error) => {
        console.log(error)
      });
  });

  const simulationSoftwaresDelete = (id) => {
    axios
      .delete(`${BACKEND_API}/simulationSoftwares/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
    return (
        <>
          <h1 className="text-3xl text-black pb-6">Simulation Softwares</h1>
          <div className="mt-6">
            <Link
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              to={`/admin/simulationsoftwares/add`}
            >
              Add Simulation Softwares
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
                  {simulsoft.length !== 0 &&
                    simulsoft.map((data, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="text-left py-3 px-4">{data?.simulationSoftwaresTitle}</td>
                          <td className="text-left py-3 px-4">{data?.simulationSoftwaresImage}</td>
                          <td className="text-left py-3 px-4">
                            <Link
                              to={{
                                pathname: `/admin/simulationsoftwares/${data?._id}`,
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
                                simulationSoftwaresDelete(event.target.value);
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
    
    export default SimulationSoftwaresScreen;
