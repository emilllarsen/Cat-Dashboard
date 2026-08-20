import styles from "./LogWeightForm.module.css";
import sharedStyles from '../../Styles/sharedStylesForTitleBtn.module.css';
import exitIcon from "@/assets/icons/exit.svg";
export default function LogWeightForm({ closeWeightForm }) {
  return (
    <section className={sharedStyles.btnWrapper}>
      <div className={sharedStyles.btnContainer}>
        <div className={sharedStyles.formHeader}>
          <h1>Log a Weight</h1>
          <button className={sharedStyles.closeFormBtn} onClick={closeWeightForm}>
            <img
              className={sharedStyles.closeFormIcon}
              src={exitIcon}
              alt="Exit icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
