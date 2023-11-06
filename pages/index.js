import styles from "../styles/Main.module.css";
import MapContainer from "../components/Map";

export default function Main() {
  const hint = "(describing the map)";

  return (
    <div>
      <div className={styles.name}>
        <a>NextJs GoogleMapAPI</a>
      </div>
      <div className={styles.bar}>
        <a>(some text...)</a>
      </div>
      <div className={styles.container}>
        <title>NextJs GoogleMapAPI</title>
        <MapContainer />
        <div className={styles.hint}>
          <a>{hint}</a>
        </div>
      </div>
    </div>
  );
}
