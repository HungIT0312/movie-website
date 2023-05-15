import http from "../helpers/http";
export const searchMovie = (params) => {
  return http.get("/search/movie", params);
};
export const getMoviesByName = (query) => {
  const params = { query };
  return http.get("/search/movie", { params });
};
