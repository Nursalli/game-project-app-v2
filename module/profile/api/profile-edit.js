import fetchApi from "../../../utils/fetchApi";
import authUser from "../../../utils/authUser";

const getBio = async (id) => {
  let response = await fetchApi({
    uriPath: "/users/bio/" + id,
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
