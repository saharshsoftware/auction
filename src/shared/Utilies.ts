import { STORE_KEY } from "../zustandStore/store";

export const getDataFromLocalStorage = () => {
  const storedData = localStorage.getItem(STORE_KEY);
  return storedData ? JSON.parse(storedData) : null;
}

export const setTokenInLocalStorage = (data:any) => {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(STORE_KEY, stringifiedData);
}
