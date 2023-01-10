import styles from "./Table.module.css";

import React, { useState } from "react";
import {BACKEND_API} from "../../constant/index";

import axios from "axios";
import { useEffect } from "react";


const Details = () =>  {
    const [projects, setProjects] = useState([]);
    // const url = "http://localhost:5000/api/Projects";
    
    useEffect(() => {
      const promise = axios.get(`${BACKEND_API}/Projects`, {});
      promise.then((res) => {
        const data = res.data.data.Project;
        setProjects(data);
        // console.log(data);
      });
  
    }, []);
    return (
       <>
      

       
              {projects.length !== 0 &&
                    projects.map((data, idx) => {
                      return (
                        // <div className="py-2">
                        <tr key={idx} className={`w-24 h-20 border-b-4 border-solid	`} >
                        <td>{idx+1}</td>
                        <td >{data?.projectTitle} </td>
                        <td>{data?.fundingAgencyName}</td>
                        <td>{data?.duration}</td>
                        <td>{data?.investigators}</td>
                      </tr>
                        // </div>
                    
                      
                      
                      );
                    })}

       </>
       
       
        );
    }
export default Details;