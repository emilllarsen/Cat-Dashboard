import styles from "./Title.module.css";
import { useState } from "react";
import AddCatForm from "../Add.Cat.Form/AddCatForm";
import LogWeightForm from '../LogWeightForm/LogWeightForm';

export function Title({ day, date, month }) {
  const [openNewCatForm, setOpenNewCatForm] = useState(false);
  // const [openNewChore, setOpenNewChore] = useState(false);
  const [openNewLogWeight, setOpenNewLogWeight] = useState(false);

  const openAddCat = () => setOpenNewCatForm(true);
  const closeAddCat = () => setOpenNewCatForm(false);

  const openLogWeight = () => setOpenNewLogWeight(true);
  const closeLogWeight = () => setOpenNewLogWeight(false);


  return (
    <section className={styles.titleWrapper}>
      <div className={styles.addCatAndHeading}>
        <h1 className={styles.mainHeading}>The Cat House</h1>
        <div className={styles.titleBtns}>
          <button className={styles.openNewCatForm} onClick={openAddCat}>
            Add Cat
          </button>
          <button className={styles.openNewCatForm} onClick={openLogWeight}>
            Log Weight
          </button>
        </div>
      </div>
      <span className={styles.datesInfo}>
        {day}, {date} {month}
      </span>
      {openNewCatForm && <AddCatForm closeCatForm={closeAddCat} />}
      {openNewLogWeight && <LogWeightForm closeWeightForm={closeLogWeight}/>}

    </section>
  );
}
