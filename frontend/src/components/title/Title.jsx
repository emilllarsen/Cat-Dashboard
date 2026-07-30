import styles from  "./Title.module.css";

export function Title({ day, date, month }) {
  return (
    <section className={styles.titleWrapper}>
      <h1 className={styles.mainHeading}>The Cat House</h1>
      <span className={styles.datesInfo}>
        {day}, {date} {month}
      </span>
    </section>
  );
}
