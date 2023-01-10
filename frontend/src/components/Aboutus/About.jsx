import styles from "./About.module.css";
import Data from "./Data";
import Headings from "./Heading";
const Aboutus = () => {
  return (
    <>
      <div className={`${styles.mainbody}  flex`}>
        <div className={`${styles.about}  flex flex-col`}>
          <div className={`${styles.aboutus}`}>About us</div>
          <Data />

          <br />
          {/* <div
            className={`${styles.loadgeet} flex items-center justify-center`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <a
                href=""
                className={`${styles.Load_button} flex items-center justify-center`}
              >
                {" "}
                LOAD MORE
                <span className={`${styles.drop_arrow} `}>&#8964; </span>{" "}
              </a>
            </button>
          </div> */}
        </div>
        <div className={`${styles.update}  flex flex-col`}>
          <div className={`${styles.updates}`}>Update</div>
          <div
            className={`${styles.details2} flex flex-col justify-center items-center`}
          >
            <Headings />
          </div>
          <br />
          {/* <div
            className={`${styles.loadgeet} flex items-center justify-center`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <a
                href=""
                className={`${styles.Load_button} flex items-center justify-center`}
              >
                {" "}
                LOAD MORE
                <span className={`${styles.drop_arrow} `}>&#8964; </span>{" "}
              </a>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Aboutus;
