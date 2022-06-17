import styles from "../styles/resultCard.module.scss";
const ResultCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardContainer}>
          <div className={styles.image}>
            <img
              src={
                "https://http2.mlstatic.com/D_935185-MLA46504064329_062021-I.jpg"
              }
              alt="Girl in a jacket"
              width="180"
              height="180"
            />
          </div>
          <div className={styles.resultDescription}>
            <div className={styles.price}>$ 1.980</div>
            <div className={styles.desc1}>
              Apple Ipod Touch 5g 16gb Negro Igual A Nuevo
            </div>
            <div className={styles.desc2}>Completo Unico</div>
          </div>
          <div className={styles.location}>
            Capital Federal
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
