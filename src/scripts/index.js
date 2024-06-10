import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';

const menu = document.querySelector('.header__menu'); // Memilih tombol hamburger dengan kelas header__menu
const hero = document.querySelector('.hero-image');
const main = document.querySelector('main'); // Memilih elemen main
const drawer = document.querySelector('#drawer'); // Memilih elemen navigasi dengan id drawer

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
});

// Untuk Halaman Utama (Daftar Restoran)

// Mengambil data restoran dari API
fetch('https://restaurant-api.dicoding.dev/list')
.then(response => response.json())
.then(data => {
  const restaurantList = document.getElementById('restaurant-list');

  // Iterasi setiap restoran dalam data JSON
  data.restaurants.forEach(restaurant => {
    // Membuat elemen untuk setiap restoran
    const restaurantElement = document.createElement('div');
    restaurantElement.classList.add('restaurant');

    // Menambahkan nama restoran
    const nameElement = document.createElement('h2');
    nameElement.textContent = restaurant.name;
    restaurantElement.appendChild(nameElement);

    // Menambahkan gambar restoran
    const imageElement = document.createElement('img');
    imageElement.src = restaurant.pictureId;
    imageElement.alt = restaurant.name;
    restaurantElement.appendChild(imageElement);

    // Menambahkan deskripsi restoran
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = restaurant.description;
    descriptionElement.classList.add('description');
    restaurantElement.appendChild(descriptionElement);

    // Menambahkan rating restoran
    const ratingElement = document.createElement('p');
    ratingElement.textContent = `Rating: ${restaurant.rating}`;
    restaurantElement.appendChild(ratingElement);

    // Menambahkan tautan ke halaman detail restoran
    const detailLink = document.createElement('a');
    detailLink.href = `detail.html?id=${restaurant.id}`;
    detailLink.textContent = 'Lihat Detail';
    restaurantElement.appendChild(detailLink);

    // Menambahkan restoran ke daftar restoran
    restaurantList.appendChild(restaurantElement);
  });
})
.catch(error => console.error('Error loading restaurant data:', error));

// Untuk Halaman Detail Restoran

// Mendapatkan parameter ID restoran dari URL
const urlParams = new URLSearchParams(window.location.search);
const restaurantId = urlParams.get('id');

// Mengambil data detail restoran dari API
fetch(`https://restaurant-api.dicoding.dev/detail/${restaurantId}`)
.then(response => response.json())
.then(data => {
  // Menampilkan detail restoran
  const restaurantDetail = document.getElementById('restaurant-detail');

  // Menambahkan nama restoran
  const nameElement = document.createElement('h1');
  nameElement.textContent = data.restaurant.name;
  restaurantDetail.appendChild(nameElement);

  // Menambahkan gambar restoran
  const imageElement = document.createElement('img');
  imageElement.src = data.restaurant.pictureId;
  imageElement.alt = data.restaurant.name;
  restaurantDetail.appendChild(imageElement);

  // Menambahkan alamat restoran
  const addressElement = document.createElement('p');
  addressElement.textContent = `Alamat: ${data.restaurant.address}, ${data.restaurant.city}`;
  restaurantDetail.appendChild(addressElement);

  // Menambahkan deskripsi restoran
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = data.restaurant.description;
  restaurantDetail.appendChild(descriptionElement);

  // Menambahkan menu makanan
  const foodMenuElement = document.createElement('div');
  foodMenuElement.classList.add('menu');
  const foodTitle = document.createElement('h2');
  foodTitle.textContent = 'Menu Makanan';
  foodMenuElement.appendChild(foodTitle);
  data.restaurant.menus.foods.forEach(food => {
    const foodItem = document.createElement('p');
    foodItem.textContent = food.name;
    foodMenuElement.appendChild(foodItem);
  });
  restaurantDetail.appendChild(foodMenuElement);

})
.catch(error => console.error('Error loading restaurant detail:', error));

document.addEventListener('DOMContentLoaded', showFavoriteRestaurants);