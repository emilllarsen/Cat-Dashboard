import styles from "./CatCards.module.css";
import { useEffect, useState } from "react";
import { useGetCats } from "../../hooks/cats.js";

export function CatCards() {
  const { cats, error, loading } = useGetCats();

  return (
    <section className={styles.wrapper}>
      {cats?.map((cat, index) => (
        <div className={styles.container} key={index}>
            {loading && <p>Loading....</p>}
            {error && <p>{error}</p>}
            <div className={styles.cardTopSection}>
                <h1 className={styles.catName}>{cat.name}</h1>
                <span className={styles.catAge}>{cat.age} years old</span>
            </div>
            <div className={styles.cardMiddleSection}>
                <span>{cat.weight}</span>
            </div>
            <div className={styles.cardTargetWeight}>
                <span>Target weight {cat.targetMin}kg - {cat.targetMax}kg</span>
            </div>
        </div>
      ))}
    </section>
  );
}
