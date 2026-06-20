import axios from "axios";
import type { RegisterForm } from "./pages/Register";
import type { SignInForm } from "./pages/SignIn";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const register = async (data: RegisterForm) => {
  const res = await axios.post(`${API_BASE_URL}/api/users/register`, data);
  return res.data;
};

export const signin = async (data: SignInForm) => {
  const res = await axios.post(`${API_BASE_URL}/api/users/signin`, data);
  return res.data;
}