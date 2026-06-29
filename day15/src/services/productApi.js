const BASE_URL = "https://dummyjson.com/products";

export const getProducts = async (limit = 10, skip = 0) => {
  const response = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
  return await response.json();
};

export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return await response.json();
};