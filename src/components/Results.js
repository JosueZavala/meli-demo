import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchByQuery } from "../services/searchService";
import { formatPrice } from "../utils/functions";
import Breadcrumb from "./Breadcrumb";
import ResultCard from "./ResultCard";

const Results = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resultCards, setResulCards] = useState(<></>);
  const [categoryId, setCategoryId] = useState();
  const search = searchParams.get("search");

  const searchItems = async () => {
    const { results } = await searchByQuery(search);
    createResultCards(results);
  };

  const createResultCards = (results) => {
    const sliceResult = results.slice(0, 4);
    setCategoryId(sliceResult[0].category_id);
    const _resultCards = sliceResult.map((result) => {
      return (
        <ResultCard
          key={`resultCard_${result.id}`}
          id={result.id}
          img={result.thumbnail}
          price={formatPrice(result.price)}
          title={result.title}
          shortDescription={`Completo Unico`}
          location={result.address.state_name}
        />
      );
    });
    setResulCards(_resultCards);
  };

  useEffect(() => {
    searchItems();
  }, [search]);
  return (
    <>
      <Breadcrumb id={categoryId} />
      {resultCards}
    </>
  );
};

export default Results;
