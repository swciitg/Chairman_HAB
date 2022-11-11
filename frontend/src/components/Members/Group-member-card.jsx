import styles from "./Members.modules.css";
import Pic from './pic.png';
const Groupmembercards = () =>  {
    
    return (
        <div className={`flex items-center justify-center  ${styles.Memberscards} `}>
       <div className={` ${styles.Memberscardsimg}  flex justify-center items-center w-1/3`}>
<img scr={Pic} alt=""/>
       </div>
       <div className={` ${styles.Memberscardscontent}  flex  flex-col `}>
       
            <div className={` ${styles.ResearchGroupdetails1 }`}>                Mr. Rakesh Sarkar
            </div>
            <br/>
            <div className={` ${styles.ResearchGroupdetails2}`}>Department of Physics</div>
            <div className={` ${styles.ResearchGroupdetails3}`}>
                
                

                
          
                
           
               </div>

                <div className={` ${styles.ResearchGroupdetails3}`}> PhD student</div>
                <div className={` ${styles.ResearchGroupdetails3}`}>
                    Research interest:Terahertz metamaterial,polarization rotation devices,
                    Electromagnetically induced transparency and toroidal metamaterial.
                </div>
                <div className={` ${styles.ResearchGroupdetails3}`}>
                    Google Scholar: Rakesh_GS

                </div>
                <div className={` ${styles.ResearchGroupdetails3}`}>
                    Email: rakeshphys163@gmail.com


                </div>  <div className={` ${styles.ResearchGroupdetails3}`}>
                    Phone: +91 9382011054 (M) 

                </div>
       </div>
    
   
    </div>
        );
    }
export default  Groupmembercards;