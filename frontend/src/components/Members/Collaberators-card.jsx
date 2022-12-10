import styles from "./Members.module.css";
// import React, { useState } from "react";
import axios from "axios";
const Collaberatorscards = () =>  {
  
   
//     const [notes, setNotes] = useState([]);
//     const url = "http://localhost:5000/api/journalPublications";
//     const promise = axios.get(url);
//     promise.then((res) => {
//     const data = res.data.data.JournalPublication;
//     setNotes(data);
//     // console.log(data);
//   });
 
    return (

        <div className={`flex flex-col justify-center ${styles.collaberators_cards}`}>

        <div><b>   Dr. Dibakar Roy Chowdhury </b></div>  
         
         <div>(Associate Professor, Mahindra Ecole Centrale, Hyderabad)</div> 

      </div>

        );
        // return (
        //     <>
        //       {notes.slice(0, 3).map((item, index) => {
        //         return (
        //           <Card key={index} head={item.journaltitle} bold={item.journalname} />
        //         );
        //       })}
        //     </>
        //   );
    }
export default Collaberatorscards;



//   const [notes, setNotes] = useState([]);
//   const url = "http://localhost:5000/api/journalPublications";
//   const promise = axios.get(url);
//   promise.then((res) => {
//     const data = res.data.data.JournalPublication;
//     setNotes(data);
//     // console.log(data);
//   });

  
