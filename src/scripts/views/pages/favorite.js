import TheMovieDbSource from '../../data/therestaurantdb-source';
import { createrestaurantItemTemplate } from '../templates/template-creator';

const favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restaurant</h2>
        <div id="Restaurant" class="Restaurant">
        </div>
      </div>
    `;
  },
 
  async afterRender() {
    const restaurant = await TheMovieDbSource.nowPlayingrestaurant();
        const restaurantContainer = document.querySelector('#restaurant');
        restaurant.forEach((restaurant) => {
          restaurantContainer.innerHTML += createrestaurantItemTemplate(restaurant);
        });
  },
};
 
export default favorite;