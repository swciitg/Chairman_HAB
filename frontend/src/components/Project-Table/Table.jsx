import styles from "./Table.module.css";


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
          <tr  >
            <th className={`${styles.background} w-1/6`}>Sl. No.</th>
            <th className={`${styles.background}  w-2/6`}>Title</th>
            <th className={`${styles.background}  w-1/6`} >Funding Agency</th>
            <th className={`${styles.background}  w-1/6`}>Duration</th>
            <th className={`${styles.background}  w-1/6`}>Investigation</th>
          </tr>
          <tr className={`w-24`} >
            <td>1</td>
            <td >DST Fast Track Young Scientist </td>
            <td>SERB</td>
            <td>2015-18</td>
            <td>ABC</td>
          </tr>
          <tr className={`w-24`}>
            <td>2</td>
            <td >Young Scientist Research Award</td>
            <td>BRNS</td>
            <td>2015-18</td>
            <td>XYZ</td>
          </tr>

        </table>
      </div>

    </div>
    </>
  );
}

export default Table;