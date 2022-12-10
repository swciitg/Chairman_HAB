import styles from "./Member.module.css";
import Pic from './pic.png';
const Groupmembercards = () =>  {
    
    return (
        <div className={`flex items-center justify-center  ${styles.members_cards} `}>
       <div className={` ${styles.members_cardsimg}  flex justify-center items-center w-1/3`}>
<img scr={Pic} alt=""/>
       </div>
       <div className={` ${styles.members_cardscontent}  flex  flex-col `}>
       
            <div className={` ${styles.research_groupdetails1 }`}>                Mr. Rakesh Sarkar
            </div>
            <br/>
            <div className={` ${styles.research_groupdetails2}`}>Department of Physics</div>
            <div className={` ${styles.research_groupdetails3}`}>
                
                

                
          
                
           
               </div>

                <div className={` ${styles.research_groupdetails3}`}> PhD student</div>
                <div className={` ${styles.research_groupdetails3}`}>
                    Research interest:Terahertz metamaterial,polarization rotation devices,
                    Electromagnetically induced transparency and toroidal metamaterial.
                </div>
                <div className={` ${styles.research_groupdetails3}`}>
                    Google Scholar: Rakesh_GS

                </div>
                <div className={` ${styles.research_groupdetails3}`}>
                    Email: rakeshphys163@gmail.com


                </div>  <div className={` ${styles.research_groupdetails3}`}>
                    Phone: +91 9382011054 (M) 

                </div>
       </div>
    
   
    </div>
        );
    }
export default  Groupmembercards;