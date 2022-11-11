import styles from "./Members.module.css"
import Pic from'./pic.png';
const Alumni_cards = () =>  {
    
    return (
        <div className={`flex items-center justify-center   ${styles.Alumni_cards}`}>
        <div className={` ${styles.Members_cards_img} flex justify-center items-center w-1/3`}>
 <img scr={Pic} alt=""/>
        </div>
        <div className={`${styles.Members_cards_content}  flex  flex-col `}>
        
             <div className={` ${styles.Research_Group_details_1 }`}>        Mr. Maidul Islam
                 
 
 
 
 
 
             </div>
             <br/>
             <div className={` ${styles.Research_Group_details_2}`}>Assistant professor</div>
             <div className={` ${styles.Research_Group_details_3}`}>
                 
                 
 
                 
           
                 
            
                </div>
 
                 <div className={` ${styles.Research_Group_details_3}`}> Year of completion: 2018</div>
                 <div className={` ${styles.Research_Group_details_3}`}>
                     The Assam Royal Global University
                 </div>
                 <div className={` ${styles.Research_Group_details_3}`}>
                     Email: maidul.iitg@gmail.com
 
 
                 </div>
                 <div className={` ${styles.Research_Group_details_3}`}>
                     Phone: +91 (M)
 
                 </div> 
        </div>
     
    
     </div>
 
        );
    }
export default Alumni_cards;