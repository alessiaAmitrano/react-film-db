import styles from "./SearchBar.module.css";
import { useRef, useEffect } from "react";

function Searchbar(props) {
  const filmInputRef = useRef();

  function formSubmitHandler(event) {
    event.preventDefault();
    const query = filmInputRef.current.value;
    props.searchMovies(query);
  }

  useEffect(() => {
    filmInputRef.current.focus();
  });

  return (
    <div className={styles.searchbarContainer}>
      <form onSubmit={formSubmitHandler} className={styles.searchForm}>
        <input
          type="text"
          required
          id="film-title"
          ref={filmInputRef}
          placeholder="Search movie..."
        />
        <button type="submit" className={styles.submitBtn}>
          <svg viewBox="0 0 24 24" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
