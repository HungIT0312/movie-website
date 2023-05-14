import http from "../helpers/http";
export const getTVPopular = () => {
  return http.get("tv/popular");
};
