import styles from "./FruitList.module.css";

const FruitList = (props) => {
  return (
    <ul className={styles.list}>
      {props?.fruits.map((f) => (
        <li key={f.id} onClick={() => props.deleteHandler(f.id)}>
          {f.name} {f.price}
        </li>
      ))}
    </ul>
  );
};

export default FruitList;
