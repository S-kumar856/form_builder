import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const getForms = async () => {
  const response = await axios.get(`${apiUrl}/api/forms`);
  return response.data;
};

export const createForm = async (form) => {
  const response = await axios.post(`${apiUrl}/api/forms`, form);
  return response.data;
};

export const updateForm = async (id, form) => {
  const response = await axios.put(`${apiUrl}/api/forms/${id}`, form);
  return response.data;
};

export const deleteForm = async (id) => {
  const response = await axios.delete(`${apiUrl}/api/forms/${id}`);
  return response.data;
};

export const getFormById = async (id) => {
  const response = await axios.get(`${apiUrl}/api/forms/${id}`);
  return response.data;
};

export const submitResponse = async (responseData) => {
  const response = await axios.post(`${apiUrl}/api/responses`, responseData);
  return response.data;
};