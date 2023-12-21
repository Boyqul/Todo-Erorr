import React, { useState } from "react";
import styles from "./Form.module.css";

export const Form = (props) => {
  const [formState, setFromState] = useState({
    name: "",
    price: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.setFruits((fruits) => {});

    props.openHandler((prevV) => !prevV);
  };

  const inputsHandler = (e) => {
    if (e.target.name === "fruit") {
      setFromState((obj) => ({ ...obj, name: e.target.value }));
    }
    if (e.target.name === "price") {
      setFromState((obj) => ({ ...obj, price: e.target.value }));
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        type="text"
        placeholder="Fruit"
        // onChange={changeInputHandler}
        onChange={inputsHandler}
        // value={changeInputValue}
        value={formState.name}
        name="fruit"
      />
      <input
        type="text"
        placeholder="Price"
        name="price"
        // onChange={changePriceHandler}
        onChange={inputsHandler}
        // value={changePriceInput}
        value={formState.price}
      />

      <button type="submit" className={styles.btn}>
        Save
      </button>
    </form>
  );
};
