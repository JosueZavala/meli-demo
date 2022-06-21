import { httpClient } from "../utils/https";

export const searchByQuery = async (query) => {
  const url = `/sites/MLA/search`;
  const params = {};
  params["q"] = `:${query}`;

  const response = await httpClient.get(url, { params });
  return response.data;
};

export const productDetails = async (id, details = "") => {
  let url = `/items/${id}`;
  if (details) {
    url = url.concat(`/${details}`);
  }
  const response = await httpClient.get(url, {});
  return response;
};

export const getCategoriesById = async (id) => {
  const url = `/categories/${id}`;
  const response = await httpClient.get(url, {});
  return response;
};
