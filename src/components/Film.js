import { useEffect } from "react";
import styles from "./Film.module.css";

const HTTP_IMG_URL = "https://image.tmdb.org/t/p/w500";

function Film(props) {
  const posterUrl = {
    backgroundImage: `url('${HTTP_IMG_URL}${props.filmItem.poster_path}')`,
  };
  return (
    <div className={styles.filmItem}>
      <div
        className={styles.filmPoster}
        style={posterUrl}
        alt={props.filmItem.original_title}
      />
      <h3>
        {props.filmItem.original_title} (
        {new Date(props.filmItem.release_date).getFullYear()})
      </h3>
    </div>
  );
}

export default Film;
