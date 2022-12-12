import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BACKEND_API } from "../../../constant";

const ProjectsScreen = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_API}/projects`, {})
      .then((response) => {
        const data = response.data;
        if (data.status === "success") {
          setProjects(data.data.Project);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl text-black pb-6">Projects</h1>
      <div className="mt-6">
        <Link
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          to={`/admin/projects/add`}
        >
          Add Projects
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
                  Funding Agency
                </th>
                <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  Investigators
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
              {projects.length !== 0 &&
                projects.map((data, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="text-left py-3 px-4">
                        {data?.projectTitle}
                      </td>
                      <td className="text-left py-3 px-4">
                        {data?.fundingAgencyName}
                      </td>
                      <td className="text-left py-3 px-4">{data?.duration}</td>
                      <td className="text-left py-3 px-4">
                        {data?.investigators}
                      </td>
                      <td className="text-left py-3 px-4">
                        <Link
                          to={{
                            pathname: `/admin/projects/${data?._id}`,
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

export default ProjectsScreen;
