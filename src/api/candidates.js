import axios from "axios";

const API_URL = "https://60d5a2c2943aa60017768b01.mockapi.io/candidate";

export const getCandidates = () => axios.get(API_URL);
export const createCandidate = (data) => axios.post(API_URL, data);
export const updateCandidate = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);
export const deleteCandidate = (id) => axios.delete(`${API_URL}/${id}`);
