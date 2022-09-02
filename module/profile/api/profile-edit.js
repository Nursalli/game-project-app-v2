import fetchApi from "../../../utils/fetchApi";
import authUser from "../../../utils/authUser";

const getBio = async () => {
  let response = await fetchApi({
    uriPath: "/users/bio/" + (await authUser()),
    method: "GET",
    headers: {
      Authorization: true,
    },
  });
  return response;
};

const postEditProfile = async (data) => {
  let response = await fetchApi({
    uriPath: "/users/edit-profile",
    method: "POST",
    headers: {
      Authorization: true,
    },
    data: data,
  });
  return response;
};

const postUpdateProfilePic = async (data) => {
  let response = await fetchApi({
    uriPath: "/users/update-profile-pic",
    method: "POST",
    headers: {
      Authorization: true,
    },
    data: data,
  });
  return response;
};
export { getBio, postEditProfile, postUpdateProfilePic };
