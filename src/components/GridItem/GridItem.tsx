import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css';

import upImage from '../../assets/images/up.png';
import downImage from '../../assets/images/down.png';

type Props = {
    item: Level
}

export const GridItem = ({ item }: Props) => {
  return (
    <body className={styles.main} style={{ backgroundColor : item.color}}>
        <div className={styles.gridIcon}>
            <img src={item.icon === 'up' ? upImage : downImage} alt="" width="30"/>
        </div>
        <div className={styles.gridTitle}>{item.title} </div>

        {item.yourIMC && 
          <div className={styles.yourIMC}>Your BMI is {item.yourIMC} kg/m²</div>
        }

        <div className={styles.gridInfo}>
          <>
          BMI is between <strong>{item.imc[0]} </strong> and <strong>{item.imc[1]}</strong>
          </>
        </div>
    </body>
  )
}
