import styles from "./Title.module.css";
import { useState } from "react";
import AddCatForm from "../Add.Cat.Form/AddCatForm";

export function Title({ day, date, month }) {
  const [openNewCatForm, setOpenNewCatForm] = useState(false);
  // const [openNewChore, setOpenNewChore] = useState(false);
  // const [openLogWeight, setOpenLogWeight] = useState(false);

  const openAddCat = () => setOpenNewCatForm(true);
  const closeModal = () => setOpenNewCatForm(false);
  return (
    <section className={styles.titleWrapper}>
      <div className={styles.addCatAndHeading}>
        <h1 className={styles.mainHeading}>The Cat House</h1>
        <button className={styles.openNewCatForm} onClick={openAddCat}>Add Cat</button>
      </div>
      <span className={styles.datesInfo}>
        {day}, {date} {month}
      </span>
      {openNewCatForm && (
        <AddCatForm
          closeCatForm={closeModal}
        />
      )}
    </section>
  );
}
