import styles from "./Table.module.css";
import Details from "./Details";
import Heading from "./Heading";



const Table =() =>{

  return (
    <>
    <div className={`${styles.main} flex flex-col   ${styles.alignment} `}>

      <div className={`${styles.heading2}`}>

        Projects

      </div>
    
      <div >

        <table className={`border-collapse ${styles.scroll} `}>
    <Heading/>
           <Details/>  
      

        </table>
      </div>

    </div>
    </>
  );
}

export default Table;