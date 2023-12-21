import { useEffect, useState } from "react";
import styles from "./App.module.css";
import FruitsList from "./components/UI/FruitList/FruitList";
import Form from "./components/UI/Form/Form";

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [fruits, setFruits] = useState([]);
  const openFormHandler = (setInputValue) => {
    setOpenForm(!openForm);
    if (setInputValue) {
      setInputValue("");
    }
  };
  useEffect(() => {
    const storageFruits = JSON.parse(localStorage.getItem("fruits"));
    if (storageFruits) {
      setFruits(storageFruits);
    }
  }, []);

  const deleteHandler = (id) => {
    setFruits((prevF) => {
      const value = prevF.filter((f) => f.id !== id);
      localStorage.setItem("fruits", JSON.stringify(value));
      return value;
    });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles["titles"]}>Fruits React App</h1>
      <FruitsList fruits={fruits} deleteHandler={deleteHandler} />
      {openForm && <Form setFruits={setFruits} openHandler={setOpenForm} />}

      <button
        onClick={openFormHandler.bind(null, false)}
        className={styles.btn}
      >
        {openForm ? "Cancel" : "New Fruit +"}
      </button>
    </div>
  );
}

export default App;
