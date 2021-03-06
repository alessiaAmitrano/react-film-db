import styles from "./Results.module.css";
import Film from "../components/Film";

function Results(props) {
  return (
    <div className={styles.results}>
      <h2> Results for "{props.queryText}"</h2>
      <div className={styles.filmListWrapper}>
        {props.filmItems.map((film) => {
          console.log("film", film);
          return <Film key={film.id} filmItem={film}></Film>;
        })}
      </div>
    </div>
  );
}

export default Results;
