import sunnyBackground from "../../assets/sunny.svg";
import "./WeatherCard.css";

function WeatherCard({ weatherData, currentTemperatureUnit }) {
  const { temperature, isDay } = weatherData;
  const temp = temperature[currentTemperatureUnit];

  return (
    <article
      className={`weather-card ${isDay ? "" : "weather-card_type_night"}`}
      style={isDay ? { backgroundImage: `url(${sunnyBackground})` } : undefined}
      aria-label={`Current temperature, ${temp} degrees ${currentTemperatureUnit === "F" ? "Fahrenheit" : "Celsius"}`}
    >
      <p className="weather-card__temp">
        {temp}°{currentTemperatureUnit}
      </p>
    </article>
  );
}

export default WeatherCard;
