import Swal from "sweetalert2";
import fetchApi from "../utils/fetchApi";
import { setIsLoading, setErrMsg } from "../reducer/app.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export const useResetPasswordService = () => {
  const router = useRouter();
  const { errMsg } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const postResetPassword = async (email, password) => {
    let response = await fetchApi({
      uriPath: "users/reset-password",
      method: "post",
      data: {
        email: email,
        password: password,
      },
    });
    return response;
  };

  const resetPassword = async (email, password) => {
    dispatch(setIsLoading(true));

    const response = await postResetPassword(email, password);
    if (response.success === true) {
      dispatch(setIsLoading(false));
      Swal.fire({
        icon: "success",
        title: "Reset password successfully",
        timer: 2500,
      });
      router.push("/login");
    } else {
      dispatch(setIsLoading(false));
      dispatch(setErrMsg(response?.message || "something wrong!"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response?.message,
      });
    }
  };

  return {
    resetPassword,
  };
};
