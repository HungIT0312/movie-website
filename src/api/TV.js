import http from "../helpers/http";
export const getTVPopular = () => {
  return http.get("tv/popular");
};
export const getTVDetail = (series_id) => {
  return http.get(`/tv/${series_id}`);
};
export const getTVCredits = (series_id) => {
  return http.get(`/tv/${series_id}/credits`);
};
export const getTVSimilar = (series_id) => {
  return http.get(`/tv/${series_id}/similar`);
};
export const getVideoTV = (series_id) => {
  return http.get(`/tv/${series_id}/videos`);
};
