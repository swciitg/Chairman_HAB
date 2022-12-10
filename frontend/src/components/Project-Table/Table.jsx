import styles from "./Table.module.css";
import Details from "./Details";
import Heading from "./Heading";

const Table =() =>{
  return (
    <>
    <div className={`${styles.main} flex flex-col justify-center  ${styles.alignment} `}>

      <div className={`${styles.heading2}`}>

        Projects

      </div>
      <br />
      <br />
      <br />
      <div >

        <table className={`border-collapse ${styles.scroll} `}>
    <Heading/>
          <Details/>
          <Details/>

        </table>
      </div>

    </div>
    </>
  );
}

export default Table;