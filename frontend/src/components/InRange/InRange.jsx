import styles from "./InRange.module.css";
export default function InRange({ catWeight, catTargetMin, catTargetMax }) {
  let weightStatus;
  if (catWeight < catTargetMin) {
    weightStatus = "Under-Weight";
  } else if (catWeight > catTargetMax) {
    weightStatus = "Over-Weight";
  } else {
    weightStatus = "In Range";
  }
  return (
    <section className={styles.inRangeWrapper}>
      <div className={styles.inRangeContainer}>
        <span
          className={
            weightStatus === "Under-Weight"
              ? `${styles.underInRange}`
              : weightStatus === "Over-Weight"
                ? `${styles.overInRange}`
                : `${styles.inRange}`
          }
        >
          {weightStatus}
        </span>
      </div>
    </section>
  );
}
