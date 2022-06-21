import axios from "axios";
import { getApiUrl } from "./api";

const getInstance = (config) => {
  return axios.create({
    baseURL: "/",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      "accept-language": "en",
    },
    ...config,
  });
};
export const httpClient = getInstance({
  baseURL: getApiUrl(),
});
