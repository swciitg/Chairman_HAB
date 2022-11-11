import styles from "./Members.modules.css";
import Pic from './pic.png';
const Group_member_cards = () =>  {
    
    return (
        <div className={`flex items-center justify-center  ${styles.Members_cards} `}>
       <div className={` ${styles.Members_cards_img}  flex justify-center items-center w-1/3`}>
<img scr={Pic} alt=""/>
       </div>
       <div className={` ${styles.Members_cards_content}  flex  flex-col `}>
       
            <div className={` ${styles.Research_Group_details_1 }`}>                Mr. Rakesh Sarkar
            </div>
            <br/>
            <div className={` ${styles.Research_Group_details_2}`}>Department of Physics</div>
            <div className={` ${styles.Research_Group_details_3}`}>
                
                

                
          
                
           
               </div>

                <div className={` ${styles.Research_Group_details_3}`}> PhD student</div>
                <div className={` ${styles.Research_Group_details_3}`}>
                    Research interest:Terahertz metamaterial,polarization rotation devices,
                    Electromagnetically induced transparency and toroidal metamaterial.
                </div>
                <div className={` ${styles.Research_Group_details_3}`}>
                    Google Scholar: Rakesh_GS

                </div>
                <div className={` ${styles.Research_Group_details_3}`}>
                    Email: rakeshphys163@gmail.com


                </div>  <div className={` ${styles.Research_Group_details_3}`}>
                    Phone: +91 9382011054 (M) 

                </div>
       </div>
    
   
    </div>
        );
    }
export default  Group_member_cards;