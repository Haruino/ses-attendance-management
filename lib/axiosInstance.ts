import axios from "axios"

const apiClient = axios.create({
  baseURL: "http://localhost:3001", // mock用
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
})

export default apiClient
