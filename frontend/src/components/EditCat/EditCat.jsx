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
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError(null);
    try {
      await updateCat(catId, {
        ...formData,
        // age: Number(formData.age),
        // targetMin: Number(formData.targetMin),
        // targetMax: Number(formData.targetMax),
      });
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
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              onChange={handleChange}
              value={formData.age}
            />
          </div>
          <div>
            <label htmlFor="targetMin">Target Min</label>
            <input
              type="number"
              name="targetMin"
              onChange={handleChange}
              value={formData.targetMin}
            />
          </div>
          <div>
            <label htmlFor="targetMax">Target Max</label>
            <input
              type="number"
              name="targetMax"
              onChange={handleChange}
              value={formData.targetMax}
            />
          </div>
          <button>Save changes</button>
          <button onClick={closeForm}>Cancel</button>
        </form>
      </div>
    </section>
  );
}
