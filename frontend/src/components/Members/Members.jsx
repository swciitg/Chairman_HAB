import Alumnicards from "./Alumni-card";
import Collaberatorscards from "./Collaberators-card";
import Groupmembercards from "./Group-member-card";
import styles from "./Members.module.css";
import PastMembers from "./Past-Members-card";
import Pic from "./pic.png";
const Members = () => {
  return (
    <div className={` ${styles.mainbody} flex flex-col`}>
      <div className={`${styles.research_group} flex flex-col  `}>
        <div className={` ${styles.research_groupheading} flex items-center `}>
          {" "}
          Research Group
        </div>
        <div
          className={`flex items-center justify-evenly ${styles.research_groupcontent}  `}
        >
          <div
            className={` flex items-center justify-center ${styles.height1}`}
          >
            <img className={` ${styles.imgheight1}`} src={Pic} alt="" />
          </div>
          <div
            className={` flex justify-center items-center  ${styles.height3}`}
          >
            <div className={`w-1/2 flex  flex-col  ${styles.height4}`}>
              <div className={`flex flex-col justify-center`}>
                <div className={` ${styles.research_groupdetails1}`}>
                  Dr. Gagan Kumar
                </div>
                <br />
                <div className={` ${styles.research_groupdetails2}`}>
                  Associate Professor
                </div>
                <div className={` ${styles.research_groupdetails3}`}>
                  Department of Physics
                </div>

                <div className={` ${styles.research_groupdetails3}`}>
                  {" "}
                  Indian Institute of Technology Guwahati Guwahati-39, Assam,
                  India
                </div>
                <div className={` ${styles.research_groupdetails3}`}>
                  Phone: 0361 2583557 (Office) 0361 2584747 (Lab)
                </div>
                <div className={` ${styles.research_groupdetails3}`}>
                  Email: gk@iitg.ac.in , gaganphy.iitd@gmail.com
                </div>
              </div>
            </div>

            <div className={`w-1/2   ${styles.height4} flex  flex-col`}>
              <div className={`flex flex-col justify-center`}>
                <div className={` ${styles.research_groupdetails1}`}>
                  {" "}
                  Research profile
                </div>
                <br />
                <div className={` ${styles.research_groupdetails3}`}>
                  OrcidID:{" "}
                  <span className={` ${styles.research_groupids}`}>
                    0000-0001-5867-0670
                  </span>{" "}
                </div>
                <div className={` ${styles.research_groupdetails3}`}>
                  ResearcherID:{" "}
                  <span className={` ${styles.research_groupids}`}>
                    E-3140-2013
                  </span>
                </div>

                <div className={` ${styles.research_groupdetails3}`}>
                  {" "}
                  Scopus Author ID:{" "}
                  <span className={` ${styles.research_groupids}`}>
                    55553625600
                  </span>{" "}
                </div>
                <div className={` ${styles.research_groupdetails3}`}>
                  Google Scholar:{" "}
                  <span className={` ${styles.research_groupids}`}>
                    https://scholar.google.co.in/citationsuser=YqHz-B4AAAAJ&hl=en
                  </span>
                </div>
                <div className={` ${styles.research_groupdetails3}`}>
                  <a href="">Education {">"}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.group_members}`}>
        <div className={`${styles.research_groupheading}  flex items-center `}>
          Group Members
        </div>
        <br />

        <br />
        <div className={`flex  ${styles.cards} ${styles.wild_cards} `}>
          <Groupmembercards />
        </div>
      </div>
      <div className={` ${styles.alumni}`}>
        <div className={`${styles.research_groupheading}  flex items-center `}>
          Alumni(PhD Scholars)
        </div>
        <br />

        <br />
        <div className={`flex ${styles.cards} `}>
          <Alumnicards />
        </div>
      </div>
      <div className={`${styles.past_members}`}>
        <div className={`${styles.research_groupheading}  flex items-center `}>
          Past members
        </div>
        <br />
        <br />
        <div className={`flex flex-col ${styles.cards}`}>
          <PastMembers />
        </div>
        <br />
        <div
          className={`flex items-center justify-center ${styles.loadBUtton} `}
        >
          <button>
            <a
              href=""
              className={`${styles.load_button} flex items-center justify-center`}
            >
              {" "}
              LOAD MORE<span className={`${styles.drop_arrow} `}>
                &#8964;{" "}
              </span>{" "}
            </a>
          </button>
        </div>
      </div>
      <div className={` ${styles.collaberators}`}>
        <div className={`${styles.research_groupheading}  flex items-center `}>
          Collaborators
        </div>
        <br />
        <br />
        <div className={`flex flex-col ${styles.cards}`}>
          <Collaberatorscards />
        </div>
        <br />
        <div
          className={`flex items-center justify-center ${styles.loadBUtton}`}
        >
          <button>
            <a
              href=""
              className={`${styles.load_button} flex items-center justify-center`}
            >
              {" "}
              LOAD MORE
              <span className={`${styles.drop_arrow} `}> &#8964; </span>{" "}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Members;
