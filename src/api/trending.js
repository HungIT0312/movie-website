import http from "../helpers/http";
export const getTrending = () => {
  return http.get("/trending/all/week");
};
