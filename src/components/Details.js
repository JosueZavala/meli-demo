import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productDetails } from "../services/searchService";
import styles from "../styles/details.module.scss";
import { formatPrice } from "../utils/functions";
import Breadcrumb from "./Breadcrumb";
const Details = () => {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [soldQuantity, setSoldQuantity] = useState(0);
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const searchItems = async () => {
    const { data } = await productDetails(id);
    const {
      data: { plain_text },
    } = await productDetails(id, "description");

    const {
      pictures,
      title: name,
      sold_quantity,
      condition: conditionStatus,
      price: priceARG,
      category_id,
    } = data;
    setImage(pictures[0].url);
    setTitle(name);
    setSoldQuantity(sold_quantity);
    setCondition(conditionStatus);
    setPrice(formatPrice(priceARG));
    setDescription(plain_text);
    setCategoryId(category_id);
  };

  const handleClick = (event) => {
    event.preventDefault();
    alert("Comprado");
  };

  useEffect(() => {
    searchItems();
  }, []);
  return (
    <>
      <Breadcrumb id={categoryId} />
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={image} alt="Test" />
          </div>
          <div className={styles.details}>
            <div className={styles.sells}>
              {condition} - {soldQuantity} vendidos
            </div>
            <div className={styles.name}>{title}</div>
            <div className={styles.price}>{price}</div>
            <div className={styles.buyButton}>
              <button className={styles.buy} onClick={handleClick}>
                Comprar
              </button>
            </div>
          </div>

          <div className={styles.description}>
            <div className={styles.title}>Descripción del producto</div>
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
