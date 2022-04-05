import React, { useState } from "react";
import SearchList from "./SearchList";
import styles from "../styles/Home.module.scss";

const Search = ({ data }) => {
  const [searchField, setSearchField] = useState(" ");
  const filteredUnis = data.filter((uni) => {
    return (
      uni.INSTNM.toLowerCase().includes(searchField.toLowerCase()) ||
      uni.CITY.toLowerCase().includes(searchField.toLowerCase())
    );
  });
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <div className={styles.uni_section}>
      <input
        onChange={handleChange}
        className={styles.search}
        placeholder={"Search..."}
      ></input>
      <div className={styles.grid}>
        {" "}
        <SearchList filteredUnis={filteredUnis} />
      </div>
    </div>
  );
};

export default Search;
