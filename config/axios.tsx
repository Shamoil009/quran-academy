import axios from "axios";
import { QA_TOKEN } from "@/utils/constants";

const axiosInstance = () => {
  const token = localStorage.getItem(QA_TOKEN);

  //setting the enviroment
  let url = "";
  if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
    url = process.env.NEXT_PUBLIC_LOCAL_BASE_URL || "";
  } else if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
    // url = "http://backend.aqonlinequranacademy.com";
    url = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL || "";
  }

  const enviroment = `${url}/api`;
  return axios.create({
    baseURL: enviroment,
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  });
};

export default axiosInstance;
