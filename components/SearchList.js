// src/components/SearchList.js

import React from "react";
import styles from "../styles/Home.module.scss";

function SearchList({ filteredUnis }) {
  const filtered = filteredUnis.map((uni) => (
    <div key={uni.UNITID} className={styles.card}>
      <a href={"https://" + uni.INSTURL}>
        <p className={styles.uni_location}>
          {uni.CITY} · {uni.STABBR}
        </p>
        <h2 className={styles.uni_name}>{uni.INSTNM}</h2>
        <p className={styles.uni_url}>{uni.INSTURL}</p>
      </a>
    </div>
  ));
  return <>{filtered}</>;
}

export default SearchList;
