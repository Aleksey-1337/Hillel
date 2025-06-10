const apiKey = '1a8cad34c688a6c57fe1e6b89ca8501d';
const city = 'Kyiv';
const weatherEl = document.getElementById('weather');
const refreshBtn = document.getElementById('refresh');

async function fetchWeather() {
  weatherEl.innerHTML = '<p>Завантаження...</p>';

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`
    );
    const data = await res.json();

    const weatherHTML = `
      <p><strong>Місто:</strong> ${data.name}</p>
      <p><strong>Температура:</strong> ${data.main.temp}°C</p>
      <p><strong>Відчувається як:</strong> ${data.main.feels_like}°C</p>
      <p><strong>Погода:</strong> ${data.weather[0].description}</p>
      <p><strong>Тиск:</strong> ${data.main.pressure} hPa</p>
      <p><strong>Вологість:</strong> ${data.main.humidity}%</p>
      <p><strong>Вітер:</strong> ${data.wind.speed} м/с</p>
      <p><strong>Оновлено:</strong> ${new Date().toLocaleTimeString()}</p>
    `;
    weatherEl.innerHTML = weatherHTML;
  } catch (error) {
    weatherEl.innerHTML = '<p>Помилка при завантаженні даних</p>';
    console.error(error);
  }
}

refreshBtn.addEventListener('click', fetchWeather);

fetchWeather();
