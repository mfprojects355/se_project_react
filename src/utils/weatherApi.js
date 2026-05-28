import { APIkey, coordinates, weatherCity } from "./constants";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";

export function getWeatherCondition(temperature) {
  if (temperature >= 86) {
    return "hot";
  }

  if (temperature >= 66) {
    return "warm";
  }

  return "cold";
}

export function getDefaultWeatherData() {
  const fallbackTemperatureF = 75;

  return {
    temperature: {
      F: fallbackTemperatureF,
      C: Math.round((fallbackTemperatureF - 32) * (5 / 9)),
    },
    weather: getWeatherCondition(fallbackTemperatureF),
    city: weatherCity,
    condition: "cloudy",
    isDay: true,
  };
}

export function processWeatherData(data) {
  const temperatureF = Math.round(data.main.temp);
  const temperatureC = Math.round((temperatureF - 32) * (5 / 9));
  const now = Date.now() / 1000;
  const isDay = now >= data.sys.sunrise && now < data.sys.sunset;

  return {
    temperature: {
      F: temperatureF,
      C: temperatureC,
    },
    weather: getWeatherCondition(temperatureF),
    city: weatherCity,
    condition: data.weather[0].main.toLowerCase(),
    isDay,
  };
}

export async function fetchWeatherData() {
  const url = `${WEATHER_API_URL}?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${APIkey}`;

  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message = errorData.message || "Failed to fetch weather data";
    throw new Error(message);
  }

  const data = await response.json();

  return processWeatherData(data);
}
