import { Link } from "react-router-dom";
import Breadcrumb from "./components/Breadcrumb";
import ResultCard from "./components/ResultCard";
import SearchBox from "./components/SearchBox";
import styles from "./styles/app.module.scss";

export default function App() {
  return (
    <div className={styles.App}>
      <SearchBox />
      <Breadcrumb />
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/expenses">Expenses</Link>
    </div>
  );
}

export function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
    </main>
  );
}

export function Invoices() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
    </main>
  );
}
