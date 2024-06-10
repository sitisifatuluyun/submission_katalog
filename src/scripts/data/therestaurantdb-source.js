import API_ENDPOINT from '../globals/api-endpoint';
 
class TheMovieDbSource {
  static async nowPlayingretaurant() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.results;
  }
 
  static async favoriterestaurant() {
    const response = await fetch(API_ENDPOINT.FAVORITE);
    const responseJson = await response.json();
    return responseJson.results;
  }
 
  static async detailrestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}
 
export default TheMovieDbSource;