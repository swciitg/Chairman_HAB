import styles from "./Footer.module.css";
import Path1 from'./Path 1.png';
const Footer = () =>  {
    
    return (
<div className={`flex flex-col ${styles.bottombar}`}>
      <div className={`flex justify-center items-center ${styles.height1}`}>
         <div className={`flex items-stretch ${styles.media}`}>
            <div className={`${styles.marginright}`}>
               <p className={`${styles.details}`}> Contact</p>
               <br/>
               <p className={`${styles.details2}`}> Dr. Gagan Kumar</p>

               <p className={`${styles.details4}`}> Associate Proffesor</p>
               <br/>
               <p className={`${styles.details3}`}> Address: Department
                  of Physics</p>
               <p className={`${styles.details3}`}> IIT Guwahati,
                  Assam</p>
               <p className={`${styles.details3}`}> Guwahati-781039, India.</p>
               <br/>
               <p className={`${styles.details3}`}> Phone: 0361 2583557 (Office)/0361 2584747 (Lab)</p>
               <br/>
               <p className={`${styles.details3}`}> Email: gk@iitg.ac.in/gaganphy.iitg@gmail.com</p>

            </div>
            <div>
               <p className={`${styles.details}`}> Important Links</p>
               <br/>

               <p className={`${styles.details3}`}> IIT Guwahati</p>
               <br/>
               <p className={`${styles.details3}`}> IITG Telephone Directory</p>
               <br/>
               <p className={`${styles.details3}`}> IITG Webmail</p>
               <br/>
               <p className={`${styles.details3}`}> Softwares</p>
               <br/>
               <p className={`${styles.details3}`}>Campus Map</p>
            </div>
         </div>
      </div>
      <div className={`${styles.height2} flex items-center `}>
       <div className={`flex items-center ${styles.height3}`}>

        <div><img src={Path1}  alt=""/></div> 
        <div className={`p-4`}> SWC</div> 
       </div>
       <div className={`  p-5 ${styles.style1} flex items-center `}>
@2021
       </div>
       <div className={`flex items-center  ${styles.style1} `}>   
@students-web-commitee
       </div>
      </div>
   </div>

    );
    }
export default Footer;