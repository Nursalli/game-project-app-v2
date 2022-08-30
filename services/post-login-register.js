import axios from "axios";

const postLogin = async (data) => {
  try {
    const url = process.env.NEXT_PUBLIC_BASE_URL + "users/login";
    return await axios.post(url, data);
  } catch (error) {
    return error;
  }
};

const postRegister = async (data) => {
  try {
    const url = process.env.NEXT_PUBLIC_BASE_URL + "users/register";
    return await axios.post(url, data);
  } catch (error) {
    return error;
  }
};
export { postLogin, postRegister };
