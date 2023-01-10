import styles from "./Footer.module.css";
import Path1 from "./Path 1.png";
const Footer = () => {
  return (
    <div className={`flex flex-col ${styles.bottombar} pt-11 `}>
      <div className={`flex justify-center ${styles.height1} w-full mb-8 pl-8  `}>
          <div className={`mr-20  ${styles.marginbottom} `}>
            <p className={`${styles.details} mb-3`}> Contact</p>
            <p className={`${styles.details2} mb-2.5`}> Dr. Gagan Kumar</p>
            <p className={`${styles.details4} mb-5`}> Associate Professor</p>
            <p className={`${styles.details3}`}>
              {" "}
              Address: Department of Physics
            </p>
            <p className={`${styles.details3}`}> IIT Guwahati, Assam</p>
            <p className={`${styles.details3} mb-3.5`}> Guwahati-781039, India.</p>
            <p className={`${styles.details3} mb-3.5`}>
              {" "}
              Phone: 0361 2583557 (Office)/0361 2584747 (Lab)
            </p>
            <p className={`${styles.details3}`}>
              {" "}
              Email: gk@iitg.ac.in/gaganphy.iitg@gmail.com
            </p>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.details} mb-3`}> Important Links</p>
            <a href="https://iitg.ac.in/" className={`${styles.details3} mb-1.5`}> IIT Guwahati</a>
            <a href="https://www.iitg.ac.in/phones/" className={`${styles.details3} mb-1.5`}> IITG Telephone Directory</a>
            <a href="https://www.iitg.ac.in/cc/office365" className={`${styles.details3} mb-1.5`}> IITG Webmail</a>
            <a href="http://intranet.iitg.ac.in/repo/" className={`${styles.details3} mb-1.5`}> Softwares</a>
            <a href="https://www.iitg.ac.in/campusmap/" className={`${styles.details3} mb-1.5`}>Campus Map</a>
          </div>
      </div>
      <div className={`${styles.height2} flex items-center `}>
        <div className={`flex items-center ${styles.height3}`}>
          <div>
            <img src={Path1} alt="" />
          </div>
          <div className={`p-4`}> SWC</div>
        </div>
        <div className={`  p-5 ${styles.style1} flex items-center `}>@2021</div>
        <div className={`flex items-center  ${styles.style1} `}>
          @students-web-commitee
        </div>
      </div>
    </div>
  );
};
export default Footer;
