import styles from "./CatCards.module.css";
import { useGetCats } from "@/hooks/cats.js";
import pencilIcon from "@/assets/icons/pencilIcon.svg";
import sharedStyles from "@/Styles/sharedStylesForTitleBtn.module.css"; // maybe delete
import { useState } from "react";
import EditCat from "../EditCat/EditCat";

export function CatCards() {
  const { cats, error, loading } = useGetCats();

  const [openEditCat, setOpenEditCat] = useState(false);

  const [currentIndexCat, setCurrentIndexCat] = useState(0);

  const closeEdit = () => setOpenEditCat(false);

  return (
    <section className={styles.wrapper}>
      {cats?.map((cat) => (
        <div className={styles.container} key={cat._id}>
          {loading && <p className={styles.catCardLoadingMsg}>Loading....</p>}
          {error && <p className={styles.catCardErrorMsg}>{error}</p>}
          <div className={styles.cardTopSection}>
            <div className={styles.titleBtn}>
              <h1 className={styles.catName}>{cat.name}</h1>
              <button
                onClick={() => {
                  setOpenEditCat(true);
                  setCurrentIndexCat(cat._id); // So we only get the information on the cat we actually want
                }}
                className={styles.editCat}
              >
                <img
                  className={styles.pencilSvg}
                  src={pencilIcon}
                  alt="Pencil Icon"
                />
              </button>
              {openEditCat && currentIndexCat === cat._id && (
                <EditCat
                  catId={cat._id}
                  catName={cat.name}
                  catAge={cat.age}
                  catTargetMin={cat.targetMin}
                  catTargetMax={cat.targetMax}
                  closeForm={closeEdit}
                />
              )}
            </div>
            <span className={styles.catAge}>{cat.age} years old</span>
          </div>
          <div className={styles.cardMiddleSection}>
            <span className={styles.catWeight}>{cat.weight} Kg</span>
            {/* Remember to have an component that calculates if the kg is in */}
          </div>
          <div className={styles.cardTargetWeight}>
            <span className={styles.catTargetWeight}>
              Target weight {cat.targetMin}kg - {cat.targetMax}kg | Weighed x
              days ago{" "}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
