import axios from 'axios';

const API = axios.create({
  baseURL: "https://api.example.com",
});

export const getLiveMatches = () => API.get("/live-matches");