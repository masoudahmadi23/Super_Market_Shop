import axios from "axios";

const BASE_URL = "https://shop-server-red.vercel.app/";

const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}products`);
  return response.data;
};

const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}categories`);
  return response.data;
};

const getComments = async (productId) => {
  const response = await axios.get(
    `${BASE_URL}comments?productId=${productId}`
  );
  return response.data;
};

const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}users`);
  return response.data;
};

export { getProducts, getCategories, getComments, getUsers };
