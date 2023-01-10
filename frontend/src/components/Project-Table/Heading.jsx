import styles from "./Table.module.css";



const Heading = () =>  {
    
    return (
       <>
          <tr  >
            <th className={`${styles.background} w-1/6`}>Sl. No.</th>
            <th className={`${styles.background}  w-2/6`}>Title</th>
            <th className={`${styles.background}  w-1/6`} >Funding Agency</th>
            <th className={`${styles.background}  w-1/6`}>Duration</th>
            <th className={`${styles.background}  w-1/6`}>Investigation</th>
          </tr>
       </>
       
       
        );
    }
export default Heading;