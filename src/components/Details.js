import styles from "../styles/details.module.scss";
const Details = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src={
              "https://http2.mlstatic.com/D_935185-MLA46504064329_062021-O.jpg"
            }
            alt="Test"
          />
        </div>
        <div className={styles.details}>
          <div className={styles.sells}>Nuevo - 234 vendidos</div>
          <div className={styles.name}>
            Deco Reverse <br /> Sombrero Oxford
          </div>
          <div className={styles.price}>$1.980</div>
          <div className={styles.buyButton}>
            <button className={styles.buy}>Comprar</button>
          </div>
        </div>

        <div className={styles.description}>
          <div className={styles.title}>Descripción del producto</div>
          The Scarpe di Bianco Italian footwear collection was founded by Bill
          White in 2009. Di Bianco offers classic handmade men's shoes with a
          modern twist. The combination of timeless models and details with
          conteporary colors and styling, results in decidedly current, yet
          elegant models. The aim of the Scarpe di Bianco company is to offer
          men a custom shoe buying experience through a multitude of models,
          lasts, soles, leathers, and color options.
        </div>
      </div>
    </div>
  );
};

export default Details;
