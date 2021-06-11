import styles from "./Badge.module.css";

function Badge(props) {
  return (
    <div className={styles.badge}>
      <div className={styles.wrapper}>
        <span>{props.vote}</span>
      </div>
    </div>
  );
}

export default Badge;
