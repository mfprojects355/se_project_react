import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({
  weatherData,
  clothingItems,
  onCardClick,
  currentTemperatureUnit,
}) {
  const filteredClothingItems = clothingItems.filter(
    (item) => item.weather === weatherData.weather,
  );

  return (
    <main className="main">
      <WeatherCard
        weatherData={weatherData}
        currentTemperatureUnit={currentTemperatureUnit}
      />
      <p className="main__banner ui-text-1_100">
        Today is {weatherData.temperature[currentTemperatureUnit]}°
        {currentTemperatureUnit} / You may want to wear:
      </p>
      <ul className="main__cards-list">
        {filteredClothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
