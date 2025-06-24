import API from "./api";

export const login = (credentials) => API.post("/login", credentials).then(res => res.data);
export const login = async (credentials) => {
  const res = await API.post("/login", credentials);
  return res.data;
};

export const register = async (data) => {
  const res = await API.post("/register", data);
  return res.data;
};
