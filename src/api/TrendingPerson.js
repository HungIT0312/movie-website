import http from "../helpers/http";

export const getTrendingPeople = () => {
  return http.get("/trending/person/week");
};
