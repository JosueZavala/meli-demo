import { Route, Routes, useNavigate } from "react-router-dom";
import Details from "./components/Details";
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
    </div>
  );
}
