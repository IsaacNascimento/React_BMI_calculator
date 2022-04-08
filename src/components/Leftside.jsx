import React, { useState } from 'react';
import styles from '../../src/App.module.css';

export const Leftside = () => {

  const [heightField, setheightField] = useState(0);

  const [WeightField, setWeightField] = useState(0);

  const HandleCalculateBtn = () => {
    if (heightField && WeightField) {

    } else {
      alert("Insert in all fields");
    }
  }
   

  return (
    <body>
       <div className={styles.container}>
        <div className={styles.leftSide}> 
          <h1>
           Body mass index
          </h1>
          <p>
          Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. View the BMI tables or use the tool below to compute yours.
          </p>
          <input 
           type="number" 
           placeholder="Type your height. Ex: 1.6 (meters)" 
           value={heightField >  0 ? heightField : ''} 
           onChange={e => setheightField(parseFloat(e.target.value))}>
          </input>
          <input 
           type="number" 
           placeholder="Type your wheight. Ex: 70.7 (kg)" 
           value={WeightField >  0 ? WeightField : ''} 
           onChange={e => setWeightField(parseFloat(e.target.value))}>
          </input>

          <button onClick={HandleCalculateBtn}>Press</button>
        </div>
     </div> 
    </body>
  )
}
