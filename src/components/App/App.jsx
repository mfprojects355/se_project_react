import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { getItems, addItem, deleteItem } from "../../utils/api";
import {
  fetchWeatherData,
  getDefaultWeatherData,
} from "../../utils/weatherApi";
import {
  MODAL_ADD_CLOTHES,
  MODAL_DELETE_CONFIRMATION,
  MODAL_ITEM,
} from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [weatherData, setWeatherData] = useState(getDefaultWeatherData());
  const [clothingItems, setClothingItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  useEffect(() => {
    fetchWeatherData()
      .then(setWeatherData)
      .catch((error) => {
        console.error("Weather API request failed:", error.message);
        setWeatherData(getDefaultWeatherData());
      });
  }, []);

  useEffect(() => {
    getItems()
      .then(setClothingItems)
      .catch((error) => {
        console.error("Failed to fetch clothing items:", error.message);
      });
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveModal("");
    setSelectedCard(null);
    setCardToDelete(null);
  }, []);

  const handleOpenAddClothesModal = useCallback(() => {
    setActiveModal(MODAL_ADD_CLOTHES);
  }, []);

  const handleCardClick = useCallback((card) => {
    setSelectedCard(card);
    setActiveModal(MODAL_ITEM);
  }, []);

  const handleToggleSwitchChange = useCallback(() => {
    setCurrentTemperatureUnit((prev) => (prev === "F" ? "C" : "F"));
  }, []);

  const handleAddItem = useCallback(
    ({ name, imageUrl, weather }, resetForm) => {
      addItem({ name: name.trim(), imageUrl: imageUrl.trim(), weather })
        .then((newItem) => {
          setClothingItems((prev) => [...prev, newItem]);
          handleCloseModal();
          resetForm();
        })
        .catch((error) => {
          console.error("Failed to add clothing item:", error.message);
        });
    },
    [handleCloseModal],
  );

  const openConfirmationModal = useCallback((card) => {
    setCardToDelete(card);
    setActiveModal(MODAL_DELETE_CONFIRMATION);
  }, []);

  const handleCloseDeleteConfirmation = useCallback(() => {
    setCardToDelete(null);
    setActiveModal(MODAL_ITEM);
  }, []);

  const handleCardDelete = useCallback(() => {
    if (!cardToDelete) {
      return;
    }

    deleteItem(cardToDelete._id)
      .then(() => {
        setClothingItems((prev) =>
          prev.filter((item) => item._id !== cardToDelete._id),
        );
        setCardToDelete(null);
        setSelectedCard(null);
        setActiveModal("");
      })
      .catch((error) => {
        console.error("Failed to delete clothing item:", error.message);
      });
  }, [cardToDelete]);

  return (
    <div className="app">
      <h1 className="visually-hidden">WTWR — What to Wear?</h1>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="app__content">
          <Header
            weatherData={weatherData}
            onAddClothesClick={handleOpenAddClothesModal}
          />
          <div className="app__main">
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    clothingItems={clothingItems}
                    onCardClick={handleCardClick}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    clothingItems={clothingItems}
                    onCardClick={handleCardClick}
                    onAddNewClick={handleOpenAddClothesModal}
                  />
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === MODAL_ADD_CLOTHES}
          onAddItem={handleAddItem}
          onCloseModal={handleCloseModal}
        />
        <ItemModal
          selectedCard={selectedCard}
          isOpen={activeModal === MODAL_ITEM}
          onClose={handleCloseModal}
          onOpenConfirmationModal={openConfirmationModal}
        />
        <DeleteConfirmationModal
          isOpen={activeModal === MODAL_DELETE_CONFIRMATION}
          onClose={handleCloseDeleteConfirmation}
          onConfirm={handleCardDelete}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
