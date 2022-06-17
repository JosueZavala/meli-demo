import { FaSearch } from "react-icons/fa";
import styles from "../styles/searchBox.module.scss";

const SearchBox = () => {
  return (
    <div className={styles.searchBoxContainer}>
      <div className={styles.searchBox}>
        <div className={styles.logo} />
        <div>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            className={styles.searchInput}
          />
        </div>
        <button type="button" className={styles.searchButton}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
