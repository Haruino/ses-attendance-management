import apiClient from "./axiosInstance"

export const getUser = async () => {
  const { data } = await apiClient.get("/user")
  return data
}
