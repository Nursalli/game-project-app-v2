import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useResetPasswordService } from "./reset-password";
import { setIsLoading, setErrMsg } from "../reducer/app.reducer";
import { useDispatch, useSelector } from "react-redux";

export const useFirebaseService = () => {
  const dispatch = useDispatch();
  const { errMsg } = useSelector((state) => state.app);
  const { resetPassword } = useResetPasswordService();
  const registerFirebase = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const sendResetPasswordFirebase = (email) => {
    dispatch(setIsLoading(true));
    sendPasswordResetEmail(auth, email)
      .then(() => {
        dispatch(setIsLoading(false));
        Swal.fire({
          icon: "success",
          title: "Reset Password",
          html: "Password reset request was sent successfully. <br> please check your email to reset your password",
          timer: 3000,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(setIsLoading(false));
        dispatch(setErrMsg(errorMessage || "something wrong!"));
        Swal.fire({
          icon: "error",
          title: "Reset Password",
          text: "Request password reset failed for email " + email,
          timer: 2500,
        });
      });
  };

  const handleResetPassword = (password, actionCode) => {
    dispatch(setIsLoading(true));
    verifyPasswordResetCode(auth, actionCode)
      .then((email) => {
        confirmPasswordReset(auth, actionCode, password)
          .then((resp) => {
            resetPassword(email, password);
          })
          .catch((error) => {
            const errorMessage = "Reset password failed";
            dispatch(setIsLoading(false));
            dispatch(setErrMsg(errorMessage || "something wrong!"));
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: errorMessage,
            });
          });
      })
      .catch((error) => {
        const errorMessage =
          "Either the link has already expired or this link was already used to change the password";

        dispatch(setIsLoading(false));
        dispatch(setErrMsg(errorMessage || "something wrong!"));
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

  return { registerFirebase, sendResetPasswordFirebase, handleResetPassword };
};
