const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

/* Fetch hotel data */
const fetchHotelData = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching hotel data:', error);
    return [];
  }
};

/* Display hotel information */
const displayHotelInfo = (hotel) => {
  const hotelInfo = document.getElementById('hotelInfo');
  hotelInfo.innerHTML = `
    <h3>${hotel.title}</h3>
    <p>${hotel.body}</p>
  `;
};

/* Populate hotel select options */
const populateHotelList = (hotels) => {
  const hotelList = document.getElementById('hotelList');
  hotels.forEach((hotel, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = hotel.title;
    hotelList.appendChild(option);
  });
};

/* Book reservation function */
const bookReservation = (firstName, lastName, checkIn, checkOut, hotel) => {
  const reservationResult = document.getElementById('reservationResult');
  reservationResult.innerHTML = `
    <p>Reservation booked for ${firstName} ${lastName}</p>
    <p>Check-in: ${checkIn}</p>
    <p>Check-out: ${checkOut}</p>
    <p>Hotel: ${hotel.title}</p>
  `;
};

/* Event listener for hotel selection */
document.getElementById('hotelList').addEventListener('change', async (event) => {
  const hotelIndex = event.target.value;
  const hotels = await fetchHotelData();
  const selectedHotel = hotels[hotelIndex];
  displayHotelInfo(selectedHotel);
});

/* Event listener for form submission */
document.getElementById('reservationForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const hotelIndex = document.getElementById('hotelList').value;
  const hotels = await fetchHotelData();
  const selectedHotel = hotels[hotelIndex];
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const checkIn = document.getElementById('checkIn').value;
  const checkOut = document.getElementById('checkOut').value;
  bookReservation(firstName, lastName, checkIn, checkOut, selectedHotel);
});

/* Initial fetch and populate hotel list */
fetchHotelData()
  .then((hotels) => populateHotelList(hotels));
