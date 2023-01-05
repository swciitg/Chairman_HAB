import styles from "./Table.module.css";

import React, { useState } from "react";
import {BACKEND_API} from "../../constant/index";

import axios from "axios";


const Details = () =>  {
    const [projects, setProjects] = useState([]);
    // const url = "http://localhost:5000/api/Projects";
    const promise = axios.get(`${BACKEND_API}/Projects`, {});
    promise.then((res) => {
      const data = res.data.data.Project;
      setProjects(data);
      // console.log(data);
    });
    return (
       <>
              {projects.length !== 0 &&
                    projects.map((data, idx) => {
                      return (
                        <tr key={idx} className={`w-24`} >
                        <td>{data?.serialNumber}</td>
                        <td >{data?.projectTitle} </td>
                        <td>{data?.fundingAgencyName}</td>
                        <td>{data?.duration}</td>
                        <td>{data?.investigators}</td>
                      </tr>
                      
                      
                      );
                    })}
       </>
       
       
        );
    }
export default Details;