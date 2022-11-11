import styles from "./Member.modules.css";
import Pic from'./pic.png';
const Group_member_cards = () =>  {
    
    return (
        <div className={`flex items-center justify-center ${styles.Members-cards} `}>
        <div className={` ${styles.Members-cards-img} flex justify-center items-center w-1/3`}>
 <img scr={Pic} alt="" />
        </div>
        <div className={`${styles.Members-cards-content}  flex  flex-col `}>
        
             <div className={` ${styles.Research-Group-details-1 }`}>                Mr. Rakesh Sarkar
             </div>
             <br/>
             <div className={` ${styles.Research-Group-details-2}`}>Department of Physics</div>
             <div className={` ${styles.Research-Group-details-3}`}>
                 
                 
 
                 
           
                 
            
                </div>
 
                 <div className={` ${styles.Research-Group-details-3}`}> PhD student</div>
                 <div className={` ${styles.Research-Group-details-3}`}>
                     Research interest:Terahertz metamaterial,polarization rotation devices,
                     Electromagnetically induced transparency and toroidal metamaterial.
                 </div>
                 <div className={` ${styles.Research-Group-details-3}`}>
                     Google Scholar: Rakesh_GS
 
                 </div>
                 <div className={` ${styles.Research-Group-details-3}`}>
                     Email: rakeshphys163@gmail.com
 
 
                 </div>  <div className={` ${styles.Research-Group-details-3}`}>
                     Phone: +91 9382011054 (M) 
 
                 </div>
        </div>
     
    
     </div>
        );
    }
export default  Group_member_cards;