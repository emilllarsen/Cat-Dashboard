import styles from "./LogWeightForm.module.css";
import exitIcon from "@/assets/icons/exit.svg";
export default function LogWeightForm({ closeWeightForm }) {
  return (
    <section className={styles.logWeighWrapper}>
      <div className={styles.logWeightContainer}>
        <div className={styles.logWeightHeader}>
          <h1>Log a Weight</h1>
          <button className={styles.closeFormBtn} onClick={closeWeightForm}>
            <img className={styles.closeFormIcon} src={exitIcon} alt="Exit icon" />{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
