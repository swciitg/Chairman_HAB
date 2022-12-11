import styles from "./About.module.css"
import React, { useState } from "react";

import axios from "axios";

const Headings = () =>  {
    const [headings, setHeadings] = useState([]);
    const url = "http://localhost:5000/api/Updates";
    const promise = axios.get(url);
    promise.then((res) => {
      const data = res.data.data.Update;
      setHeadings(data);
      // console.log(data);
    });
    return (
<>
{headings.length !== 0 &&
                    headings.map((data, idx) => {
                      return (
                       <div key={idx}  className={`${styles.headings}` }>
                        <span className={`${styles.dark}`}>
                            
                             {data?.title} </span>  {data?.description} 
     
         
                          </div>
                      
                      
                      );
                    })}
     
     </>
        );
    }
export default Headings;





 
         
