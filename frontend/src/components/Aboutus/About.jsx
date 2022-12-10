import styles from "./About.module.css"
import Headings from "./Headings";


const Aboutus = () =>  {
    
    return (
        <div className= {`${styles.mainbody}  flex` }>

        <div className={`${styles.about}  flex flex-col` }>
            <div className={`${styles.aboutus}`}>About us</div>
            <div className={`${styles.details1} flex justify-center items-center`}>
        
                Welcome to the home page of Terahertz photonics and plasmonics laboratory at the Indian Institute of Technology Guwahati, India.The laboratory, led by Dr. Gagan Kumar conduct research in terahertz plasmonics and metamaterials, guided wave devices, nanoporous silicon and applications, surface plasmon assisted surface enhanced Raman scattering and absorption etc. The research activities involve both theory and experiment with the aim to develop new devices and sensors with improved speed and sensitivity. In the ongoing projects, the primary research focus of the laboratory has been to demonstrate terahertz plasmonic devices using corrugated structures and explore near field coupling in terahertz metamaterials and sensors. Our research activities are currently supported by the Science and Engineering Research Board (SERB), Board of Research in Nuclear Sciences (BRNS) and the Indian Institute of Technology Guwahati. More details on the ongoing research projects can be followed through our publication page.
        
            </div>
            <br/>
            <div className={`${styles.loadgeet} flex items-center justify-center`}>
                <button>
                    <a href="" className={`${styles.Load_button} flex items-center justify-center`}> LOAD MORE<span className={`${styles.drop_arrow} `}>&#8964; </span>  </a>
                </button>
            </div>
            
        
        </div>
        <div className={`${styles.update}  flex flex-col` }>
            <div className={`${styles.updates}`}>Update</div>
            <div className={`${styles.details2} flex flex-col justify-center items-center`}>
        <div className={`${styles.headings}`}>
           <span className={`${styles.dark}`}> Best Paper Award </span> for "Planar Plasmonic Terahertz Waveguides for Sensor Applications" in ICOLS 2018 held in Zurich on Jan. 15-16, 2018.
        
            
        </div>
        
      <Headings/>
        
        
            </div>
            <br/>
            <div className={`${styles.loadgeet} flex items-center justify-center`}>
                <button>
                    <a href="" className={`${styles.Load_button} flex items-center justify-center`}> LOAD MORE<span className={`${styles.drop_arrow} `}>&#8964; </span>  </a>
                </button>
            </div>
            
            
        </div>
            </div>

        );
    }
export default Aboutus;