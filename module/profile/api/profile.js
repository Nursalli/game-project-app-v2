import fetchApi from "../../../utils/fetchApi";
import authUser from "../../../utils/authUser";

const getBagdesPoints = async () => {
  let response = await fetchApi({
    uriPath: "/users/badges-points/" + (await authUser()),
    method: "GET",
    headers: {
      Authorization: true,
    },
  });
  return response;
};

const getMyHistories = async () => {
  let response = await fetchApi({
    uriPath: "/users/my-histories",
    method: "GET",
    headers: {
      Authorization: true,
    },
  });
  return response;
};

const getMyGames = async () => {
  let response = await fetchApi({
    uriPath: "/users/my-games",
    method: "GET",
    headers: {
      Authorization: true,
    },
  });
  return response;
};

export { getBagdesPoints, getMyHistories, getMyGames };
