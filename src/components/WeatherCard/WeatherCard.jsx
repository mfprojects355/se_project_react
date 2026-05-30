import { useContext } from "react";
import sunnyBackground from "../../assets/sunny.svg";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const { temperature, isDay } = weatherData;
  const temp = temperature[currentTemperatureUnit];

  return (
    <article
      className={`weather-card ${isDay ? "" : "weather-card_type_night"}`}
      style={{ backgroundImage: `url(${sunnyBackground})` }}
      aria-label={`Current temperature, ${temp} degrees ${currentTemperatureUnit === "F" ? "Fahrenheit" : "Celsius"}`}
    >
      <p className="weather-card__temp">
        {temp}°{currentTemperatureUnit}
      </p>
    </article>
  );
}

export default WeatherCard;
