import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/therestaurantdb-source';
import { createrestaurantItemTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
     <div id="restaurant" class="restaurant"></div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheMovieDbSource.detailrestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createrestaurantDetailTemplate(restaurant);
  },
};
 
export default Detail;