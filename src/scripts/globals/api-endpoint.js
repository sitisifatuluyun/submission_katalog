import CONFIG from './config';
 
const API_ENDPOINT = {
  NOW_PLAYING: `${CONFIG.BASE_URL}Restaurant/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  FAVORITE: `${CONFIG.BASE_URL}Restaurant/favorite?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  DETAIL: (id) => `${CONFIG.BASE_URL}Restaurant/${id}?api_key=${CONFIG.KEY}`,
};
 
export default API_ENDPOINT;