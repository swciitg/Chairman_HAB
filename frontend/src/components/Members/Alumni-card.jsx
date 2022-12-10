import styles from "./Member.module.css";
import Pic from "./pic.png";
const Alumnicards = () => {
  return (
    <div
      className={`flex items-center justify-center   ${styles.alumni_cards}`}
    >
      <div
        className={` ${styles.members_cardsimg} flex justify-center items-center w-1/3`}
      >
        <img scr={Pic} alt="" />
      </div>
      <div className={`${styles.members_cardscontent}  flex  flex-col `}>
        <div className={` ${styles.research_groupdetails1}`}>
          {" "}
          Mr. Maidul Islam
        </div>
        <br />
        <div className={` ${styles.research_groupdetails2}`}>
          Assistant professor
        </div>
        <div className={` ${styles.research_groupdetails3}`}></div>

        <div className={` ${styles.research_groupdetails3}`}>
          {" "}
          Year of completion: 2018
        </div>
        <div className={` ${styles.research_groupdetails3}`}>
          The Assam Royal Global University
        </div>
        <div className={` ${styles.research_groupdetails3}`}>
          Email: maidul.iitg@gmail.com
        </div>
        <div className={` ${styles.research_groupdetails3}`}>
          Phone: +91 (M)
        </div>
      </div>
    </div>
  );
};
export default Alumnicards;
