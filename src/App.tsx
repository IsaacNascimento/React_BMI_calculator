import styles from "./App.module.css";
import PDimage from "./assets/images/powered.png";
import LeftArrowImage from "./assets/images/leftarrow.png";
import React, { useState } from "react";
import { Leftside } from "./components/Leftside";

import { levels, calculateImc, Level } from "./helpers/imc";

import { GridItem } from "./components/GridItem";

export const App = () => {
  const [heightField, setheightField] = useState(0);

  const [WeightField, setWeightField] = useState(0);

  const [ToShow, setToShow] = useState<Level | null>(null);

  const HandleCalculateBtn = () => {
    if (heightField && WeightField) {
      setToShow(calculateImc(heightField, WeightField));
    } else {
      alert("Insert in all fields");
    }
  };

  const handleBackBtn = () => {
    setToShow(null);
    setheightField(0);
    setWeightField(0);
  }
  return (
    <body className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={PDimage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Body mass index</h1>
          <p>
            Body mass index (BMI) is a measure of body fat based on height and
            weight that applies to adult men and women. View the BMI tables or
            use the tool below to compute yours.
          </p>
          <input
            type="number"
            placeholder="Type your height. Ex: 1.6 (meters)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setheightField(parseFloat(e.target.value))}
            disabled={ToShow ? true : false}
            ></input>
          <input
            type="number"
            placeholder="Type your wheight. Ex: 70.7 (kg)"
            value={WeightField > 0 ? WeightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
            disabled={ToShow ? true : false}
            ></input>
          <button onClick={HandleCalculateBtn} disabled={ToShow ? true : false}>Press</button>
        </div>
        <div className={styles.rightSide}>
          {!ToShow && 
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {ToShow && 
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackBtn}>
                <img src={LeftArrowImage} alt="" width={25}/>
              </div>
              <GridItem item={ToShow} />
            </div>
          }
        </div>
      </div>
      ...
    </body>
  );
};
