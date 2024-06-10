import CONFIG from '../../globals/config';
 
const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="Restaurant__title">${Restaurant.title}</h2>
  <img class="Restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + Restaurant.poster_path}" alt="${Restaurant.title}" />
  <div class="Restaurant__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${Restaurant.tagline}</p>
    <h4>Release Date</h4>
    <p>${Restaurant.release_date}</p>
    <h4>Duration</h4>
    <p>${Restaurant.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${Restaurant.vote_average}</p>
  </div>
  <div class="Restaurant__overview">
    <h3>Overview</h3>
    <p>${Restaurant.overview}</p>
  </div>
`;
 
const createRestaurantItemTemplate = (Restaurant) => `
  <div class="Restaurant-item">
    <div class="Restaurant-item__header">
      <img class="Restaurant-item__header__poster" alt="${Restaurant.title}"
           src="${Restaurant.backdrop_path ? CONFIG.BASE_IMAGE_URL + Restaurant.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="Restaurant-item__header__rating">
        <p>⭐️<span class="Restaurant-item__header__rating__score">${Restaurant.vote_average}</span></p>
      </div>
    </div>
    <div class="Restaurant-item__content">
      <h3><a href="/#/detail/${Restaurant.id}">${Restaurant.title}</a></h3>
      <p>${Restaurant.overview}</p>
    </div>
  </div>
`;
 
export { createRestaurantItemTemplate, createRestaurantDetailTemplate };