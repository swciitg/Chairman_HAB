import Alumni_cards from "./Alumni-card";
import Collaberators_cards from "./Collaberators-card";
import Group_member_cards from "./Group-member-card";
import styles from "./Member.modules.css";
import Past_Members from "./Past-Members-card";
import Pic from'./pic.png';
const Members = () =>  {
    
    return (
<div className={` ${styles.main-body} flex flex-col`}>


<div className={`${styles.Research-Group} flex flex-col  `}>
    <div className={` ${styles.Research-Group-heading} flex items-center `}>  Research Group</div>
    <div className={`flex items-center justify-evenly ${styles.Research-Group-Content}  `}>
        <div className={` flex items-center justify-center height-1`}>
            <img className={` ${styles.img-height-1}`} src={Pic} alt=""/>
        </div>
        <div className={` flex justify-center items-center  ${styles.height-3}`}>
        <div className={`w-1/2 flex  flex-col  ${styles.height-4}`}>
            <div className={`flex flex-col justify-center`}>
            <div className={` ${styles.Research-Group-details-1 }`}>Dr. Gagan Kumar</div>
            <br/>
            <div className={` ${styles.Research-Group-details-2}`}>Associate Professor</div>
            <div className={` ${styles.Research-Group-details-3}`}>
                
                Department of Physics
               
           
               </div>

                <div className={` ${styles.Research-Group-details-3}`}> Indian Institute of Technology Guwahati
                    Guwahati-39, Assam, India</div>
                <div className={` ${styles.Research-Group-details-3}`}>
                    Phone: 0361 2583557 (Office)
                    0361 2584747 (Lab)
                </div>
                <div className={` ${styles.Research-Group-details-3}`}>
                    Email: gk@iitg.ac.in , 
                    gaganphy.iitd@gmail.com
                </div>
            </div>
        </div>

        <div className={`w-1/2   ${styles.height-4} flex  flex-col`}>
            <div className={`flex flex-col justify-center`}>
            <div className={` ${styles.Research-Group-details-1 }`}> Research profile</div>
            <br/>
            <div className={` ${styles.Research-Group-details-3}`}>OrcidID: <span className={` ${styles.Research-Group-ids}`}>0000-0001-5867-0670</span> </div>
            <div className={` ${styles.Research-Group-details-3}`}>
                
               

                
                ResearcherID: <span className={` ${styles.Research-Group-ids}`}>E-3140-2013</span> 
                
          
                
                
               
               
           
               </div>

                <div className={` ${styles.Research-Group-details-3}`}> Scopus Author ID: <span className={` ${styles.Research-Group-ids}`}>55553625600</span> </div>
                <div className={` ${styles.Research-Group-details-3}`}>
                    Google Scholar: <span className={` ${styles.Research-Group-ids}`}>
                        https://scholar.google.co.in/citationsuser=YqHz-B4AAAAJ&hl=en</span> 
                </div>
                <div className={` ${styles.Research-Group-details-3}`}>
                 <a href="">Education {">"}</a>   
                </div>
                </div>
        </div>
    </div>
    </div>
</div>
<div className={`${styles.Group_Members}`}>
    <div className={`${styles.Research-Group-heading}  flex items-center `}>
          Group Members
    </div>
    <br/>

    <br/>
          <div className={`flex  ${styles.cards} ${styles.wild-cards} `}>
    <div className={`flex items-center justify-center  ${styles.Members-cards} `}>
       <div className={` ${styles.Members-cards-img}  flex justify-center items-center w-1/3`}>
<img scr={Pic} alt=""/>
       </div>
       <div className={` ${styles.Members-cards-content}  flex  flex-col `}>
       
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
     <Group_member_cards/>

</div>
</div>
<div className={` ${styles.Alumni}`}>
    <div className={`${styles.Research-Group-heading}  flex items-center `}>
        Alumni(PhD Scholars)
    </div>
    <br/>

    <br/>
          <div className={`flex ${styles.cards} `}>
    <div className={`flex items-center justify-center   ${styles.Alumni-cards}`}>
       <div className={` ${styles.Members-cards-img} flex justify-center items-center w-1/3`}>
<img scr={Pic} alt=""/>
       </div>
       <div className={`${styles.Members-cards-content}  flex  flex-col `}>
       
            <div className={` ${styles.Research-Group-details-1 }`}>        Mr. Maidul Islam
                





            </div>
            <br/>
            <div className={` ${styles.Research-Group-details-2}`}>Assistant professor</div>
            <div className={` ${styles.Research-Group-details-3}`}>
                
                

                
          
                
           
               </div>

                <div className={` ${styles.Research-Group-details-3}`}> Year of completion: 2018</div>
                <div className={` ${styles.Research-Group-details-3}`}>
                    The Assam Royal Global University
                </div>
                <div className={` ${styles.Research-Group-details-3}`}>
                    Email: maidul.iitg@gmail.com


                </div>
                <div className={` ${styles.Research-Group-details-3}`}>
                    Phone: +91 (M)

                </div> 
       </div>
    
   
    </div>

  <Alumni_cards/>
</div>

</div>
<div className={`${styles.Past_Members}`}>
    <div className={`${styles.Research-Group-heading}  flex items-center `}>
        Past members
    </div>
    <br/>
    <br/>
          <div className={`flex flex-col ${styles.cards}`}>

    <Past_Members/>
     <div className={`flex items-center  ${styles.Past_Members-cards}`}>
 
  
        <b> Shivam Rajguru</b> (B.tech project student, 2020-2021)
    
     </div>

</div>
<br/>
<div className={`flex items-center justify-center ${styles.load-BUtton} `}>
    <button>
        <a href="" className={`${styles.load-Button} flex items-center justify-center`}> LOAD MORE<span className={`${styles.drop-arrow} `}>&#8964; </span>  </a>
    </button>
</div>

</div>
<div className={` ${styles.Collaberators}`}>
    <div className={`${styles.Research-Group-heading}  flex items-center `}>
        Collaborators
    </div>
    <br/>
    <br/>
    <div className={`flex flex-col ${styles.cards}`}>
        <div className={`flex flex-col justify-center ${styles.Collaberators-cards}`}>

          <div><b>   Dr. Dibakar Roy Chowdhury </b></div>  
           
           <div>(Associate Professor, Mahindra Ecole Centrale, Hyderabad)</div> 

        </div>
          <Collaberators_cards/>
    </div>
<br/>
    <div className={`flex items-center justify-center ${styles.load-BUtton}`}>
        <button>
            <a href="" className={`${styles.load-Button} flex items-center justify-center`}> LOAD MORE<span className={`${styles.drop-arrow} `}> &#8964; </span>  </a>
        </button>
    </div>
</div>


</div>
        );
    }
export default Members;