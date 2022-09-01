import { useDispatch, useSelector } from "react-redux";
import {
  getBio,
  postEditProfile,
  postUpdateProfilePic,
} from "../api/profile-edit";
import {
  setIsLoading,
  setIsError,
  setErrMsg,
} from "../../../../reducer/app.reducer";
import Swal from "sweetalert2";
import { setUser, setProfilePic } from "../reducer/profile-edit.reducer";

import { storage } from "../../../../utils/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const useProfileEditService = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profileEdit);

  const handleResponse = async (response) => {
    if (response.success === true) {
      dispatch(setIsLoading(false));
      Swal.fire({
        icon: "success",
        title: response.message,
        timer: 2500,
      });
    } else {
      dispatch(setIsLoading(false));
      dispatch(setIsError(true));
      dispatch(setErrMsg(response?.details || "something wrong!"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response?.message || "something wrong!",
      });
    }
  };

  const handleUpload = async (file) => {
    dispatch(setIsLoading(true));
    if (!file) {
      console.log(file);
      dispatch(setIsLoading(false));
      return "";
    } else {
      const storageRef = ref(
        storage,
        `/profile-picture/${Date.now()}-${file.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (err) => {
          console.log(err);
          return "";
        },
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            const profilePictureUrl = url;
            if (profilePictureUrl !== undefined || profilePictureUrl !== "") {
              dispatch(setProfilePic(profilePictureUrl));
              const response = await postUpdateProfilePic({
                profilePic: profilePictureUrl,
              });
              await handleResponse(response);
            }
            return profilePictureUrl;
          });
        }
      );
    }
  };

  const handleGetBio = async () => {
    const response = await getBio();
    if (response.success === true) {
      dispatch(setUser(response.data));
    }
  };

  const handlePostEditProfile = async (file) => {
    dispatch(setIsLoading(true));
    const response = await postEditProfile(user);
    await handleResponse(response);
  };

  return {
    handleUpload,
    handleGetBio,
    handlePostEditProfile,
  };
};
