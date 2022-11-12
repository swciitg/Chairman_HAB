import styles from "./Members.modules.css";
import Pic from'./pic.png';
const Alumnicards = () =>  {
    
    return (
        <div className={`flex items-center justify-center   ${styles.Alumnicards}`}>
        <div className={` ${styles.Memberscardsimg} flex justify-center items-center w-1/3`}>
        <img scr={Pic} alt=""/>
        </div>
        <div className={`${styles.Memberscardscontent}  flex  flex-col `}>
        
             <div className={` ${styles.ResearchGroupdetails1 }`}>        Mr. Maidul Islam
                 
 
 
 
 
 
             </div>
             <br/>
             <div className={` ${styles.ResearchGroupdetails2}`}>Assistant professor</div>
             <div className={` ${styles.ResearchGroupdetails3}`}>
                 
                 
 
                 
           
                 
            
                </div>
 
                 <div className={` ${styles.ResearchGroupdetails3}`}> Year of completion: 2018</div>
                 <div className={` ${styles.ResearchGroupdetails3}`}>
                     The Assam Royal Global University
                 </div>
                 <div className={` ${styles.ResearchGroupdetails3}`}>
                     Email: maidul.iitg@gmail.com
 
 
                 </div>
                 <div className={` ${styles.ResearchGroupdetails3}`}>
                     Phone: +91 (M)
 
                 </div> 
        </div>
     
    
     </div>
 
        );
    }
export default Alumnicards;