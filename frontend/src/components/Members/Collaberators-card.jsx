import styles from "./Members.module.css";
import axios from "axios";

const Collaberatorscards = () =>  {
  

    axios
    .get("http://localhost:5000/chairman_hab/api")
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
   
 
    return (

        <div className={`flex flex-col justify-center ${styles.collaberators_cards}`}>

        <div><b>   Dr. Dibakar Roy Chowdhury </b></div>  
         
         <div>(Associate Professor, Mahindra Ecole Centrale, Hyderabad)</div> 

      </div>

        );
    }
export default Collaberatorscards;