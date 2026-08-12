import styles from "./CatCards.module.css";
import { useGetCats } from "@/hooks/cats.js";
import pencilIcon from '@/assets/icons/pencilIcon.svg';

export function CatCards() {
  const { cats, error, loading } = useGetCats();

  return (
    <section className={styles.wrapper}>
      {cats?.map(cat => (
        <div className={styles.container} key={cat._id}>
            {loading && <p className={styles.catCardLoadingMsg}>Loading....</p>}
            {error && <p className={styles.catCardErrorMsg}>{error}</p>}
            <div className={styles.cardTopSection}>
              <div className={styles.titleBtn}>
                <h1 className={styles.catName}>{cat.name}</h1>
                <button className={styles.editCat}><img className={styles.pencilSvg} src={pencilIcon} alt="" /></button> {/**Remember to add an onClick here!! */}
              </div>
                <span className={styles.catAge}>{cat.age} years old</span>
            </div>
            <div className={styles.cardMiddleSection}>
                <span className={styles.catWeight}>{cat.weight} Kg</span>
                 {/* Remember to have an component that calculates if the kg is in */}
            </div>
            <div className={styles.cardTargetWeight}>
                <span className={styles.catTargetWeight}>Target weight {cat.targetMin}kg - {cat.targetMax}kg | Weighed x days ago </span>
            </div>
        </div>
      ))}
    </section>
  );
}
