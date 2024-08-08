document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const img = document.getElementById("gif");
  const userSearch = document.getElementById("search").value;
  document.getElementById("search").value = "";

  getWeatherData(userSearch, img);
});

async function getWeatherData(userSearch, img) {
  const weatherJson = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userSearch}?unitGroup=us&key=YHFB27T2ZYH3GEB9JP4G7QPJN&contentType=json`,
    { mode: "cors" }
  );
  const weatherData = await weatherJson.json();

  const weatherLocation = `${weatherData.resolvedAddress}`;
  const weatherDescription = `${weatherData.currentConditions.conditions} weather`;
  const weatherActual = `temp: ${weatherData.currentConditions.temp}`;
  const weatherFeelsLike = `feels like: ${weatherData.currentConditions.feelslike}`;

  const location = document.getElementById("location");
  const description = document.getElementById("description");
  const acutalTemp = document.getElementById("actualTemp");
  const feelsLike = document.getElementById("feelsLike");

  location.textContent = `Location: ${weatherLocation}`;
  description.textContent = `Location: ${weatherDescription}`;
  acutalTemp.textContent = `Location: ${weatherActual}`;
  feelsLike.textContent = `Location: ${weatherFeelsLike}`;

  // gif content
  const gifJson = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=tR0GrwxMozZQX6Z8ADqTgZ8xsFL7nuh0&s=${weatherDescription}`,
    { mode: "cors" }
  );
  const gifData = await gifJson.json();
  img.src = gifData.data.images.original.url;

  const imgFrame = document.getElementById("imgFrame");
  imgFrame.style.backgroundImage = `url(${gifData.data.images.original.url})`;
}
