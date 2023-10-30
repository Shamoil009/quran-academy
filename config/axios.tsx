import axios from "axios";
import { QA_TOKEN } from "@/utils/constants";

const axiosInstance = () => {
  
  const token = localStorage.getItem(QA_TOKEN);

  //setting the enviroment
  let url = "";
  if (process.env.NEXT_PUBLIC_NODE_ENV === "local") {
    url = process.env.NEXT_PUBLIC_LOCAL_BASE_URL || "";
  } else if (process.env.NEXT_PUBLIC_NODE_ENV === "onmachine") {
    url = process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL || "";
  } else if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
    url = process.env.NEXT_PUBLIC_TEST_API_URL || "";
  } else if (process.env.NEXT_PUBLIC_NODE_ENV === "staging") {
    url = "http://143.244.191.170";
  } else if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
    // url = "http://backend.aqonlinequranacademy.com";
    url = "https://backend.aqonlinequranacademy.com";

  }

  // console.log(url);
  const enviroment = `${url}/api`;
  return axios.create({
    baseURL: enviroment,
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  });
};

export default axiosInstance;
