import { useRouter } from "next/router";
import styles from "../styles/404.module.css";

export default function Error() {
    const router = useRouter();
    const handleBackClick = () => {
        router.push("/");
      };

  return (
  <div className={styles.container}>
      <title>NextJs GoogleMapAPI</title>
      <div className={styles.name}>
            <a>NextJs GoogleMapAPI</a>
        </div>
        <div className={styles.alert}>
            <a>This is a page that doesn't exist!</a>
        </div>
        <div className={styles.back}>
            <a  onClick={handleBackClick}>Return</a>
        </div>
    </div>
  );
}