import styles from "../styles/breadcrumb.module.scss";
const Breadcrumb = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        Electrónica, Audio y Video &gt; Ipod &gt; Reproductores &gt; iPod touch
        &gt; 32 GB
      </div>
    </div>
  );
};

export default Breadcrumb;
