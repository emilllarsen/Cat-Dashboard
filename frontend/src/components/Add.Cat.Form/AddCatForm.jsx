import { useState } from "react";
import { createCat } from "../../service/cats/crudCats";
import styles from "./AddCatForm.module.css";
import exitIcon from "@/assets/icons/exit.svg";

export default function AddCatForm({ closeCatForm }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    targetMin: "",
    targetMax: "",
    weight: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fieldsFilledOut, setFieldsFilledOut] = useState(false); // Enables the submit btn when all fields is inputted.

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // setError(null);

    try {
      await createCat({
        ...formData,
        age: Number(formData.age),
        targetMin: Number(formData.targetMin), // converts age, targetMin - max and weight from string to number
        targetMax: Number(formData.targetMax),
        weight: Number(formData.weight),
      });

      setSuccess(true);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
      setSuccess(false);
    }
  }

  return (
    <section className={styles.addCatWrapper}>
      <div className={styles.addCatContainer}>
        <div className={styles.addCatHeader}>
          <h1>New Cat</h1>
          {error && <p>{error}</p>}
          <button className={styles.closeFormBtn} onClick={closeCatForm}>
            <img
              className={styles.closeFormIcon}
              src={exitIcon}
              alt="Exit icon"
            />
          </button>
        </div>

        <form className={styles.formGrid} onSubmit={handleFormSubmit}>
          <div className={`${styles.formContainer} ${styles.formName}`}>
            <label className={styles.formLabel} htmlFor="name">
              Name
            </label>
            <input
              className={styles.formInput}
              name="name"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g, Max"
            />
          </div>
          <div className={`${styles.formContainer} ${styles.formAge}`}>
            <label className={styles.formLabel} htmlFor="age">
              Age
            </label>
            <input
              className={styles.formInput}
              type="number"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
              required
              placeholder="e.g, 4"
            />
          </div>
          <div className={`${styles.formContainer} ${styles.formTargetMin}`}>
            <label className={styles.formLabel} htmlFor="targetMin">
              Target Min (KG)
            </label>
            <input
              className={styles.formInput}
              type="number"
              id="targetMin"
              name="targetMin"
              value={formData.targetMin}
              onChange={handleChange}
              required
              placeholder="e.g, 4.5"
            />
          </div>
          <div className={`${styles.formContainer} ${styles.formTargetMax}`}>
            <label className={styles.formLabel} htmlFor="targetMax">
              Target Max (KG)
            </label>
            <input
              className={styles.formInput}
              type="number"
              id="targetMax"
              name="targetMax"
              value={formData.targetMax}
              onChange={handleChange}
              required
              placeholder="e.g, 5.0"
            />
          </div>
          <div className={`${styles.formContainer} ${styles.formWeight}`}>
            <label className={styles.formLabel} htmlFor="weight">
              Current Weight
            </label>
            <input
              className={styles.formInput}
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
              placeholder="e.g, 4.4"
            />
          </div>
          <button className={`${styles.formSubmitBtn} ${styles.formBtn}`}>
            Add Cat
          </button>
          <button
            className={`${styles.formCancelBtn} ${styles.formBtn}`}
            onClick={closeCatForm}
          >
            Cancel
          </button>
        </form>
      </div>
    </section>
  );
}
