import Alumnicards from "./Alumni-card";
import Collaberatorscards from "./Collaberators-card";
import Groupmembercards from "./Group-member-card";
import styles from "./Members.modules.css";
import PastMembers from "./Past-Members-card";
import Pic from'./pic.png';
const Members = () =>  {
    
    return (
<div className={` ${styles.mainbody} flex flex-col`}>


<div className={`${styles.ResearchGroup} flex flex-col  `}>
    <div className={` ${styles.Research_Group_heading} flex items-center `}>  Research Group</div>
    <div className={`flex items-center justify-evenly ${styles.Research_Group_Content}  `}>
        <div className={` flex items-center justify-center height-1`}>
            <img className={` ${styles.img_height_1}`} src={Pic} alt=""/>
        </div>
        <div className={` flex justify-center items-center  ${styles.height_3}`}>
        <div className={`w-1/2 flex  flex-col  ${styles.height_4}`}>
            <div className={`flex flex-col justify-center`}>
            <div className={` ${styles.ResearchGroupdetails1 }`}>Dr. Gagan Kumar</div>
            <br/>
            <div className={` ${styles.ResearchGroupdetails2}`}>Associate Professor</div>
            <div className={` ${styles.ResearchGroupdetails3}`}>
                
                Department of Physics
               
           
               </div>

                <div className={` ${styles.ResearchGroupdetails3}`}> Indian Institute of Technology Guwahati
                    Guwahati-39, Assam, India</div>
                <div className={` ${styles.ResearchGroupdetails3}`}>
                    Phone: 0361 2583557 (Office)
                    0361 2584747 (Lab)
                </div>
                <div className={` ${styles.ResearchGroupdetails3}`}>
                    Email: gk@iitg.ac.in , 
                    gaganphy.iitd@gmail.com
                </div>
            </div>
        </div>

        <div className={`w-1/2   ${styles.height-4} flex  flex-col`}>
            <div className={`flex flex-col justify-center`}>
            <div className={` ${styles.ResearchGroupdetails1 }`}> Research profile</div>
            <br/>
            <div className={` ${styles.ResearchGroupdetails3}`}>OrcidID: <span className={` ${styles.Research_Group_ids}`}>0000-0001-5867-0670</span> </div>
            <div className={` ${styles.ResearchGroupdetails3}`}>
                
               

                
                ResearcherID: <span className={` ${styles.Research_Group_ids}`}>E-3140-2013</span> 
                
          
                
                
               
               
           
               </div>

                <div className={` ${styles.ResearchGroupdetails3}`}> Scopus Author ID: <span className={` ${styles.Research_Group_ids}`}>55553625600</span> </div>
                <div className={` ${styles.ResearchGroupdetails3}`}>
                    Google Scholar: <span className={` ${styles.Research_Group_ids}`}>
                        https://scholar.google.co.in/citationsuser=YqHz-B4AAAAJ&hl=en</span> 
                </div>
                <div className={` ${styles.ResearchGroupdetails3}`}>
                 <a href="">Education {">"}</a>   
                </div>
                </div>
        </div>
    </div>
    </div>
</div>
<div className={`${styles.GroupMembers}`}>
    <div className={`${styles.ResearchGroupheading}  flex items-center `}>
          Group Members
    </div>
    <br/>

    <br/>
          <div className={`flex  ${styles.cards} ${styles.wildcards} `}>
    <Groupmembercards/>

</div>
</div>
<div className={` ${styles.Alumni}`}>
    <div className={`${styles.ResearchGroupheading}  flex items-center `}>
        Alumni(PhD Scholars)
    </div>
    <br/>

    <br/>
          <div className={`flex ${styles.cards} `}>
    

  <Alumnicards/>
</div>

</div>
<div className={`${styles.PastMembers}`}>
    <div className={`${styles.ResearchGroupheading}  flex items-center `}>
        Past members
    </div>
    <br/>
    <br/>
          <div className={`flex flex-col ${styles.cards}`}>

    <PastMembers/>
 

</div>
<br/>
<div className={`flex items-center justify-center ${styles.loadBUtton} `}>
    <button>
        <a href="" className={`${styles.loadButton} flex items-center justify-center`}> LOAD MORE<span className={`${styles.droparrow} `}>&#8964; </span>  </a>
    </button>
</div>

</div>
<div className={` ${styles.Collaberators}`}>
    <div className={`${styles.ResearchGroupheading}  flex items-center `}>
        Collaborators
    </div>
    <br/>
    <br/>
    <div className={`flex flex-col ${styles.cards}`}>
     
          <Collaberatorscards/>
    </div>
<br/>
    <div className={`flex items-center justify-center ${styles.loadBUtton}`}>
        <button>
            <a href="" className={`${styles.loadButton} flex items-center justify-center`}> LOAD MORE<span className={`${styles.droparrow} `}> &#8964; </span>  </a>
        </button>
    </div>
</div>


</div>
        );
    }
export default Members;