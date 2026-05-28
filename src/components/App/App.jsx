import { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import AddGarmentForm from "../AddGarmentForm/AddGarmentForm";
import ItemModal from "../ItemModal/ItemModal";
import { defaultClothingItems } from "../../utils/clothingItems";
import isValidImageUrl from "../../utils/isValidImageUrl";
import {
  fetchWeatherData,
  getDefaultWeatherData,
} from "../../utils/weatherApi";
import { MODAL_ADD_CLOTHES, MODAL_ITEM } from "../../utils/constants";
import "./App.css";

const INITIAL_GARMENT_FORM = {
  name: "",
  imageUrl: "",
  weather: "hot",
};

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [weatherData, setWeatherData] = useState(getDefaultWeatherData());
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [selectedCard, setSelectedCard] = useState(null);
  const [garmentForm, setGarmentForm] = useState(INITIAL_GARMENT_FORM);

  useEffect(() => {
    fetchWeatherData()
      .then(setWeatherData)
      .catch((error) => {
        console.error("Weather API request failed:", error.message);
        setWeatherData(getDefaultWeatherData());
      });
  }, []);

  const imageUrlError =
    garmentForm.imageUrl.trim() !== "" &&
    !isValidImageUrl(garmentForm.imageUrl);

  const isGarmentFormValid =
    garmentForm.name.trim() !== "" && isValidImageUrl(garmentForm.imageUrl);

  const resetGarmentForm = useCallback(() => {
    setGarmentForm(INITIAL_GARMENT_FORM);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveModal("");
    setSelectedCard(null);
    resetGarmentForm();
  }, [resetGarmentForm]);

  const handleOpenAddClothesModal = useCallback(() => {
    resetGarmentForm();
    setActiveModal(MODAL_ADD_CLOTHES);
  }, [resetGarmentForm]);

  const handleCardClick = useCallback((card) => {
    setSelectedCard(card);
    setActiveModal(MODAL_ITEM);
  }, []);

  const handleGarmentFormChange = useCallback((field, value) => {
    setGarmentForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleAddGarmentSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (!isGarmentFormValid) {
        return;
      }

      const newItem = {
        _id: Date.now(),
        name: garmentForm.name.trim(),
        link: garmentForm.imageUrl.trim(),
        weather: garmentForm.weather,
      };

      setClothingItems((prev) => [...prev, newItem]);
      handleCloseModal();
    },
    [garmentForm, handleCloseModal, isGarmentFormValid],
  );

  return (
    <div className="app">
      <Header
        weatherData={weatherData}
        onAddClothesClick={handleOpenAddClothesModal}
      />
      <Main
        weatherData={weatherData}
        clothingItems={clothingItems}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ModalWithForm
        isOpen={activeModal === MODAL_ADD_CLOTHES}
        onClose={handleCloseModal}
        onSubmit={handleAddGarmentSubmit}
        title="New garment"
        name={MODAL_ADD_CLOTHES}
        buttonText="Add garment"
        isSubmitDisabled={!isGarmentFormValid}
      >
        <AddGarmentForm
          name={garmentForm.name}
          imageUrl={garmentForm.imageUrl}
          weather={garmentForm.weather}
          imageUrlError={imageUrlError}
          onNameChange={(value) => handleGarmentFormChange("name", value)}
          onImageUrlChange={(value) =>
            handleGarmentFormChange("imageUrl", value)
          }
          onWeatherChange={(value) => handleGarmentFormChange("weather", value)}
        />
      </ModalWithForm>
      <ItemModal
        selectedCard={selectedCard}
        isOpen={activeModal === MODAL_ITEM}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
