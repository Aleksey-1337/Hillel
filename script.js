const city = 'Kyiv';
const apiKey = '1a8cad34c688a6c57fe1e6b89ca8501d';

const elements = {
  city: document.querySelector('.weather__city'),
  temp: document.querySelector('.weather__temp'),
  feels: document.querySelector('.weather__feels'),
  desc: document.querySelector('.weather__desc'),
  humidity: document.querySelector('.weather__humidity'),
  pressure: document.querySelector('.weather__pressure'),
  wind: document.querySelector('.weather__wind'),
  refresh: document.querySelector('.weather__refresh')
};

function fetchWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Помилка при завантаженні даних');
      }
      return response.json();
    })
    .then(data => {
      elements.city.textContent = `Місто: ${data.name}`;
      elements.temp.textContent = `Температура: ${Math.round(data.main.temp)}°C`;
      elements.feels.textContent = `Відчувається як: ${Math.round(data.main.feels_like)}°C`;
      elements.desc.textContent = `${data.weather[0].description}`;
      elements.humidity.textContent = `Вологість: ${data.main.humidity}%`;
      elements.pressure.textContent = `Тиск: ${data.main.pressure} hPa`;
      elements.wind.textContent = `Вітер: ${data.wind.speed} м/с`;
    })
    .catch(error => {
      elements.city.textContent = '';
      elements.temp.textContent = '';
      elements.feels.textContent = '';
      elements.desc.textContent = 'Помилка при завантаженні даних';
      elements.humidity.textContent = '';
      elements.pressure.textContent = '';
      elements.wind.textContent = '';
    });
}

elements.refresh.addEventListener('click', fetchWeather);
fetchWeather();
