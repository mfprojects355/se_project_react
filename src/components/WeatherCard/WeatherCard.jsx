import sunnyBackground from "../../assets/sunny.svg";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  const { temperature, isDay } = weatherData;

  return (
    <article
      className={`weather-card ${isDay ? "" : "weather-card_type_night"}`}
      style={isDay ? { backgroundImage: `url(${sunnyBackground})` } : undefined}
      aria-label={`Current temperature, ${temperature.F} degrees Fahrenheit`}
    >
      <p className="weather-card__temp">{temperature.F}°F</p>
    </article>
  );
}

export default WeatherCard;
