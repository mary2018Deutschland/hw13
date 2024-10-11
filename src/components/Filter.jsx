import styles from "../styles/Filter.module.css";
import { useState } from "react";

function Filter({ onFilterChange }) {
  const [filter, setFilter] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value; // Обновляем состояние inputValue при вводе текста
    setFilter(value);
    onFilterChange(value);
  };

  return (
    <div className={styles.divInput}>
      <input
        type="text"
        placeholder="Введите имя пользователя"
        value={filter}
        onChange={handleInputChange}
        className={styles.styleInput}
      />
    </div>
  );
}

export default Filter;
