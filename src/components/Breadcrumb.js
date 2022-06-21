import { useEffect, useState } from "react";
import { getCategoriesById } from "../services/searchService";
import styles from "../styles/breadcrumb.module.scss";
const Breadcrumb = ({ id }) => {
  const [breadcrumb, setBreadcrumb] = useState(
    "Electrónica, Audio y Video > Ipod > Reproductores > iPod touch > 32 GB"
  );
  const getCategories = async () => {
    const {
      data: { path_from_root },
    } = await getCategoriesById(id);

    const path = path_from_root.map((path) => path.name);
    const _breadcrumb = path.join(` > `);

    setBreadcrumb(_breadcrumb);
  };

  useEffect(() => {
    if (!id) return;
    getCategories();
  }, [id]);
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>{breadcrumb}</div>
    </div>
  );
};

export default Breadcrumb;
