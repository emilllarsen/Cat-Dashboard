import styles from  "./Title.module.css";
import { useState } from "react";
export function Title({ day, date, month }) {
const [ openNewCatForm, setOpenNewCatForm ] = useState(false);
const [ openNewChore, setOpenNewChore ] = useState(false);
const [ openLogWeight, setOpenLogWeight ] = useState(false);

  return (
    <section className={styles.titleWrapper}>
      <h1 className={styles.mainHeading}>The Cat House</h1>
      <span className={styles.datesInfo}>
        {day}, {date} {month}
      </span>

      <div className={styles.buttons}>
      </div>
    </section>
  );
}
