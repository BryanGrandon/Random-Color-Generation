import React from "react";
import styles from "./title.module.css";

function Title({ text }) {
  return <h2 className={styles.title}>{text}</h2>;
}

export { Title };
