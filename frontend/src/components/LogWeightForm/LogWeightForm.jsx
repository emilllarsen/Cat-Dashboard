import styles from "./LogWeightForm.module.css";
import sharedStyles from "@/Styles/sharedStylesForTitleBtn.module.css";
import exitIcon from "@/assets/icons/exit.svg";
import { useGetCats } from "@/hooks/cats";
import { useState } from "react";
import { updateCat } from "@/service/cats/crudCats.js";


export default function LogWeightForm({ closeWeightForm }) {

  const { cats } = useGetCats();
  const [formData, setFormData] = useState({
    weight: ""
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(() => ({ [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await updateCat(currentIndex, {
        ...formData,
        weight: Number(formData.weight)
      });
      setFormData({
        weight: ""
      }); // reset the formdata
      setSuccess(true);
    } catch (err) {
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
          <h1>Log a Weight</h1>
          <button
            className={sharedStyles.closeFormBtn}
            onClick={closeWeightForm}
          >
            <img
              className={sharedStyles.closeFormIcon}
              src={exitIcon}
              alt="Exit icon"
            />
          </button>
        </div>
        <div className={styles.controlContainer}>
          {cats?.map((cat) => {
            return (
              <div
                className={styles.controlItem}
                onClick={() => setCurrentIndex(cat._id)}
                key={cat._id}
              >
                {currentIndex === cat._id && (
                  <div className={styles.controlItemBg}></div>
                )}
                <div className={currentIndex === cat._id ? `${styles.activeCat}`: `${styles.notActiveCat}`}>{cat.name}</div>
              </div>
            );
          })}
        </div>
        <form onSubmit={handleSubmit}>
          <div className={`${sharedStyles.formContainer}`}>
          <label className={sharedStyles.formLabel} htmlFor="weight">Weight</label>
          <input
          className={sharedStyles.formInput}
            name="weight"
            type="number"
            placeholder="e.g, 4.2"
            value={formData.weight}
            onChange={handleChange}
          />

          </div>
          <button className={styles.formSubmitBtn}>Log weight</button>
        </form>
        {error && (
          <p className={`${sharedStyles.errorMsg} ${styles.statusMsg}`}>
            {error}
          </p>
        )}
        {success && (
          <p className={`${sharedStyles.submitSuccessMsg} ${styles.statusMsg}`}>
            Weight Updated! Have a nice day :-)
          </p>
        )}
      </div>
    </section>
  );
}
