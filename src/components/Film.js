import styles from "./Film.module.css";
import Badge from "../ui/Badge";

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
      >
        <Badge vote={props.filmItem.vote_average}></Badge>
      </div>
      <h4>
        {props.filmItem.original_title} (
        {new Date(props.filmItem.release_date).getFullYear()})
      </h4>
    </div>
  );
}

export default Film;
