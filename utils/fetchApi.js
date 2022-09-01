import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchApi = async (
  options = {
    uriPath: "",
    method: "",
    data: {},
    headers: { Authorization: false },
  }
) => {
  let headers = {};
  if (options.headers?.Authorization) {
    headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
  }
  try {
    const response = await axios({
      url: options.uriPath,
      method: options.method,
      data: options.data,
      headers,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default fetchApi;
