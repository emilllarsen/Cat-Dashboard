import { useState } from "react";
import { createCat } from "@/service/cats/crudCats";
import styles from "./AddCatForm.module.css";
import sharedStyles from '@/Styles/sharedStylesForTitleBtn.module.css';
import exitIcon from "@/assets/icons/exit.svg";

export default function AddCatForm({ closeCatForm }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    targetMin: "",
    targetMax: "",
    weight: ""
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
    setError(null);

    try {
      await createCat({
        ...formData,
        age: Number(formData.age),
        targetMin: Number(formData.targetMin), // converts age, targetMin - max and weight from string to number
        targetMax: Number(formData.targetMax),
        weight: Number(formData.weight)
      });
      setSuccess(true);
      setFormData({
        name: "",
        age: "",
        targetMin: "",
        targetMax: "",
        weight: ""
      });  // Set the input fields to empty after submitting.

    } catch (err) {
      console.log(err);
      setError(err.message);

    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={sharedStyles.btnWrapper}>
      <div className={sharedStyles.btnContainer}>
        <div className={sharedStyles.formHeader}>
          {loading && <p className={sharedStyles.loadingMsg}>Loading...</p>}
          <h1>New Cat</h1>
          <button className={sharedStyles.closeFormBtn} onClick={closeCatForm}>
            <img
              className={sharedStyles.closeFormIcon}
              src={exitIcon}
              alt="Exit icon"
            />
          </button>
        </div>

        <form className={styles.formGrid} onSubmit={handleFormSubmit}>
          <div className={`${sharedStyles.formContainer} ${styles.formName}`}>
            <label className={sharedStyles.formLabel} htmlFor="name">
              Name
            </label>
            <input
              className={sharedStyles.formInput}
              name="name"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g, Max"
            />
          </div>
          <div className={`${sharedStyles.formContainer} ${styles.formAge}`}>
            <label className={sharedStyles.formLabel} htmlFor="age">
              Age
            </label>
            <input
              className={sharedStyles.formInput}
              type="number"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
              required
              placeholder="e.g, 4"
            />
          </div>
          <div className={`${sharedStyles.formContainer} ${styles.formTargetMin}`}>
            <label className={sharedStyles.formLabel} htmlFor="targetMin">
              Target Min (KG)
            </label>
            <input
              className={sharedStyles.formInput}
              type="number"
              id="targetMin"
              name="targetMin"
              value={formData.targetMin}
              onChange={handleChange}
              required
              placeholder="e.g, 4.5"
            />
          </div>
          <div className={`${sharedStyles.formContainer} ${styles.formTargetMax}`}>
            <label className={sharedStyles.formLabel} htmlFor="targetMax">
              Target Max (KG)
            </label>
            <input
              className={sharedStyles.formInput}
              type="number"
              id="targetMax"
              name="targetMax"
              value={formData.targetMax}
              onChange={handleChange}
              required
              placeholder="e.g, 5.0"
            />
          </div>
          <div className={`${sharedStyles.formContainer} ${styles.formWeight}`}>
            <label className={sharedStyles.formLabel} htmlFor="weight">
              Current Weight
            </label>
            <input
              className={sharedStyles.formInput}
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
            {success ? "Adding New Cat.." : "Add New Cat"}
          </button>
          <button
            className={`${styles.formCancelBtn} ${styles.formBtn}`}
            onClick={closeCatForm}
          >
            Cancel
          </button>
          {error && <p className={styles.errorMsg}>{error}</p>}
          {success && <p className={styles.submitSuccessMsg}>You have added a new cat, Congratulations :-)</p>}
        </form>
      </div>
    </section>
  );
}
