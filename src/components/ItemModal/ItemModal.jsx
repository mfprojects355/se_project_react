import useModalClose from "../../utils/useModalClose";
import "../ModalWithForm/ModalWithForm.css";
import "./ItemModal.css";

const ITEM_MODAL_TITLE_ID = "item-modal-title";

function ItemModal({ selectedCard, isOpen, onClose }) {
  useModalClose(isOpen, onClose);

  const weatherLabel = selectedCard
    ? selectedCard.weather.charAt(0).toUpperCase() +
      selectedCard.weather.slice(1)
    : "";

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal modal_type_item modal_is-opened"
      role="dialog"
      aria-modal="true"
      aria-labelledby={ITEM_MODAL_TITLE_ID}
    >
      <button
        type="button"
        className="modal__overlay"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="modal__container item-modal__container">
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
          aria-label="Close modal"
        />
        {selectedCard && (
          <>
            <img
              className="item-modal__image"
              src={selectedCard.link}
              alt={selectedCard.name}
            />
            <h2
              className="item-modal__title ui-text-1"
              id={ITEM_MODAL_TITLE_ID}
            >
              {selectedCard.name}
            </h2>
            <p className="item-modal__weather ui-text-2">
              Weather: {weatherLabel}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemModal;
