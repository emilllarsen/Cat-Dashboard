import sharedStyles from "@/Styles/sharedStylesForTitleBtn.module.css";
import styles from "./EditCat.module.css";
import exitFormIcon from "@/assets/icons/exit.svg";
import { useState } from "react";
import { updateCat } from "../../service/cats/crudCats.js";

export default function EditCat({
  closeForm,
  catId,
  catName,
  catAge,
  catTargetMin,
  catTargetMax,
}) {
  const [formData, setFormData] = useState({
    name: catName,
    age: catAge,
    targetMin: catTargetMin,
    targetMax: catTargetMax,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ success, setSuccess ] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await updateCat(catId, { ...formData });
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section className={sharedStyles.btnWrapper}>
      <div className={sharedStyles.btnContainer}>
        <div className={sharedStyles.formHeader}>
          {loading && <p>Loading...</p> }
          <h1>Edit {catName}</h1>
          <button className={sharedStyles.closeFormBtn} onClick={closeForm}>
            <img
              className={sharedStyles.closeFormIcon}
              src={exitFormIcon}
              alt="Exit icon"
            />
          </button>
        </div>
        <form className={styles.editCatForm} onSubmit={handleSubmit}>
          <div className={`${sharedStyles.formContainer} ${styles.formName}`}>
            <label className={sharedStyles.formLabel} htmlFor="name">Name</label>
            <input
            className={sharedStyles.formInput}
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className={`${sharedStyles.formContainer} ${styles.formAge}`}>
            <label className={sharedStyles.formLabel} htmlFor="age">Age</label>
            <input
            className={sharedStyles.formInput}
              type="number"
              name="age"
              onChange={handleChange}
              value={formData.age}
            />
          </div>
          <div className={`${sharedStyles.formContainer} ${styles.formTargetMin}`}>
            <label className={sharedStyles.formLabel} htmlFor="targetMin">Target Min</label>
            <input
            className={sharedStyles.formInput}
              type="number"
              name="targetMin"
              onChange={handleChange}
              value={formData.targetMin}
            />
          </div>
          <div className={`${sharedStyles.formContainer} ${styles.formTargetMax}`}>
            <label className={sharedStyles.formLabel} htmlFor="targetMax">Target Max</label>
            <input
            className={sharedStyles.formInput}
              type="number"
              name="targetMax"
              onChange={handleChange}
              value={formData.targetMax}
            />
          </div>
          <button className={`${styles.formSubmitBtn} ${sharedStyles.formBtn}`} disabled={success}>Save changes</button>
          <button className={`${styles.formCancelBtn} ${sharedStyles.formBtn}`} onClick={closeForm}>Cancel</button>
        </form>
      </div>
    </section>
  );
}
