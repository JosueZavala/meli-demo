import { useNavigate } from "react-router-dom";
import styles from "../styles/resultCard.module.scss";
const ResultCard = ({ id, img, price, title, shortDescription, location }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardContainer}>
          <div className={styles.image}>
            <img
              src={img}
              alt="Test"
              width="180"
              height="180"
              onClick={handleClick}
            />
          </div>
          <div className={styles.resultDescription}>
            <div className={styles.price}>{price}</div>
            <div className={styles.title} onClick={handleClick}>
              {title}
            </div>
            <div className={styles.shortDescription}>{shortDescription}</div>
          </div>
          <div className={styles.location}>{location}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
