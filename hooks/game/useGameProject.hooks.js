import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setIsLoading, setIsError, setErrMsg } from "../../reducer/app.reducer";
import { setStateToken, setStateId } from "../../reducer/user.reducer";

import { postLogin, postRegister } from "../../services/post-login-register";
import { useState } from "react";
import Swal from "sweetalert2";

import { useFirebaseService } from "../../services/firebase";

export const useGameProject = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { isLoading, isError, errMsg } = useSelector((state) => state.app);
  const { registerFirebase } = useFirebaseService();

  const handleLogin = async (e) => {
    dispatch(setIsLoading(true));
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const result = await postLogin(data);
    if (result.data?.success) {
      dispatch(setIsLoading(false));
      Swal.fire({
        icon: "success",
        title: "Login Berhasil",
        timer: 2500,
      });
      dispatch(setStateToken(result.data?.data?.token));
      dispatch(setStateId(result.data?.data?.userId));
      localStorage.setItem("token", result.data?.data?.token);
      router.push("/");
    } else {
      dispatch(setIsLoading(false));
      dispatch(setErrMsg(result.response?.data?.message || "something wrong!"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errMsg,
      });
    }
  };

  const handleRegister = async (e) => {
    dispatch(setIsLoading(true));
    e.preventDefault();
    const data = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      confirmPassword: confirmPassword,
    };
    const result = await postRegister(data);
    if (result.data?.success) {
      registerFirebase(email, password);
      dispatch(setIsLoading(false));
      Swal.fire({
        icon: "success",
        title: "Register Berhasil",
        timer: 2500,
      });
      router.push("/login");
    } else {
      dispatch(setIsLoading(false));
      dispatch(setErrMsg(result.response?.data?.message || "something wrong!"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errMsg,
      });
    }
  };

  return {
    isLoading,
    handleLogin,
    handleRegister,
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    confirmPassword,
    setConfirmPassword,
  };
};
