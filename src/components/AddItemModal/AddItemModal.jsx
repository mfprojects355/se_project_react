import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { MODAL_ADD_CLOTHES } from "../../utils/constants";

const INITIAL_VALUES = {
  name: "",
  imageUrl: "",
  weather: "",
};

function AddItemModal({ isOpen, onAddItem, onCloseModal }) {
  const { values, handleChange, resetForm } = useForm(INITIAL_VALUES);

  const handleClose = () => {
    resetForm();
    onCloseModal();
  };

  const handleSubmit = () => {
    onAddItem(values, resetForm);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      title="New garment"
      name={MODAL_ADD_CLOTHES}
      buttonText="Add garment"
    >
      <label className="modal__label" htmlFor="add-clothes-name">
        <span className="modal__label-text ui-text-2_bold">Name</span>
        <input
          className="modal__input ui-text-2"
          id="add-clothes-name"
          name="name"
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label" htmlFor="add-clothes-image">
        <span className="modal__label-text ui-text-2_bold">Image URL</span>
        <input
          className="modal__input ui-text-2"
          id="add-clothes-image"
          name="imageUrl"
          type="url"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
      </label>
      <fieldset className="modal__fieldset">
        <legend className="modal__legend ui-text-2_bold">
          Select the weather type:
        </legend>
        <label className="modal__radio" htmlFor="garment-weather-hot">
          <input
            className="modal__radio-input"
            id="garment-weather-hot"
            type="radio"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
            required
          />
          <span className="modal__radio-text ui-text-2_bold">Hot</span>
        </label>
        <label className="modal__radio" htmlFor="garment-weather-warm">
          <input
            className="modal__radio-input"
            id="garment-weather-warm"
            type="radio"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          <span className="modal__radio-text ui-text-2_bold">Warm</span>
        </label>
        <label className="modal__radio" htmlFor="garment-weather-cold">
          <input
            className="modal__radio-input"
            id="garment-weather-cold"
            type="radio"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          <span className="modal__radio-text ui-text-2_bold">Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
