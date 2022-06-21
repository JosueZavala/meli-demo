import { Route, Routes, useNavigate } from "react-router-dom";
import Details from "./components/Details";
import ResultCard from "./components/ResultCard";
import SearchBox from "./components/SearchBox";
import styles from "./styles/app.module.scss";

import { useForm, FormProvider } from "react-hook-form";
import Results from "./components/Results";

export default function App() {
  const navigate = useNavigate();
  const methods = useForm();
  const onSubmit = (data) => {
    const { searchInput } = data;
    if (searchInput) {
      navigate(`/items?search=${searchInput}`);
    }
  };
  return (
    <div className={styles.App}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <SearchBox />
          <Routes>
            <Route index element={<></>} />
            <Route path="items/" element={<Results />} />
            <Route path="items/:id" element={<Details />} />
          </Routes>
        </form>
      </FormProvider>

      {/* 
      <Details /> */}
      {/* <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard /> */}
      {/* <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/expenses">Expenses</Link> */}
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
