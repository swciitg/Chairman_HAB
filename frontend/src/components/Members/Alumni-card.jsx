import styles from "./Member.modules.css";
import Pic from'./pic.png';
const Alumni_cards = () =>  {
    
    return (

        <div className={`flex items-center justify-center   ${styles.Alumni-cards}`}>
        <div className={` ${styles.Members-cards-img} flex justify-center items-center w-1/3`}>
 <img scr={Pic} alt=""/>
        </div>
        <div className={`${styles.Members-cards-content}  flex  flex-col `}>
        
             <div className={` ${styles.Research-Group-details-1 }`}>        Mr. Maidul Islam
                 
 
 
 
 
 
             </div>
             <br/>
             <div className={` ${styles.Research-Group-details-2}`}>Assistant professor</div>
             <div className={` ${styles.Research-Group-details-3}`}>
                 
                 
 
                 
           
                 
            
                </div>
 
                 <div className={` ${styles.Research-Group-details-3}`}> Year of completion: 2018</div>
                 <div className={` ${styles.Research-Group-details-3}`}>
                     The Assam Royal Global University
                 </div>
                 <div className={` ${styles.Research-Group-details-3}`}>
                     Email: maidul.iitg@gmail.com
 
 
                 </div>
                 <div className={` ${styles.Research-Group-details-3}`}>
                     Phone: +91 (M)
 
                 </div> 
        </div>
     
    
     </div>
        );
    }
export default Alumni_cards;