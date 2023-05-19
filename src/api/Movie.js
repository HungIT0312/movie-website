import http from "../helpers/http";
export const getTopRated = () => {
  return http.get("/movie/top_rated");
};
export const getPopular = () => {
  return http.get("/movie/popular");
};
export const getMovieById = (id) => {
  return http.get(`/movie/${id}`);
};

export const getDiscoverMovies = () => {
  return http.get("/discover/movie");
};
export const getUpcomingMovie = () => {
  return http.get("/movie/upcoming");
};
export const getSimilarMovie = (id) => {
  return http.get(`/movie/${id}/similar`);
};
export const getMovieTrailer = (id) => {
  return http.get(`/movie/${id}/videos`);
};
export const getCredits = (id) => {
  return http.get(`/movie/${id}/credits`);
};
export const getVideoMovie = (id) => {
  return http.get(`/movie/${id}/videos`);
};
