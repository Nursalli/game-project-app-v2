import fetchApi from "../../../utils/fetchApi";

const getBagdesPoints = async (id) => {
  let response = await fetchApi({
    uriPath: "/users/badges-points/" + id,
    method: "GET",
    headers: {
      Authorization: true,
    },
  });
  return response;
};

const getMyHistories = async (id) => {
  let response = await fetchApi({
    uriPath: "/users/histories/" + parseInt(id),
    method: "GET",
    headers: {
      Authorization: true,
    },
  });
  return response;
};

const getMyGames = async (id) => {
  let response = await fetchApi({
    uriPath: "/users/my-games",
    method: "POST",
    headers: {
      Authorization: true,
    },
    data: { userId: parseInt(id) },
  });
  return response;
};

export { getBagdesPoints, getMyHistories, getMyGames };
